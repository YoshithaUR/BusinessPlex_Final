// Request logging middleware
export const requestLogger = (req, res, next) => {
  const start = Date.now();
  
  // Log request details
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} - IP: ${req.ip}`);
  
  // Log request body for POST requests (excluding sensitive data)
  if (req.method === 'POST' && req.body) {
    const sanitizedBody = { ...req.body };
    // Remove sensitive fields from logs
    delete sanitizedBody.password;
    delete sanitizedBody.token;
    console.log('Request body:', sanitizedBody);
  }
  
  // Override res.end to log response
  const originalEnd = res.end;
  res.end = function(chunk, encoding) {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} - ${res.statusCode} - ${duration}ms`);
    originalEnd.call(this, chunk, encoding);
  };
  
  next();
};

// Security event logging
export const securityLogger = (req, res, next) => {
  // Log potential security threats
  const userAgent = req.get('User-Agent') || '';
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+=/i,
    /union\s+select/i,
    /drop\s+table/i,
    /delete\s+from/i
  ];
  
  const isSuspicious = suspiciousPatterns.some(pattern => 
    pattern.test(req.originalUrl) || pattern.test(userAgent)
  );
  
  if (isSuspicious) {
    console.warn(`[SECURITY] Suspicious request detected:`, {
      ip: req.ip,
      userAgent,
      url: req.originalUrl,
      method: req.method,
      timestamp: new Date().toISOString()
    });
  }
  
  next();
};
