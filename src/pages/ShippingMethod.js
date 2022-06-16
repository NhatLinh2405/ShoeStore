import React from "react";
import Header from "../components/Header";

export default function ShippingScreen() {
    window.scrollTo(0, 0);

    const submitHandler = (e) => e.preventDefault();
    return (
        <>
            <Header />
            <div className="container d-flex justify-content-center align-items-center login-center">
                <form
                    className="Login col-md-8 col-lg-4 col-11"
                    onSubmit={submitHandler}
                >
                    <h6>DELIVERY ADDRESS</h6>
                    <input type="text" placeholder="Enter address" required />
                    <input type="text" placeholder="Enter city" required />
                    <input
                        type="text"
                        placeholder="Enter postal code"
                        required
                    />
                    <input type="text" placeholder="Enter country" required />
                    <button type="submit">Continue</button>
                </form>
            </div>
        </>
    );
}
