import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import "dotenv/config";
import mainRouter from "../routes/main.route.js";
import { errorHandler, notFoundHandler } from "../middleware/error.middleware.js";
import { requestLogger, securityLogger } from "../middleware/logging.middleware.js";

const app = express();

// Security middleware
app.use(helmet());

// Logging middleware
app.use(requestLogger);
app.use(securityLogger);

// Rate limiting - only apply in production
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: "Too many requests from this IP, please try again later.",
    retryAfter: "15 minutes"
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Specific rate limit for contact form (more restrictive)
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // limit each IP to 5 contact form submissions per hour
  message: {
    error: "Too many contact form submissions from this IP, please try again later.",
    retryAfter: "1 hour"
  },
  skipSuccessfulRequests: false,
});

// Apply rate limiting only in production
if (process.env.NODE_ENV === 'production') {
  console.log('🔒 Rate limiting enabled (production mode)');
  app.use(limiter);
  app.use("/api/contact", contactLimiter);
} else {
  console.log('🚀 Rate limiting disabled (development mode)');
}

// Request size limits - more lenient in development
if (process.env.NODE_ENV === 'production') {
  app.use(express.json({ limit: '10kb' })); // Limit JSON payload size
  app.use(express.urlencoded({ extended: true, limit: '10kb' })); // Limit URL-encoded payload size
  console.log('📏 Request size limits: 10kb (production mode)');
} else {
  app.use(express.json({ limit: '50mb' })); // Larger limit for development
  app.use(express.urlencoded({ extended: true, limit: '50mb' })); // Larger limit for development
  console.log('📏 Request size limits: 50mb (development mode)');
}

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

// Contact-specific rate limiting is now applied conditionally above
app.use("/api", mainRouter);

// Error handling middleware (must be last)
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
