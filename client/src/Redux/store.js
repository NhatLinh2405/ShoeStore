import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./Reducers/CartReducers";
import {
    productDetailReducer,
    productListReducer,
} from "./Reducers/ProductReducers";

import { userLoginReducer, userRegisterReducer } from "./Reducers/UserReducer";

const cartItemFromLocalStorage = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

// login
const userInfoFromLocalStorages = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const store = configureStore({
    reducer: {
        productList: productListReducer,
        productDetail: productDetailReducer,
        cart: cartReducer,
        userLogin: userLoginReducer,
        userRegister: userRegisterReducer,
    },
    initialState: {
        cart: {
            cartItems: cartItemFromLocalStorage,
        },
        user: {
            userLogin: { userInfo: userInfoFromLocalStorages },
        },
    },
});

export default store;
