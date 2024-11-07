import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute: React.FC = () => {
    // Types for IsLoggedIn
    interface RootStateIsLogged {
        IsLoggedReducer: {
            loggedIn: boolean;
        };
    }

    // Logged in data from Redux
    const loggedIn = useSelector((state: RootStateIsLogged) => state.IsLoggedReducer.loggedIn);

    if (!loggedIn) {
        return <Navigate to="/" replace />;
    }

    // If logged in, render the children components
    return <Outlet />;
};

export default ProtectedRoute;
