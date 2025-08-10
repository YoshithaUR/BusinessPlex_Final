// Global error handling middleware
export const errorHandler = (err, req, res, next) => {
  console.error('Unhandled error:', err);

  // Handle specific error types
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({
      message: 'Invalid JSON payload',
      error: 'The request body contains invalid JSON'
    });
  }

  if (err.type === 'entity.too.large') {
    return res.status(413).json({
      message: 'Request too large',
      error: 'The request payload exceeds the size limit'
    });
  }

  // Default error response
  res.status(500).json({
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
};

// 404 handler for unmatched routes
export const notFoundHandler = (req, res) => {
  res.status(404).json({
    message: 'Route not found',
    error: `Cannot ${req.method} ${req.originalUrl}`
  });
};
