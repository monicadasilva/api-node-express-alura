import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errHandler from "./middleware/errorHandler.js";

db.on("error", console.log.bind(console, "Conection Error"));
db.once("open", () => console.log("Database successfully connected."));
const app = express();

app.use(express.json());
routes(app);

// eslint-disable-next-line no-unused-vars
app.use(errHandler);
export default app;
