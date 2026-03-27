/**
 * Simple email validation utility
 * Only checks for basic email requirements: @ symbol, . symbol, and common email characteristics
 */

// Basic email validation - only checks essential requirements
export const validateEmailBasic = (email) => {
  if (!email || typeof email !== 'string') {
    return {
      isValid: false,
      error: 'Email is required'
    };
  }
  
  const trimmedEmail = email.trim();
  
  if (trimmedEmail.length === 0) {
    return {
      isValid: false,
      error: 'Email is required'
    };
  }
  
  if (trimmedEmail.length > 254) {
    return {
      isValid: false,
      error: 'Email is too long (maximum 254 characters)'
    };
  }
  
  // Check for @ symbol
  if (!trimmedEmail.includes('@')) {
    return {
      isValid: false,
      error: 'Email must contain @ symbol'
    };
  }
  
  // Check for . symbol
  if (!trimmedEmail.includes('.')) {
    return {
      isValid: false,
      error: 'Email must contain a dot (.)'
    };
  }
  
  // Check that @ is not at the beginning or end
  if (trimmedEmail.startsWith('@') || trimmedEmail.endsWith('@')) {
    return {
      isValid: false,
      error: 'Email cannot start or end with @ symbol'
    };
  }
  
  // Check that . is not at the beginning or end
  if (trimmedEmail.startsWith('.') || trimmedEmail.endsWith('.')) {
    return {
      isValid: false,
      error: 'Email cannot start or end with a dot'
    };
  }
  
  // Check that there's only one @ symbol
  const atCount = (trimmedEmail.match(/@/g) || []).length;
  if (atCount > 1) {
    return {
      isValid: false,
      error: 'Email can only contain one @ symbol'
    };
  }
  
  // Check that @ comes before the last dot
  const atIndex = trimmedEmail.indexOf('@');
  const lastDotIndex = trimmedEmail.lastIndexOf('.');
  if (atIndex > lastDotIndex) {
    return {
      isValid: false,
      error: 'Email format is invalid'
    };
  }
  
  // Check for spaces
  if (trimmedEmail.includes(' ')) {
    return {
      isValid: false,
      error: 'Email cannot contain spaces'
    };
  }
  
  // Check for consecutive dots
  if (trimmedEmail.includes('..')) {
    return {
      isValid: false,
      error: 'Email cannot contain consecutive dots'
    };
  }
  
  return {
    isValid: true,
    email: trimmedEmail.toLowerCase()
  };
};

// Advanced email validation (same as basic for now, can be extended later)
export const validateEmailAdvanced = (email) => {
  // For now, advanced validation is the same as basic validation
  // This can be extended later to include additional checks if needed
  return validateEmailBasic(email);
};

// Middleware-friendly validation function
export const createEmailValidator = (useAdvanced = false) => {
  return (value) => {
    if (!value) return true; // Let required validation handle empty values
    
    const validation = useAdvanced 
      ? validateEmailAdvanced(value)
      : validateEmailBasic(value);
    
    if (!validation.isValid) {
      throw new Error(validation.error);
    }
    
    return true;
  };
};

// Simple synchronous validation for basic checks (no async operations)
export const validateEmailSync = (email) => {
  if (!email || typeof email !== 'string') {
    return {
      isValid: false,
      error: 'Email is required'
    };
  }
  
  const trimmedEmail = email.trim();
  
  if (trimmedEmail.length === 0) {
    return {
      isValid: false,
      error: 'Email is required'
    };
  }
  
  if (trimmedEmail.length > 254) {
    return {
      isValid: false,
      error: 'Email is too long (maximum 254 characters)'
    };
  }
  
  // Basic regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    return {
      isValid: false,
      error: 'Please provide a valid email address'
    };
  }
  
  return {
    isValid: true,
    email: trimmedEmail.toLowerCase()
  };
};

// Export default as basic async validator for backward compatibility
export default validateEmailBasic;

