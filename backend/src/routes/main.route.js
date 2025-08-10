import { Router } from "express";
import { withDefaultMiddleware, newsletterValidation } from "../middleware/validation.middleware.js";
import questionController from "../controller/question.controller.js";
import newsletterController from "../controller/newsletter.controller.js";

const mainRouter = Router();

// Apply validation middleware to contact route using the new wrapper
mainRouter.post("/contact", ...withDefaultMiddleware(questionController));

// Apply validation middleware to newsletter route using the new wrapper
mainRouter.post("/newsletter", ...withDefaultMiddleware(newsletterController, newsletterValidation));

export default mainRouter;
