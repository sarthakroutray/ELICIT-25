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
