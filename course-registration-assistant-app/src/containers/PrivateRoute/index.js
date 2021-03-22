import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    let isAuthenticated = useSelector(state => state.login.isAuthenticated);
    return (
        <Route {...rest} render={
            props => isAuthenticated ?
                (<Component {...props} />)
                : (<Redirect to={{
                    pathname: "/login",
                    state: { from: props.location }
                }} />)
        } />
    )
}

export default PrivateRoute;