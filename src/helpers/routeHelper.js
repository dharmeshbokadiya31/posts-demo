import React from "react";
import { Navigate } from 'react-router-dom'
import { useAuth } from "../hooks/auth";
import { routes } from "../routes/Routes";

export const PrivateRoute = ({ children }) => {
    const auth = useAuth();
    return auth ? children : <Navigate to={routes.posts} />;
}

export const PublicRoute = ({ children }) => {
    const auth = useAuth();
    return !auth ? children : <Navigate to={routes.home} />;
}