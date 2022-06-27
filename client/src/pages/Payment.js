import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { savePaymentMethod } from "../Redux/Action/CartAction";

export default function Payment() {
    window.scrollTo(0, 0);

    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!shippingAddress) {
        navigate("/shipping");
    }

    const [paymentMethod, setPaymentMethod] = useState("PayPal");

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
    };
    return (
        <>
            <Header />
            <div className="container d-flex justify-content-center align-items-center login-center">
                <form
                    className="Login2 col-md-8 col-lg-4 col-11"
                    onSubmit={submitHandler}
                >
                    <h6>SELECT PAYMENT METHOD</h6>
                    <div className="payment-container">
                        <div className="radio-container">
                            <input className="form-check-input" type="radio" />
                            <label
                                value={paymentMethod}
                                onChange={(e) =>
                                    setPaymentMethod(e.target.value)
                                }
                                className="form-check-label"
                            >
                                PayPal or Credit Card
                            </label>
                        </div>
                    </div>

                    <button type="submit">
                        <Link to="/placeorder" className="text-white">
                            Continue
                        </Link>
                    </button>
                </form>
            </div>
        </>
    );
}
