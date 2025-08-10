import { body, validationResult } from 'express-validator';

// Validation rules for contact form
export const contactValidation = [
  body('firstName')
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('First name is required and must be between 1 and 50 characters')
    .matches(/^[a-zA-Z\s'-]+$/)
    .withMessage('First name can only contain letters, spaces, hyphens, and apostrophes')
    .escape(),
  
  body('lastName')
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Last name is required and must be between 1 and 50 characters')
    .matches(/^[a-zA-Z\s'-]+$/)
    .withMessage('Last name can only contain letters, spaces, hyphens, and apostrophes')
    .escape(),
  
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail()
    .isLength({ max: 100 })
    .withMessage('Email must be less than 100 characters'),
  
  body('age')
    .trim()
    .isInt({ min: 13, max: 120 })
    .withMessage('Age must be a number between 13 and 120')
    .toInt(),
  
  body('contactNumber')
    .trim()
    .matches(/^[\+]?[0-9\s\-\(\)]{8,15}$/)
    .withMessage('Please provide a valid phone number (8-15 digits, can include spaces, hyphens, parentheses, and +)')
    .escape(),
  
  body('message')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be between 10 and 1000 characters')
    .escape()
];

// Validation rules for newsletter subscription
export const newsletterValidation = [
  body('name')
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Name is required and must be between 1 and 100 characters')
    .matches(/^[a-zA-Z\s'-]+$/)
    .withMessage('Name can only contain letters, spaces, hyphens, and apostrophes')
    .escape(),
  
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail()
    .isLength({ max: 100 })
    .withMessage('Email must be less than 100 characters')
];

// Example: Simple email-only validation
export const emailOnlyValidation = [
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail()
    .isLength({ max: 100 })
    .withMessage('Email must be less than 100 characters')
];

// Example: User registration validation
export const userRegistrationValidation = [
  body('username')
    .trim()
    .isLength({ min: 3, max: 30 })
    .withMessage('Username must be between 3 and 30 characters')
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage('Username can only contain letters, numbers, and underscores')
    .escape(),
  
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('Password must contain at least one lowercase letter, one uppercase letter, and one number')
];

// Middleware to check for validation errors
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: 'Validation failed',
      errors: errors.array().map(error => ({
        field: error.path,
        message: error.msg,
        value: error.value
      }))
    });
  }
  
  next();
};

// Sanitize and validate all input fields
export const sanitizeInput = (req, res, next) => {
  // Remove any potential XSS or injection attempts
  const sanitizeString = (str) => {
    if (typeof str !== 'string') return str;
    return str
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  };

  // Sanitize all string fields in req.body
  Object.keys(req.body).forEach(key => {
    if (typeof req.body[key] === 'string') {
      req.body[key] = sanitizeString(req.body[key]);
    }
  });

  next();
};

// Higher-order function to automatically apply default middleware chain
export const withDefaultMiddleware = (controller, customValidation = null) => {
  const middlewareChain = [sanitizeInput];
  
  // Add custom validation if provided, otherwise use default contact validation
  if (customValidation) {
    middlewareChain.push(customValidation);
  } else {
    middlewareChain.push(contactValidation);
  }
  
  middlewareChain.push(handleValidationErrors, controller);
  
  return middlewareChain;
};

// Alternative: Create a route wrapper that automatically applies middleware
export const createValidatedRoute = (validationRules = null) => {
  return (controller) => {
    const middlewareChain = [sanitizeInput];
    
    if (validationRules) {
      middlewareChain.push(validationRules);
    } else {
      middlewareChain.push(contactValidation);
    }
    
    middlewareChain.push(handleValidationErrors, controller);
    
    return middlewareChain;
  };
};
