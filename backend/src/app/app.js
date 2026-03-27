import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import "dotenv/config";
import mainRouter from "../routes/main.route.js";
import { errorHandler, notFoundHandler } from "../middleware/error.middleware.js";
import { requestLogger, securityLogger } from "../middleware/logging.middleware.js";

const app = express();

// Environment-based security configuration
const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

// Security middleware - more lenient in development
if (isProduction) {
  // Full security headers in production
  app.use(helmet());
  console.log('🔒 Full security headers enabled (production mode)');
} else {
  // Relaxed security headers in development
  app.use(helmet({
    contentSecurityPolicy: false, // Disable CSP in development
    crossOriginEmbedderPolicy: false, // Disable COEP in development
    crossOriginResourcePolicy: false, // Disable CORP in development
  }));
  console.log('🚀 Relaxed security headers enabled (development mode)');
}

// Logging middleware - verbose in development, minimal in production
if (isProduction) {
  app.use(requestLogger); // Full logging in production
  app.use(securityLogger); // Security monitoring in production
  console.log('📝 Full logging enabled (production mode)');
} else {
  // Minimal logging in development
  app.use((req, res, next) => {
    console.log(`[DEV] ${req.method} ${req.originalUrl}`);
    next();
  });
  console.log('📝 Minimal logging enabled (development mode)');
}

// Rate limiting - only apply in production
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: "Too many requests from this IP, please try again later.",
    retryAfter: "15 minutes"
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // limit each IP to 5 contact form submissions per hour
  message: {
    error: "Too many contact form submissions from this IP, please try again later.",
    retryAfter: "1 hour"
  },
  skipSuccessfulRequests: false,
});

if (isProduction) {
  console.log('🔒 Rate limiting enabled (production mode)');
  app.use(limiter);
  app.use("/api/contact", contactLimiter);
} else {
  console.log('🚀 Rate limiting disabled (development mode)');
}

// Request size limits - more lenient in development
if (isProduction) {
  app.use(express.json({ limit: '10kb' }));
  app.use(express.urlencoded({ extended: true, limit: '10kb' }));
  console.log('📏 Request size limits: 10kb (production mode)');
} else {
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true, limit: '50mb' }));
  console.log('📏 Request size limits: 50mb (development mode)');
}

// CORS configuration - more permissive in development
if (isProduction) {
  // Strict CORS in production
  app.use(cors({ 
    origin: process.env.CLIENT_URL, 
    credentials: true,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
  console.log('🌐 Strict CORS enabled (production mode)');
} else {
  // Permissive CORS in development
  app.use(cors({ 
    origin: true, // Allow all origins in development
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
  }));
  console.log('🌐 Permissive CORS enabled (development mode)');
}

app.use("/api", mainRouter);

// Error handling middleware (must be last)
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
