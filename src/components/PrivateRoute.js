import React from "react";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    return isLoggedIn ? children : <Navigate to="/login"/>;
};

export default PrivateRoute;