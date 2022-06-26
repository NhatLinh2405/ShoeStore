import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { register } from "./../Redux/Action/UserAction";
import Message from "../components/loadingError/Error";
import Loading from "./../components/loadingError/Loading";

export default function Register() {
    window.scrollTo(0, 0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();
    let location = useLocation();

    const dispatch = useDispatch();
    const redirect = location.search ? location.search.split("=")[1] : "/";

    const userRegister = useSelector((state) => state.userRegister);
    const { error, loading, userInfo } = userRegister;

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [userInfo, navigate, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(name, email, password));
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
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Username"
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />

                    <button type="submit">Register</button>
                    <p>
                        <Link
                            to={
                                redirect
                                    ? `/login?redirect=${redirect}`
                                    : "/login"
                            }
                        >
                            I Have Account <strong>Login</strong>
                        </Link>
                    </p>
                </form>
            </div>
        </>
    );
}
