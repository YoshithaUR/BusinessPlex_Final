import { Router } from "express";
import { withDefaultMiddleware } from "../middleware/validation.middleware.js";
import questionController from "../controller/question.controller.js";

const mainRouter = Router();

// Apply validation middleware to contact route using the new wrapper
mainRouter.post("/contact", ...withDefaultMiddleware(questionController));

export default mainRouter;
