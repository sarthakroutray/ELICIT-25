import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';

// Optional .env support locally; Render injects env vars automatically
try {
  // eslint-disable-next-line import/no-unresolved
  await import('dotenv/config');
} catch {}

const app = express();
const PORT = process.env.PORT || 10000;
const ORIGIN = process.env.FRONTEND_ORIGIN || '*';
const MONGODB_URI = process.env.MONGODB_URI || '';

// Middleware
app.disable('x-powered-by');
// Behind Render's proxy; trust X-Forwarded-* headers so req.ip is correct
// Trust only the first proxy (Render) so client IP is correct without being overly permissive
app.set('trust proxy', 1);
app.use(helmet({
  contentSecurityPolicy: false, // keep simple defaults; adjust if needed
}));
app.use(compression());
app.use(express.json({ limit: '1mb' }));
app.use(cors({ origin: ORIGIN, credentials: true }));

// Basic rate limiter on API
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 300, // 300 req/min per IP
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api', limiter);

// Health endpoints
app.get(['/healthz', '/_health'], (_req, res) => res.status(200).send('ok'));

// Mongo connection
if (MONGODB_URI) {
  mongoose
    .connect(MONGODB_URI, {
      dbName: process.env.MONGODB_DBNAME || undefined,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => {
      console.error('MongoDB connection error:', err.message);
    });
} else {
  console.warn('MONGODB_URI not set; API will run without DB');
}

// Example API route
app.get('/api/hello', (_req, res) => {
  res.json({ ok: true, msg: 'Hello from Render backend' });
});

// Contact schema (optional save when DB connected)
let ContactModel = null;
try {
  const contactSchema = new mongoose.Schema(
    {
      name: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true },
      phone: { type: String, trim: true },
      university: { type: String, trim: true },
      message: { type: String, required: true, trim: true },
      userAgent: { type: String },
      ip: { type: String },
    },
    { timestamps: true }
  );
  ContactModel = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
} catch {}

// POST /api/contact
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, university, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }
    const record = {
      name: String(name).slice(0, 100),
      email: String(email).slice(0, 160),
      phone: phone ? String(phone).slice(0, 40) : '',
      university: university ? String(university).slice(0, 120) : '',
      message: String(message).slice(0, 4000),
      userAgent: req.get('user-agent') || '',
      ip: req.headers['x-forwarded-for']?.toString().split(',')[0] || req.socket.remoteAddress || '',
    };

    let saved = false;
    if (MONGODB_URI && mongoose.connection.readyState === 1 && ContactModel) {
      try {
        await ContactModel.create(record);
        saved = true;
      } catch (err) {
        console.warn('Contact save failed:', err?.message || err);
      }
    } else {
      console.log('Contact received (no DB):', record);
    }
    return res.status(200).json({ ok: true, saved });
  } catch (err) {
    console.error('Contact error:', err?.message || err);
    return res.status(500).json({ ok: false, error: 'Server error' });
  }
});

// Root info for Render service
app.get('/', (_req, res) => {
  res.type('text/plain').send('ELICIT-25 backend running. Use /api/* endpoints.');
});

// 404 handler
app.use((req, res) => {
  if (req.path.startsWith('/api')) return res.status(404).json({ ok: false, error: 'Not found' });
  return res.status(404).type('text/plain').send('Not found');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API server listening on ${PORT}`);
});
