import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./Reducers/CartReducers";
import {
    productDetailReducer,
    productListReducer,
} from "./Reducers/ProductReducers";

const cartItemFromLocalStorage = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const store = configureStore({
    reducer: {
        productList: productListReducer,
        productDetail: productDetailReducer,
        cart: cartReducer,
    },
    initialState: {
        cart: {
            cartItems: cartItemFromLocalStorage,
        },
    },
});

export default store;
