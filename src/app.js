import express from "express";
import cors from "cors";
import morgan from "morgan";
//ROUTER
import router from "./Routes/posts";
import authRouter from "./Routes/auth";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1", router);
app.use("/api/v1", authRouter);

export default app;
