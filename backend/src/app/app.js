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

// Rate limiting
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

// Apply rate limiting to all requests
app.use(limiter);

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

// Request size limits
app.use(express.json({ limit: '10kb' })); // Limit JSON payload size
app.use(express.urlencoded({ extended: true, limit: '10kb' })); // Limit URL-encoded payload size

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

// Apply contact-specific rate limiting to the contact route
app.use("/api/contact", contactLimiter);
app.use("/api", mainRouter);

// Error handling middleware (must be last)
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
