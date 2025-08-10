import { Router } from "express";
import mainController from "../controller/main.controller.js";
import { contactValidation, handleValidationErrors, sanitizeInput } from "../middleware/validation.middleware.js";

const mainRouter = Router();

// Apply validation middleware to contact route
mainRouter.post("/contact", sanitizeInput, contactValidation, handleValidationErrors, mainController);

export default mainRouter;
