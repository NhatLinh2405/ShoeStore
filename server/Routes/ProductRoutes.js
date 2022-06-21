import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../Models/productModel.js";

const productRoutes = express.Router();

// Get all products
productRoutes.get(
    "/",
    asyncHandler(async (req, res) => {
        const products = await Product.find({});
        res.json(products);
    })
);

// Get detail products
productRoutes.get(
    "/:id",
    asyncHandler(async (req, res) => {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404);
            throw new Error("Product not found");
        }
    })
);

export default productRoutes;
