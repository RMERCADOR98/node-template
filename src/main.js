import app from "./app";
//ENV
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

app.listen(port);
