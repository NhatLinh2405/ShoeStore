import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./Reducers/CartReducers";
import {
    productDetailReducer,
    productListReducer,
} from "./Reducers/ProductReducers";

import {
    userDetailsReducer,
    userLoginReducer,
    userRegisterReducer,
    userUpdateProfileReducer,
} from "./Reducers/UserReducer";

const cartItemFromLocalStorage = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

// login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

// shipping address
const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress")
    ? JSON.parse(localStorage.getItem("shippingAddress"))
    : {};

const store = configureStore({
    reducer: {
        productList: productListReducer,
        productDetail: productDetailReducer,
        cart: cartReducer,
        userLogin: userLoginReducer,
        userRegister: userRegisterReducer,
        userDetails: userDetailsReducer,
        userUpdateProfile: userUpdateProfileReducer,
    },
    initialState: {
        cart: {
            cartItems: cartItemFromLocalStorage,
            shippingAddress: shippingAddressFromLocalStorage,
        },
        user: {
            userLogin: { userInfo: userInfoFromLocalStorage },
        },
    },
});

export default store;
