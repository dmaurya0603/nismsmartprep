import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import { createClient } from '@supabase/supabase-js';
import formulasRouter from './routes/formulas.js';
import gradeAttemptRouter from './routes/grade-attempt.js';
import sessionReportRouter from './routes/session-report.js';
import quizRouter from './routes/quiz.js';
import authRouter from './routes/auth.js';
import subscriptionsRouter from './routes/subscriptions.js';
import { authenticateUser, requireSubscription } from './middleware/auth.js';

const app = express();
// Trust proxy (required for rate limiting behind ngrok/load balancers)
app.set('trust proxy', 1);

const PORT = process.env.PORT || 3000;

// Supabase client - use service role key for backend operations
export const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY || ''
);

// Helper function to get current time in IST
function getISTDate(): Date {
  const d = new Date();
  return new Date(d.getTime() + (5.5 * 60 * 60 * 1000));
}

// Middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
})); // Security headers
app.use(compression()); // Gzip compression

// CORS configuration - allow all origins
const corsOptions = {
  origin: true, // Allow all origins
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin']
};
app.use(cors(corsOptions));
// Use JSON parser for all routes except the webhook
app.use((req, res, next) => {
  if (req.originalUrl.startsWith('/api/subscriptions/webhook')) {
    next();
  } else {
    express.json()(req, res, next);
  }
});

// Rate Limiting (100 req per 15 min per IP)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api', limiter);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: getISTDate().toISOString() });
});

// Public routes
app.use('/api/auth', authRouter);
app.use('/api/subscriptions', subscriptionsRouter);

// Protected routes (require authentication and active subscription)
app.use('/api/formulas', authenticateUser, requireSubscription, formulasRouter);
app.use('/api/grade-attempt', authenticateUser, requireSubscription, gradeAttemptRouter);
app.use('/api/session-report', authenticateUser, requireSubscription, sessionReportRouter);
app.use('/api/quiz', authenticateUser, requireSubscription, quizRouter);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
