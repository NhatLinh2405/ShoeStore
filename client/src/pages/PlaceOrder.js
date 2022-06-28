import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";

import Message from "../components/loadingError/Error";
import { ORDER_LIST_MY_RESET } from "./../Redux/Constants/OrderConstants";
import { createOrder } from "../Redux/Action/OrderAction";

export default function PlaceOrder() {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems, shippingAddress } = cart;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    // price
    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2);
    };

    const itemsPrice = addDecimals(
        cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
    const shippingPrice = addDecimals(itemsPrice > 100 ? 0 : 100);
    const taxPrice = addDecimals(Number((0.15 * itemsPrice).toFixed(2)));
    const totalPrice = (
        Number(itemsPrice) +
        Number(shippingPrice) +
        Number(taxPrice)
    ).toFixed(2);

    const orderCreate = useSelector((state) => state.orderCreate);
    const { order, success, error } = orderCreate;
    const placeOrderHandler = (e) => {
        e.preventDefault();
        dispatch(
            createOrder({
                orderItems: cartItems,
                shippingAddress: shippingAddress,
                itemsPrice: itemsPrice,
                shippingPrice: shippingPrice,
                taxPrice: taxPrice,
                totalPrice: totalPrice,
            })
        );
    };
    useEffect(() => {
        if (success) {
            navigate(`/order/${order._id}`);
            dispatch({ type: ORDER_LIST_MY_RESET });
        }
    }, [dispatch, success, order, navigate]);

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
                                <p>{userInfo.name}</p>
                                <p>{userInfo.email}</p>
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
                                <p>Shipping: {cart.shippingAddress.country}</p>
                                <p>Pay method: {cart.paymentMethod}</p>
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
                                <p>
                                    Address: {cart.shippingAddress.country},{""}
                                    {cart.shippingAddress.city},{""},
                                    {cart.shippingAddress.district},{""},
                                    {cart.shippingAddress.commune},{""},
                                    {cart.shippingAddress.address},
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row order-products justify-content-between">
                    <div className="col-lg-8">
                        {cart.cartItems.length === 0 ? (
                            <Message variant="alert-info mt-5">
                                Your cart is empty
                            </Message>
                        ) : (
                            <>
                                {cart.cartItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="order-product row"
                                    >
                                        <div className="col-md-3 col-6">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                            />
                                        </div>
                                        <div className="col-md-5 col-6 d-flex align-items-center">
                                            <Link
                                                to={`/products/${item.product}`}
                                            >
                                                <h6>{item.name}</h6>
                                            </Link>
                                        </div>
                                        <div className="mt-3 mt-md-0 col-md-2 col-6  d-flex align-items-center flex-column justify-content-center ">
                                            <h4>QUANTITY</h4>
                                            <h6>{item.qty}</h6>
                                        </div>
                                        <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center ">
                                            <h4>SUBTOTAL</h4>
                                            <h6>$ {item.qty * item.price}</h6>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                    <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Products</strong>
                                    </td>
                                    <td>$ {itemsPrice}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Shipping</strong>
                                    </td>
                                    <td>$ {shippingPrice}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Tax</strong>
                                    </td>
                                    <td>$ {taxPrice}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Total</strong>
                                    </td>
                                    <td>$ {totalPrice}</td>
                                </tr>
                            </tbody>
                        </table>
                        {cart.cartItems.length === 0 ? null : (
                            <button type="submit" onClick={placeOrderHandler}>
                                PLACE ORDER
                            </button>
                        )}
                        {error && (
                            <div className="my-3 col-12">
                                <Message variant="alert-danger">
                                    {error}
                                </Message>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
