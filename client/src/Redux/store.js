import { configureStore } from "@reduxjs/toolkit";
import { productListReducer } from "./Reducers/ProductReducers";

const initialState = {};
const store = configureStore({
    reducer: { productList: productListReducer },
    initialState,
});

export default store;
