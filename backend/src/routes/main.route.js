import { Router } from "express";
import { withDefaultMiddleware, newsletterValidation, applicationValidation, enrolmentValidation } from "../middleware/validation.middleware.js";
import questionController from "../controller/question.controller.js";
import newsletterController from "../controller/newsletter.controller.js";
import applicationController from "../controller/application.controller.js";
import enrolmentController from "../controller/enrolment.controller.js";
import connectionController from "../controller/connection.controller.js";

const mainRouter = Router();

// Test endpoint to verify the server is working
mainRouter.get("/test", (req, res) => {
  res.json({ message: "Server is working!", timestamp: new Date().toISOString() });
});

// Connection status endpoint to verify backend-frontend connectivity
mainRouter.get("/connection-status", connectionController.getConnectionStatus);

// Health check endpoint
mainRouter.get("/health", connectionController.healthCheck);

// System information endpoint
mainRouter.get("/system-info", connectionController.getSystemInfo);

// Apply validation middleware to contact route using the new wrapper
mainRouter.post("/contact", ...withDefaultMiddleware(questionController));

// Apply validation middleware to newsletter route using the new wrapper
mainRouter.post("/newsletter", ...withDefaultMiddleware(newsletterController, newsletterValidation));

// Apply validation middleware to application route using the new wrapper
mainRouter.post("/application", ...withDefaultMiddleware(applicationController, applicationValidation));

// Apply validation middleware to enrolment route using the new wrapper
mainRouter.post("/enrolment", ...withDefaultMiddleware(enrolmentController, enrolmentValidation));

export default mainRouter;