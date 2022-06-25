import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./../Redux/Action/UserAction";
import Message from "./../components/loadingError/Error";
import Loading from "./../components/loadingError/Loading";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();
    let location = useLocation();

    const dispatch = useDispatch();
    const redirect = location.search ? location.search.split("=")[1] : "/";

    const userLogin = useSelector((state) => state.userLogin);
    const { error, loading, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [userInfo, redirect, navigate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    return (
        <>
            <Header />
            <div className="container d-flex flex-column justify-content-center align-items-center login-center">
                {error && <Message variant="alert-danger">{error}</Message>}
                {loading && <Loading />}
                <form
                    onSubmit={submitHandler}
                    className="Login col-md-8 col-lg-4 col-11"
                >
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                    />
                    <button type="submit">Login</button>
                    <p>
                        <Link
                            to={
                                redirect
                                    ? `/register?redirect=${redirect}`
                                    : "/register"
                            }
                        >
                            Create Account
                        </Link>
                    </p>
                </form>
            </div>
        </>
    );
}
