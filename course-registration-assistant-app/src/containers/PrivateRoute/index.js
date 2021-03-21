import React, { useContext } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import UserContext from '../../contexts/UserContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isUserLogin } = useContext(UserContext);
    return (
        <Route {...rest} render={
            props => isUserLogin() ? 
                (<Component {...props} />) 
                : (<Redirect to={{ pathname: "/login", state: { from: props.location } }} />)
        } />
    )
}

export default PrivateRoute;