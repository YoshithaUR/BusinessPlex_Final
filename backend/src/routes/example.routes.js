import { Router } from "express";
import { 
  withDefaultMiddleware, 
  createValidatedRoute,
  emailOnlyValidation,
  userRegistrationValidation 
} from "../middleware/validation.middleware.js";

const exampleRouter = Router();

// Example controllers (you would replace these with your actual controllers)
const contactController = async (req, res) => {
  // Your contact form logic here
  res.json({ message: "Contact form processed" });
};

const newsletterController = async (req, res) => {
  // Your newsletter signup logic here
  res.json({ message: "Newsletter signup processed" });
};

const registerController = async (req, res) => {
  // Your user registration logic here
  res.json({ message: "User registration processed" });
};

// Method 1: Using withDefaultMiddleware (recommended)
// This automatically applies sanitizeInput, contactValidation, and handleValidationErrors
exampleRouter.post("/contact", ...withDefaultMiddleware(contactController));

// Method 1b: Using withDefaultMiddleware with custom validation
// This applies sanitizeInput, emailOnlyValidation, and handleValidationErrors
exampleRouter.post("/newsletter", ...withDefaultMiddleware(newsletterController, emailOnlyValidation));

// Method 1c: Using withDefaultMiddleware with custom validation
// This applies sanitizeInput, userRegistrationValidation, and handleValidationErrors
exampleRouter.post("/register", ...withDefaultMiddleware(registerController, userRegistrationValidation));

// Method 2: Using createValidatedRoute (alternative approach)
const createContactRoute = createValidatedRoute(); // Uses default contactValidation
const createEmailRoute = createValidatedRoute(emailOnlyValidation);
const createRegisterRoute = createValidatedRoute(userRegistrationValidation);

exampleRouter.post("/contact-alt", ...createContactRoute(contactController));
exampleRouter.post("/newsletter-alt", ...createEmailRoute(newsletterController));
exampleRouter.post("/register-alt", ...createRegisterRoute(registerController));

export default exampleRouter;
