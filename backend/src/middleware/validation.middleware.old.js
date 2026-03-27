import { body, validationResult } from 'express-validator';
import { createEmailValidator } from '../utils/emailValidation.js';

// Environment check
const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

// Development-friendly validation wrapper
const devFriendlyValidation = (validationRules) => {
  if (isDevelopment) {
    // In development, make validation more lenient
    return validationRules.map(rule => {
      // Make optional fields truly optional in development
      if (rule.optional) {
        return rule.optional();
      }
      // Relax length requirements in development
      if (rule.isLength) {
        const originalLength = rule.isLength;
        return rule.isLength({ 
          min: Math.floor(originalLength.min * 0.5), // 50% of production min
          max: originalLength.max * 2 // Double the production max
        });
      }
      return rule;
    });
  }
  return validationRules;
};

// Validation rules for contact form
export const contactValidation = devFriendlyValidation([
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
    .custom((value) => {
      if (!value) return true; // Let required validation handle empty values
      
      // Check basic syntax
      if (!isValidSyntax(value)) {
        throw new Error('Please provide a valid email address');
      }
      
      // Check Gmail-specific validation
      if (!isValidGmail(value)) {
        throw new Error('Invalid Gmail address format');
      }
      
      // Check for common typos
      const email = value.toLowerCase();
      const commonTypos = [
        "gnail.com", "gmial.com", "gamil.com", "gmal.com", "gmai.com", "gmeil.com",
        "hotmai.com", "hotmial.com", "hotmeil.com", "hotmal.com",
        "outlok.com", "outloook.com", "outlokc.com", "outloock.com",
        "yahooo.com", "yaho.com", "yahooo.com", "yaho.com",
        "icloud.com", "iclod.com", "icloude.com",
        "protonmai.com", "protonmial.com",
        "yandex.ru", "yandex.com", "yandex.ru",
        "zoho.com", "zohoo.com", "zoh.com"
      ];
      
      for (const typo of commonTypos) {
        if (email.includes(typo)) {
          const suggestion = typo.replace('gnail.com', 'gmail.com')
                                .replace('gmial.com', 'gmail.com')
                                .replace('gamil.com', 'gmail.com')
                                .replace('gmal.com', 'gmail.com')
                                .replace('gmai.com', 'gmail.com')
                                .replace('gmeil.com', 'gmail.com');
          throw new Error(`Did you mean "${suggestion}"?`);
        }
      }
      
      // Check for valid email providers
      const validProviders = [
        "gmail.com", "hotmail.com", "outlook.com", "yahoo.com", "icloud.com",
        "protonmail.com", "yandex.ru", "zoho.com", "aol.com", "live.com",
        "msn.com", "me.com", "mac.com", "gmx.com", "mail.com", "fastmail.com",
        "tutanota.com", "startmail.com", "posteo.de", "kolabnow.com"
      ];
      
      const domain = email.split('@')[1];
      if (domain && !validProviders.includes(domain)) {
        throw new Error('Please use a valid email provider (Gmail, Hotmail, Outlook, Yahoo, etc.)');
      }
      
      return true;
    })
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
]);

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
    .custom((value) => {
      if (!value) return true; // Let required validation handle empty values
      
      // Check basic syntax
      if (!isValidSyntax(value)) {
        throw new Error('Please provide a valid email address');
      }
      
      // Check Gmail-specific validation
      if (!isValidGmail(value)) {
        throw new Error('Invalid Gmail address format');
      }
      
      // Check for common typos
      const email = value.toLowerCase();
      const commonTypos = [
        "gnail.com", "gmial.com", "gamil.com", "gmal.com", "gmai.com", "gmeil.com",
        "hotmai.com", "hotmial.com", "hotmeil.com", "hotmal.com",
        "outlok.com", "outloook.com", "outlokc.com", "outloock.com",
        "yahooo.com", "yaho.com", "yahooo.com", "yaho.com",
        "icloud.com", "iclod.com", "icloude.com",
        "protonmai.com", "protonmial.com",
        "yandex.ru", "yandex.com", "yandex.ru",
        "zoho.com", "zohoo.com", "zoh.com"
      ];
      
      for (const typo of commonTypos) {
        if (email.includes(typo)) {
          const suggestion = typo.replace('gnail.com', 'gmail.com')
                                .replace('gmial.com', 'gmail.com')
                                .replace('gamil.com', 'gmail.com')
                                .replace('gmal.com', 'gmail.com')
                                .replace('gmai.com', 'gmail.com')
                                .replace('gmeil.com', 'gmail.com');
          throw new Error(`Did you mean "${suggestion}"?`);
        }
      }
      
      // Check for valid email providers
      const validProviders = [
        "gmail.com", "hotmail.com", "outlook.com", "yahoo.com", "icloud.com",
        "protonmail.com", "yandex.ru", "zoho.com", "aol.com", "live.com",
        "msn.com", "me.com", "mac.com", "gmx.com", "mail.com", "fastmail.com",
        "tutanota.com", "startmail.com", "posteo.de", "kolabnow.com"
      ];
      
      const domain = email.split('@')[1];
      if (domain && !validProviders.includes(domain)) {
        throw new Error('Please use a valid email provider (Gmail, Hotmail, Outlook, Yahoo, etc.)');
      }
      
      return true;
    })
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

// Validation rules for enrolment form
export const enrolmentValidation = [
  // Personal Information validation
  body('personalInfo.firstName')
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('First name is required and must be between 1 and 50 characters')
    .matches(/^[a-zA-Z\s'-]+$/)
    .withMessage('First name can only contain letters, spaces, hyphens, and apostrophes')
    .escape(),
  
  body('personalInfo.lastName')
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Last name is required and must be between 1 and 50 characters')
    .matches(/^[a-zA-Z\s'-]+$/)
    .withMessage('Last name can only contain letters, spaces, hyphens, and apostrophes')
    .escape(),
  
  body('personalInfo.email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail()
    .isLength({ max: 100 })
    .withMessage('Email must be less than 100 characters'),
  
  body('personalInfo.phone')
    .trim()
    .matches(/^[\+]?[0-9\s\-\(\)]{8,15}$/)
    .withMessage('Please provide a valid phone number (8-15 digits, can include spaces, hyphens, parentheses, and +)')
    .escape(),
  
  body('personalInfo.dateOfBirth')
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
  
  body('personalInfo.gender')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Gender is required')
    .isIn(['male', 'female', 'other', 'prefer-not-to-say'])
    .withMessage('Please select a valid gender')
    .escape(),
  
  body('personalInfo.address')
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('Address is required and must be between 5 and 200 characters')
    .escape(),
  
  body('personalInfo.city')
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('City is required and must be less than 100 characters')
    .escape(),
  
  body('personalInfo.state')
    .trim()
    .isLength({ min: 1 })
    .withMessage('State is required')
    .isIn(['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'])
    .withMessage('Please select a valid state')
    .escape(),
  
  body('personalInfo.postalCode')
    .trim()
    .isLength({ min: 1, max: 10 })
    .withMessage('Postal code is required and must be less than 10 characters')
    .escape(),
  
  body('personalInfo.country')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Country is required')
    .escape(),
  
  body('personalInfo.nationality')
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Nationality is required and must be less than 100 characters')
    .escape(),
  
  body('personalInfo.passportNumber')
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage('Passport number must be less than 50 characters')
    .escape(),
  
  // Course Information validation
  body('courseInfo.courseType')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Course type is required')
    .isIn(['certificate-iv', 'diploma', 'advanced-diploma', 'bachelor', 'master', 'short-course'])
    .withMessage('Please select a valid course type')
    .escape(),
  
  body('courseInfo.courseName')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Course name is required')
    .isIn([
      'business-administration', 'accounting', 'marketing-communication', 'project-management',
      'human-resources', 'leadership-management', 'entrepreneurship', 'digital-marketing',
      'international-business'
    ])
    .withMessage('Please select a valid course')
    .escape(),
  
  body('courseInfo.startDate')
    .trim()
    .custom((value) => {
      if (value && value !== '') {
        // Try parsing as ISO date first
        if (value.match(/^\d{4}-\d{2}-\d{2}$/)) {
          const date = new Date(value + 'T00:00:00');
          if (isNaN(date.getTime())) {
            throw new Error('Please provide a valid start date');
          }
        } else {
          const date = new Date(value);
          if (isNaN(date.getTime())) {
            throw new Error('Please provide a valid start date');
          }
        }
      }
      return true;
    }),
  
  body('courseInfo.studyMode')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Study mode is required')
    .isIn(['full-time', 'part-time', 'online', 'blended', 'evening', 'weekend'])
    .withMessage('Please select a valid study mode')
    .escape(),
  
  body('courseInfo.duration')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Duration is required')
    .isIn(['6-months', '12-months', '18-months', '2-years', '3-years'])
    .withMessage('Please select a valid duration')
    .escape(),
  
  body('courseInfo.campus')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Campus is required')
    .isIn(['sydney-cbd', 'melbourne-city', 'brisbane-central', 'perth-city', 'online-campus'])
    .withMessage('Please select a valid campus')
    .escape(),
  
  body('courseInfo.previousEducation')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Previous education is required')
    .isIn(['year-12', 'certificate', 'diploma', 'bachelor', 'master', 'phd'])
    .withMessage('Please select a valid previous education level')
    .escape(),
  
  body('courseInfo.englishProficiency')
    .trim()
    .isLength({ min: 1 })
    .withMessage('English proficiency is required')
    .isIn(['native', 'ielts-7', 'ielts-6.5', 'ielts-6', 'toefl', 'pte', 'other'])
    .withMessage('Please select a valid English proficiency level')
    .escape(),
  
  body('courseInfo.workExperience')
    .optional()
    .trim()
    .isLength({ max: 2000 })
    .withMessage('Work experience must be less than 2000 characters')
    .escape(),
  
  body('courseInfo.motivationLetter')
    .optional()
    .trim()
    .isLength({ max: 2000 })
    .withMessage('Motivation letter must be less than 2000 characters')
    .escape(),
  
  // Final Details validation
  body('finalDetails.paymentMethod')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Payment method is required')
    .isIn(['upfront', 'installments', 'vet-student-loan', 'company-sponsored', 'scholarship'])
    .withMessage('Please select a valid payment method')
    .escape(),
  
  body('finalDetails.emergencyContactName')
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Emergency contact name is required and must be less than 100 characters')
    .escape(),
  
  body('finalDetails.emergencyContactPhone')
    .trim()
    .matches(/^[\+]?[0-9\s\-\(\)]{8,15}$/)
    .withMessage('Please provide a valid emergency contact phone number')
    .escape(),
  
  body('finalDetails.emergencyContactRelation')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Emergency contact relationship is required')
    .isIn(['parent', 'spouse', 'sibling', 'friend', 'guardian', 'other'])
    .withMessage('Please select a valid relationship')
    .escape(),
  
  body('finalDetails.healthConditions')
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage('Health conditions must be less than 1000 characters')
    .escape(),
  
  body('finalDetails.specialRequirements')
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage('Special requirements must be less than 1000 characters')
    .escape(),
  
  body('finalDetails.termsAccepted')
    .custom((value) => {
      // Handle both boolean and string values
      const boolValue = typeof value === 'boolean' ? value : value === 'true' || value === true;
      if (!boolValue) {
        throw new Error('You must accept the terms and conditions');
      }
      return true;
    }),
  
  body('finalDetails.accuracyDeclaration')
    .custom((value) => {
      // Handle both boolean and string values
      const boolValue = typeof value === 'boolean' ? value : value === 'true' || value === true;
      if (!boolValue) {
        throw new Error('You must declare that all information is accurate');
      }
      return true;
    }),
  
  body('finalDetails.marketingConsent')
    .optional()
    .custom((value) => {
      // Handle both boolean and string values
      const boolValue = typeof value === 'boolean' ? value : value === 'true' || value === true;
      return true; // This is optional, so always return true
    }),
  
  body('finalDetails.scholarshipApplied')
    .optional()
    .custom((value) => {
      // Handle both boolean and string values
      const boolValue = typeof value === 'boolean' ? value : value === 'true' || value === true;
      return true; // This is optional, so always return true
    })
];

// Middleware to check for validation errors
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  if (!errors.isEmpty()) {
    if (isDevelopment) {
      console.log('=== VALIDATION ERRORS DEBUG ===');
      console.log('Validation errors:', JSON.stringify(errors.array(), null, 2));
      console.log('Request body:', req.body);
    }
    
    return res.status(400).json({
      message: 'Validation failed',
      errors: errors.array().map(error => ({
        field: error.path,
        message: error.msg,
        value: error.value
      })),
      ...(isDevelopment && {
        debug: {
          totalErrors: errors.array().length,
          requestBody: req.body,
          timestamp: new Date().toISOString()
        }
      })
    });
  }
  
  next();
};

// Sanitize and validate all input fields
export const sanitizeInput = (req, res, next) => {
  const isProduction = process.env.NODE_ENV === 'production';
  
  // Remove any potential XSS or injection attempts
  const sanitizeString = (str) => {
    if (typeof str !== 'string') return str;
    
    if (isProduction) {
      // Strict sanitization in production
      return str
        .replace(/[<>]/g, '') // Remove potential HTML tags
        .replace(/javascript:/gi, '') // Remove javascript: protocol
        .replace(/on\w+=/gi, '') // Remove event handlers
        .trim();
    } else {
      // Lenient sanitization in development
      return str
        .replace(/javascript:/gi, '') // Only remove javascript: protocol
        .trim();
    }
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
