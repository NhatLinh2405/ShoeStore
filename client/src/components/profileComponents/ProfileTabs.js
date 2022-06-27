import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";

import Message from "../loadingError/Error";
import Toast from "../loadingError/Toast";
import Loading from "../loadingError/Loading";
import { updateUserProfile } from "../../Redux/Action/UserAction";

export default function ProfileTabs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const toastId = useRef(null);
    const ToastOb = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 3000, //5s
    };

    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { loading: updateLoading } = userUpdateProfile;

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
        }
    }, [dispatch, user]);

    const submitHandler = (e) => {
        e.preventDefault();
        // check password
        if (password !== confirmPassword) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error(
                    "Password does not match",
                    ToastOb
                );
            }
        } else {
            dispatch(updateUserProfile({ id: user._id, email, password }));
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.success(
                    "Profile Update Successfully",
                    ToastOb
                );
            }
        }
    };
    return (
        <>
            <Toast />
            {error && <Message variant="alert-danger">{error}</Message>}
            {loading && <Loading />}
            {updateLoading && <Loading />}

            <form className="row form-container" onSubmit={submitHandler}>
                <div className="col-md-6">
                    <div className="form">
                        <label htmlFor="account-fn">UserName</label>
                        <input
                            className="form-control"
                            type="text"
                            required
                            value={name || ""}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form">
                        <label htmlFor="account-email">E-mail Address</label>
                        <input
                            className="form-control"
                            type="email"
                            required
                            value={email || ""}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form">
                        <label htmlFor="account-pass">New Password</label>
                        <input
                            className="form-control"
                            type="password"
                            value={password || ""}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form">
                        <label htmlFor="account-confirm-pass">
                            Confirm Password
                        </label>
                        <input
                            className="form-control"
                            type="password"
                            value={confirmPassword || ""}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>
                <button type="submit">Update Profile</button>
            </form>
        </>
    );
}
