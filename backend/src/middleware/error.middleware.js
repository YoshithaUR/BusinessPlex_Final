// Global error handling middleware
export const errorHandler = (err, req, res, next) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const isDevelopment = process.env.NODE_ENV === 'development';

  console.error('Unhandled error:', err);

  // Handle specific error types
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({
      message: 'Invalid JSON payload',
      error: 'The request body contains invalid JSON',
      ...(isDevelopment && { details: err.message, stack: err.stack })
    });
  }

  if (err.type === 'entity.too.large') {
    return res.status(413).json({
      message: 'Request too large',
      error: 'The request payload exceeds the size limit',
      ...(isDevelopment && { 
        details: err.message, 
        limit: process.env.NODE_ENV === 'production' ? '10kb' : '50mb',
        receivedSize: err.length 
      })
    });
  }

  // Default error response
  res.status(500).json({
    message: 'Internal server error',
    error: isProduction ? 'Something went wrong' : err.message,
    ...(isDevelopment && { 
      stack: err.stack,
      timestamp: new Date().toISOString(),
      path: req.originalUrl,
      method: req.method
    })
  });
};

// 404 handler for unmatched routes
export const notFoundHandler = (req, res) => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  res.status(404).json({
    message: 'Route not found',
    error: `Cannot ${req.method} ${req.originalUrl}`,
    ...(isDevelopment && {
      availableRoutes: [
        'GET /api/test',
        'POST /api/contact',
        'POST /api/newsletter', 
        'POST /api/application',
        'POST /api/enrolment'
      ],
      timestamp: new Date().toISOString()
    })
  });
};
