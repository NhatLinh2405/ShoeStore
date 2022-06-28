import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { savePaymentMethod } from "../Redux/Action/CartAction";

const paymentMethods = ["Cash on Delivery", "Paypal"];

export default function Payment() {
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!shippingAddress) {
        navigate("/shipping");
    }

    const [paymentMethod, setPaymentMethod] = useState(paymentMethods[1]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        navigate("/placeorder");
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
                        {paymentMethods.map((method, index) => (
                            <div
                                key={method + index}
                                className="radio-container"
                            >
                                <input
                                    className="form-check-input"
                                    value={method}
                                    type="radio"
                                    name="paymentMethod"
                                    checked={paymentMethod === method}
                                    onChange={() => setPaymentMethod(method)}
                                />
                                <label
                                    value={paymentMethod}
                                    onChange={(e) =>
                                        setPaymentMethod(e.target.value)
                                    }
                                    className="form-check-label"
                                >
                                    {method}
                                </label>
                            </div>
                        ))}
                    </div>

                    <button type="submit" className="text-white">
                        Continue
                    </button>
                </form>
            </div>
        </>
    );
}
