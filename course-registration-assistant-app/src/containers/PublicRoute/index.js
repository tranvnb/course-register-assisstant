import React, { useContext } from "react";
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

const PublicRoute = ({component: Component, isRestricted = false, ...rest}) => {
    const {isUserLogin} = useContext(UserContext);
    return (
        <Route {...rest} render={
            props => isRestricted && isUserLogin() ? <Redirect to="/dashboard" /> : <Component {...props} />}
        />
    )
}

export default PublicRoute;