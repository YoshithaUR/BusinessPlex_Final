import { Router } from "express";
import { withDefaultMiddleware, newsletterValidation, applicationValidation, enrolmentValidation } from "../middleware/validation.middleware.js";
import questionController from "../controller/question.controller.js";
import newsletterController from "../controller/newsletter.controller.js";
import applicationController from "../controller/application.controller.js";
import enrolmentController from "../controller/enrolment.controller.js";

const mainRouter = Router();

// Test endpoint to verify the server is working
mainRouter.get("/test", (req, res) => {
  res.json({ message: "Server is working!", timestamp: new Date().toISOString() });
});

// Apply validation middleware to contact route using the new wrapper
mainRouter.post("/contact", ...withDefaultMiddleware(questionController));

// Apply validation middleware to newsletter route using the new wrapper
mainRouter.post("/newsletter", ...withDefaultMiddleware(newsletterController, newsletterValidation));

// Apply validation middleware to application route using the new wrapper
mainRouter.post("/application", ...withDefaultMiddleware(applicationController, applicationValidation));

// Apply validation middleware to enrolment route using the new wrapper
mainRouter.post("/enrolment", ...withDefaultMiddleware(enrolmentController, enrolmentValidation));

export default mainRouter;
