import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./Config/MongoDB.js";
import ImportData from "./dataImport.js";
import { errorHandler, NotFound } from "./Middleware/Error.js";

import ProductRoutes from "./Routes/ProductRoutes.js";
import userRouter from "./Routes/UserRoutes.js";
import orderRouters from "./Routes/OrderRoutes.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

// Api
app.use("/api/import", ImportData);
app.use("/api/products", ProductRoutes);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouters);

// error handler
app.use(NotFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server running port ${PORT}...`));
