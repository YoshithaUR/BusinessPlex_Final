import express from "express";
import mainRouter from "../routes/main.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", mainRouter);

export default app;