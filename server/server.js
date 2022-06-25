import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./Config/MongoDB.js";
import ImportData from "./dataImport.js";
import { errorHandler, NotFound } from "./Middleware/Error.js";

import ProductRoutes from "./Routes/ProductRoutes.js";
import userRouter from "./Routes/UserRoutes.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

// Api
app.use("/api/import", ImportData);
app.use("/api/products", ProductRoutes);
app.use("/api/users", userRouter);

// error handler
app.use(NotFound);
app.use(errorHandler);

// app.get("/", (req, res) => {
//     res.send("API is Running...");
// });

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server running port ${PORT}...`));
