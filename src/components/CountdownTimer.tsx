import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

type CountdownProps = {
  targetDate?: string | Date; // ISO string or Date object
};

const EVENT_TITLE = 'ELICIT FEST';
const EVENT_DETAILS = 'Reminder: ELICIT FEST is starting soon!';
const EVENT_LOCATION = 'Manipal University Jaipur';

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [gcalUrl, setGcalUrl] = useState<string>('#');
  const [icsContent, setIcsContent] = useState<string>('');

  useEffect(() => {
    // Resolve target date from prop or default to 30 days from now
    let resolvedTarget: Date;
    if (targetDate) {
      resolvedTarget = typeof targetDate === 'string' ? new Date(targetDate) : targetDate;
    } else {
      
      const now = new Date();
      const year = now.getFullYear();
      let candidate = new Date(year, 9, 15, 0, 0, 0); // October 15th
      if (candidate.getTime() <= now.getTime()) {
        candidate = new Date(year + 1, 9, 15, 0, 0, 0);
      }
      resolvedTarget = candidate;
    }

    // Build Google Calendar URL (currently 72h event window)
    const pad = (n: number) => n.toString().padStart(2, '0');
    const fmt = (d: Date) => `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;
    const start = resolvedTarget;
    const end = new Date(start.getTime() + 72 * 60 * 60 * 1000);
    const datesParam = `${fmt(start)}/${fmt(end)}`;
    const url = new URL('https://calendar.google.com/calendar/render');
    url.searchParams.set('action', 'TEMPLATE');
    url.searchParams.set('text', EVENT_TITLE);
    url.searchParams.set('dates', datesParam);
    url.searchParams.set('details', EVENT_DETAILS);
    url.searchParams.set('location', EVENT_LOCATION);
    setGcalUrl(url.toString());

    // Build ICS content for non-Google calendar apps
    const escapeICS = (val: string) => val.replace(/,/g, '\\,').replace(/;/g, '\\;').replace(/\n/g, '\\n');
    const icsLines = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//ELICIT FEST//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${start.getTime()}@elicit`,
      `DTSTAMP:${fmt(new Date())}`,
      `DTSTART:${fmt(start)}`,
      `DTEND:${fmt(end)}`,
      `SUMMARY:${escapeICS(EVENT_TITLE)}`,
      `DESCRIPTION:${escapeICS(EVENT_DETAILS)}`,
      `LOCATION:${escapeICS(EVENT_LOCATION)}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ];
    setIcsContent(icsLines.join('\r\n'));

    const tick = () => {
      const now = Date.now();
      const distance = resolvedTarget.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  const isBreach = true; // Event is over, permanently show "SYSTEM BREACHED"

  const handleAdd = useCallback(() => {
    // Download ICS
    if (icsContent) {
      try {
        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const objectUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = objectUrl;
        a.download = 'ELICIT-FEST.ics';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(objectUrl), 2000);
      } catch (e) {
        // silently ignore
      }
    }
    // Open Google Calendar template
    if (gcalUrl && gcalUrl !== '#') {
      const popup = window.open(gcalUrl, '_blank', 'noopener,noreferrer');
      if (!popup) {
        // Popup blocked, fallback to same-tab navigation
        window.location.href = gcalUrl;
      }
    }
  }, [icsContent, gcalUrl]);

  const keyHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <motion.div
      role="button"
      tabIndex={0}
      onClick={handleAdd}
      onKeyDown={keyHandler}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="block cursor-pointer select-none bg-black bg-opacity-70 border border-cyan-400 p-4 font-mono hover:border-pink-500 hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
      style={{
        clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
        boxShadow: '0 0 20px rgba(0, 255, 65, 0.4), 0 0 40px rgba(255, 0, 64, 0.2)',
        textDecoration: 'none'
      }}
      title="Add ELICIT FEST to your calendar (Downloads .ics & opens Google Calendar)"
    >
      {isBreach ? (
        <div className="text-center">
          <div className="text-lime-400 text-xs mb-1 matrix-glow">SYSTEM BREACH IN:</div>
          <motion.div
            className="text-red-400 text-2xl md:text-3xl font-bold"
            animate={{ scale: [1, 1.05, 1], textShadow: ['0 0 8px #ff0040', '0 0 20px #ff0040', '0 0 8px #ff0040'] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            SYSTEM BREACHED
          </motion.div>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2 text-center">
          {[
            { value: timeLeft.days, label: 'DAYS' },
            { value: timeLeft.hours, label: 'HRS' },
            { value: timeLeft.minutes, label: 'MIN' },
            { value: timeLeft.seconds, label: 'SEC' },
          ].map((item, index) => (
            <div key={index} className="flex flex-col">
              <motion.div 
                className="text-red-400 text-lg font-bold"
                animate={{
                  scale: [1, 1.1, 1],
                  textShadow: [
                    '0 0 5px #ff0040',
                    '0 0 15px #ff0040, 0 0 25px #ff0040',
                    '0 0 5px #ff0040'
                  ]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              >
                {formatNumber(item.value)}
              </motion.div>
              <div className="text-lime-400 text-xs">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default CountdownTimer;