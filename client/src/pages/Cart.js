import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { addToCart, removeItemCart } from "../Redux/Action/CartAction";

export default function Cart() {
    window.scrollTo(0, 0);
    const { id } = useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    let navigate = useNavigate();

    const qty = location.search ? Number(location.search.split("=")[1]) : 1;
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);

    const checkOut = () => {
        navigate(`/login?redirect=shipping`);
    };

    const removeFromCart = (id) => {
        dispatch(removeItemCart(id));
    };
    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, qty));
        }
    }, [dispatch, id, qty]);

    return (
        <>
            <Header />
            <div className="container">
                {cartItems.length === 0 ? (
                    <div className=" alert alert-info text-center mt-3">
                        Your cart is empty
                        <Link
                            className="btn btn-success mx-5 px-5 py-3"
                            to="/"
                            style={{
                                fontSize: "12px",
                            }}
                        >
                            SHOPPING NOW
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className=" alert alert-info text-center mt-3">
                            Total Cart Products
                            <Link className="text-success mx-2" to="/cart">
                                ({cartItems.length})
                            </Link>
                        </div>

                        {cartItems.map((item) => (
                            <div key={item.product} className="cart-item row">
                                <div
                                    onClick={() => removeFromCart(item.product)}
                                    className="remove-button d-flex justify-content-center align-items-center"
                                >
                                    <i className="fas fa-times"></i>
                                </div>
                                <div className="cart-image col-md-3">
                                    <img src={item.image} alt={item.image} />
                                </div>
                                <div className="cart-text col-md-5 d-flex align-items-center">
                                    <Link to={`/products/${item.product}`}>
                                        <h4>{item.name}</h4>
                                    </Link>
                                </div>
                                <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
                                    <h6>QUANTITY</h6>
                                    <select
                                        value={item.qty}
                                        onChange={(e) =>
                                            dispatch(
                                                addToCart(
                                                    item.product,
                                                    Number(e.target.value)
                                                )
                                            )
                                        }
                                    >
                                        {[
                                            ...Array(item.countInStock).keys(),
                                        ].map((x) => (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start  d-flex flex-column justify-content-center col-sm-7">
                                    <h6>PRICE</h6>
                                    <h4>$ {item.price}</h4>
                                </div>
                            </div>
                        ))}

                        <div className="total">
                            <span className="sub">total:</span>
                            <span className="total-price">$ {total}</span>
                        </div>
                        <hr />
                        <div className="cart-buttons d-flex align-items-center row">
                            <Link to="/" className="col-md-6 ">
                                <button>Continue To Shopping</button>
                            </Link>
                            {total > 0 && (
                                <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                                    <button onClick={checkOut}>Checkout</button>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
