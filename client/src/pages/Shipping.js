import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { saveShippingAddress } from "../Redux/Action/CartAction";

export default function Shipping() {
    window.scrollTo(0, 0);

    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    const [country, setCountry] = useState(shippingAddress.country);
    const [city, setCity] = useState(shippingAddress.city);
    const [district, setDistrict] = useState(shippingAddress.district);
    const [commune, setCommune] = useState(shippingAddress.commune);
    const [address, setAddress] = useState(shippingAddress.address);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveShippingAddress({
                country,
                city,
                district,
                commune,
                address,
            })
        );
        navigate("/payment");
    };
    return (
        <>
            <Header />
            <div className="container d-flex justify-content-center align-items-center login-center">
                <form
                    className="Login col-md-8 col-lg-4 col-11"
                    onSubmit={submitHandler}
                >
                    <h6>DELIVERY ADDRESS</h6>
                    <input
                        type="text"
                        value={country || ""}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="Enter Country"
                        required
                    />
                    <input
                        type="text"
                        value={city || ""}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter City/Province"
                        required
                    />
                    <input
                        type="text"
                        value={district || ""}
                        onChange={(e) => setDistrict(e.target.value)}
                        placeholder="Enter District"
                        required
                    />
                    <input
                        type="text"
                        value={commune || ""}
                        onChange={(e) => setCommune(e.target.value)}
                        placeholder="Enter Ward/Commune"
                        required
                    />
                    <input
                        type="text"
                        value={address || ""}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter Address"
                        required
                    />

                    <button type="submit">Continue</button>
                </form>
            </div>
        </>
    );
}
