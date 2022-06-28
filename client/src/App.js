import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Payment from "./pages/Payment";
import Order from "./pages/Order";

import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import DetailProduct from "./pages/DetailProduct";

import Shipping from "./pages/Shipping";
import PlaceOrder from "./pages/PlaceOrder";
import NotFound from "./pages/NotFound";

import { Routes, Route } from "react-router-dom";
import useScroll from "./hooks/useScroll";

function App() {
    useScroll();
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/products/:id" element={<DetailProduct />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cart/:id" element={<Cart />} />
                <Route path="/cart/" element={<Cart />} />

                <Route path="/login/shipping" element={<Shipping />} />
                <Route path="/register/shipping" element={<Shipping />} />

                <Route path="/payment" element={<Payment />} />
                <Route path="/placeorder" element={<PlaceOrder />} />
                <Route path="/order/:id" element={<Order />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
