import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Conection Error"));
db.once("open", () => console.log("Database successfully connected."));
const app = express();

app.use(express.json());

routes(app);

export default app;
