import React from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";
import { PayPalButton } from "react-paypal-button-v2";

export default function Order() {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row order-detail">
                    <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                        <div className="row">
                            <div className="col-md-4 center">
                                <div className="alert-success order-box">
                                    <i className="fas fa-user"></i>
                                </div>
                            </div>
                            <div className="col-md-8 center">
                                <h5>
                                    <strong>Customer</strong>
                                </h5>
                                <p>admin</p>
                                <p>
                                    <a href={`mailto:nhatlinh240501@gmail.com`}>
                                        nhatlinh240501@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                        <div className="row">
                            <div className="col-md-4 center">
                                <div className="alert-success order-box">
                                    <i className="fas fa-truck-moving"></i>
                                </div>
                            </div>
                            <div className="col-md-8 center">
                                <h5>
                                    <strong>Order info</strong>
                                </h5>
                                <p>Shipping: Vn</p>
                                <p>Pay method: Paypal</p>

                                <div className="bg-info p-2 col-12">
                                    <p className="text-white text-center text-sm-start">
                                        Paid on jun 30, 2022
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                        <div className="row">
                            <div className="col-md-4 center">
                                <div className="alert-success order-box">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                            </div>
                            <div className="col-md-8 center">
                                <h5>
                                    <strong>Deliver to</strong>
                                </h5>
                                <p>Address: Bac Lieu</p>
                                <div className="bg-danger p-2 col-12">
                                    <p className="text-white text-center text-sm-start">
                                        Not Delivered
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row order-products justify-content-between">
                    <div className="col-lg-8">
                        <div className="order-product row">
                            <div className="col-md-3 col-6">
                                <img src="" alt="" />
                            </div>
                            <div className="col-md-5 col-6 d-flex align-items-center">
                                <Link to="">
                                    <h6>1</h6>
                                </Link>
                            </div>
                            <div className="mt-3 mt-md-0 col-md-2 col-6  d-flex align-items-center flex-column justify-content-center ">
                                <h4>QUANTITY</h4>
                                <h6>1</h6>
                            </div>
                            <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center ">
                                <h4>SUBTOTAL</h4>
                                <h6>$ 123</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Products</strong>
                                </td>
                                <td>$ 123</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Shipping</strong>
                                </td>
                                <td>$ 123</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Tax</strong>
                                </td>
                                <td>$ 123</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Total</strong>
                                </td>
                                <td>$ 123</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="col-12">
                        <PayPalButton amount={123} />
                    </div>
                </div>
            </div>
        </>
    );
}
