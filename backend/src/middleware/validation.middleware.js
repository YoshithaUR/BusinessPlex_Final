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

// Validation rules for application form
export const applicationValidation = [
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
  
  body('phone')
    .trim()
    .matches(/^[\+]?[0-9\s\-\(\)]{8,15}$/)
    .withMessage('Please provide a valid phone number (8-15 digits, can include spaces, hyphens, parentheses, and +)')
    .escape(),
  
  body('address')
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('Address is required and must be between 5 and 200 characters')
    .escape(),
  
  body('suburb')
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage('Suburb must be less than 100 characters')
    .escape(),
  
  body('postcode')
    .optional()
    .trim()
    .custom((value) => {
      if (value && value !== '') {
        if (!/^[0-9]{4}$/.test(value)) {
          throw new Error('Postcode must be exactly 4 digits');
        }
      }
      return true;
    })
    .escape(),
  
  body('state')
    .optional()
    .trim()
    .isIn(['WA', 'NSW', 'VIC', 'QLD', 'SA', 'TAS', 'NT', 'ACT'])
    .withMessage('Please select a valid state')
    .escape(),
  
  body('dateOfBirth')
    .trim()
    .custom((value) => {
      // Handle different date formats
      let birthDate;
      
      // Try parsing as ISO date first
      if (value.match(/^\d{4}-\d{2}-\d{2}$/)) {
        birthDate = new Date(value + 'T00:00:00');
      } else {
        birthDate = new Date(value);
      }
      
      // Check if date is valid
      if (isNaN(birthDate.getTime())) {
        throw new Error('Please provide a valid date of birth');
      }
      
      // Check age range
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      // Adjust age if birthday hasn't occurred this year
      const actualAge = monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate()) 
        ? age - 1 
        : age;
      
      if (actualAge < 15 || actualAge > 100) {
        throw new Error('Age must be between 15 and 100 years');
      }
      
      return true;
    }),
  
  body('programType')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Program type is required')
    .isIn([
      'Small Business Training - Certificate III',
      'Small Business Training - Certificate IV',
      'Exploring Self-Employment Workshop',
      'Business Advice Session',
      'Business Health Check'
    ])
    .withMessage('Please select a valid program type')
    .escape(),
  
  body('preferredStartDate')
    .optional()
    .trim()
    .custom((value) => {
      if (value && value !== '') {
        // Try parsing as ISO date first
        if (value.match(/^\d{4}-\d{2}-\d{2}$/)) {
          const date = new Date(value + 'T00:00:00');
          if (isNaN(date.getTime())) {
            throw new Error('Please provide a valid preferred start date');
          }
        } else {
          const date = new Date(value);
          if (isNaN(date.getTime())) {
            throw new Error('Please provide a valid preferred start date');
          }
        }
      }
      return true;
    }),
  
  body('deliveryMode')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Delivery mode is required')
    .isIn(['face-to-face', 'online', 'blended'])
    .withMessage('Please select a valid delivery mode')
    .escape(),
  
  body('employmentStatus')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Employment status is required')
    .isIn(['unemployed', 'underemployed', 'employed', 'self-employed', 'student', 'retired'])
    .withMessage('Please select a valid employment status')
    .escape(),
  
  body('centrelinkCustomer')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Centrelink customer status is required')
    .isIn(['yes', 'no'])
    .withMessage('Please select yes or no')
    .escape(),
  
  body('centrelinkNumber')
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage('Centrelink number must be less than 50 characters')
    .escape(),
  
  body('businessIdea')
    .trim()
    .isLength({ min: 10, max: 2000 })
    .withMessage('Business idea description is required and must be between 10 and 2000 characters')
    .escape(),
  
  body('businessExperience')
    .optional()
    .trim()
    .isLength({ max: 2000 })
    .withMessage('Business experience must be less than 2000 characters')
    .escape(),
  
  body('industryType')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Industry type is required')
    .isIn([
      'retail', 'hospitality', 'technology', 'healthcare', 'education',
      'construction', 'professional-services', 'manufacturing', 'agriculture', 'other'
    ])
    .withMessage('Please select a valid industry type')
    .escape(),
  
  body('businessStage')
    .optional()
    .trim()
    .isIn(['idea', 'planning', 'startup', 'existing'])
    .withMessage('Please select a valid business stage')
    .escape(),
  
  body('previousTraining')
    .optional()
    .trim()
    .isLength({ max: 2000 })
    .withMessage('Previous training must be less than 2000 characters')
    .escape(),
  
  body('specialRequirements')
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage('Special requirements must be less than 1000 characters')
    .escape(),
  
  body('hearAboutUs')
    .optional()
    .trim()
    .isIn(['google', 'social-media', 'referral', 'centrelink', 'advertisement', 'other'])
    .withMessage('Please select a valid option')
    .escape(),
  
  body('eligibilityDeclaration')
    .custom((value) => {
      // Handle both boolean and string values
      const boolValue = typeof value === 'boolean' ? value : value === 'true' || value === true;
      if (!boolValue) {
        throw new Error('You must confirm that you meet the eligibility criteria');
      }
      return true;
    }),
  
  body('accuracyDeclaration')
    .custom((value) => {
      // Handle both boolean and string values
      const boolValue = typeof value === 'boolean' ? value : value === 'true' || value === true;
      if (!boolValue) {
        throw new Error('You must confirm that all information is accurate');
      }
      return true;
    }),
  
  body('privacyConsent')
    .custom((value) => {
      // Handle both boolean and string values
      const boolValue = typeof value === 'boolean' ? value : value === 'true' || value === true;
      if (!boolValue) {
        throw new Error('You must consent to the privacy policy');
      }
      return true;
    })
];

// Middleware to check for validation errors
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    console.log('=== VALIDATION ERRORS DEBUG ===');
    console.log('Validation errors:', JSON.stringify(errors.array(), null, 2));
    
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
