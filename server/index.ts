import express, { type Request, Response, NextFunction } from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

// Security: Trust proxy headers (required for rate limiting behind Replit proxy)
app.set('trust proxy', 1);

// Security: Add Helmet middleware for security headers
const isDevelopment = process.env.NODE_ENV === 'development';

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: isDevelopment 
        ? ["'self'", "'unsafe-inline'", "'unsafe-eval'"] // Required for Vite HMR in dev
        : ["'self'"], // Strict in production
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      mediaSrc: ["'self'"], // Allow videos from same origin
      connectSrc: isDevelopment
        ? ["'self'", "ws:", "wss:"] // Required for Vite HMR websocket
        : ["'self'"],
      frameSrc: ["'none'"],
    },
  },
  hsts: {
    maxAge: 31536000, // 1 year
    includeSubDomains: true,
    preload: true,
  },
  frameguard: { action: 'deny' },
  noSniff: true,
  xssFilter: true,
}));

// Security: CORS configuration
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [];
const replitDomains = process.env.REPLIT_DOMAINS?.split(',') || [];

app.use(cors({
  origin: (origin, callback) => {
    // In development, allow all origins for Vite HMR
    if (isDevelopment) {
      return callback(null, true);
    }
    
    // Allow requests with no origin (mobile apps, server-to-server)
    if (!origin) return callback(null, true);
    
    // In production, only allow configured origins and Replit domains
    const isAllowed = [...allowedOrigins, ...replitDomains].some(allowed => {
      // Exact match
      if (origin === allowed) return true;
      // Subdomain match (must have dot before domain to prevent suffix spoofing)
      if (origin.endsWith('.' + allowed)) return true;
      // Protocol prefix match for replit domains (e.g., https://xyz.replit.app)
      if (allowed && origin.includes('://' + allowed)) return true;
      return false;
    });
    
    if (isAllowed) {
      return callback(null, true);
    }
    
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  optionsSuccessStatus: 200,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Security: Request logging (sanitized - no sensitive data)
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      // Only log method, path, status, and duration - no request/response bodies
      const logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  // Security: Improved error handler - no stack trace exposure
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    
    // In production, send generic error message
    const message = process.env.NODE_ENV === 'production' 
      ? 'Internal Server Error' 
      : err.message || 'Internal Server Error';

    // Log error for debugging but don't expose to client
    console.error('Error:', {
      status,
      message: err.message,
      path: _req.path,
      method: _req.method,
    });

    res.status(status).json({ 
      error: message,
      ...(process.env.NODE_ENV !== 'production' && { stack: err.stack })
    });
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
