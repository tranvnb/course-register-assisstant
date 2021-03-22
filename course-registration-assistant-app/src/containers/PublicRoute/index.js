import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({component: Component, isRestricted = false, ...rest}) => {
    const isUserLogin = useSelector(state => state.login.isAuthenticated);
    return (
        <Route {...rest} render={
            props => isRestricted && isUserLogin ? <Redirect to="/dashboard" /> : <Component {...props} />}
        />
    )
}

export default PublicRoute;