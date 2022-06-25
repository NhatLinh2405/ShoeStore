import express from "express";
import users from "./data/Users.js";
import products from "./data/Products.js";

import User from "./Models/userModel.js";
import Product from "./Models/productModel.js";

import asyncHandler from "express-async-handler";

products;

const ImportData = express.Router();

// post user lên mongodb
ImportData.post(
    "/user",
    asyncHandler(async (req, res) => {
        await User.remove({});
        const importUser = await User.insertMany(users);
        res.send({ importUser });
    })
);

// post products lên mongodb
ImportData.post(
    "/products",
    asyncHandler(async (req, res) => {
        await Product.remove({});
        const importProduct = await Product.insertMany(products);
        res.send({ importProduct });
    })
);

export default ImportData;
