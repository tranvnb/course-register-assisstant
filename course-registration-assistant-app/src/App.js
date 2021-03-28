import React, { Switch, Redirect, BrowserRouter } from 'react-router-dom';
import style from './App.scss';
import Group from './components/Group/Group';
import Login from "./containers/Login";
import PrivateRoute from './containers/PrivateRoute';
import PublicRoute from "./containers/PublicRoute";
import NotFound from "./containers/NotFoundPage";
import FooterNla25 from './components/FooterNla25/FooterNla25';
import HeaderNla25 from './components/HeaderNla25/HeaderNla25';

function App() {
  return (
    <div className={style.App}>
      {/* <header className={style.header}>
      </header> */}
      <BrowserRouter>
      {/* Header Component */}
      <HeaderNla25/>
        <Switch>
          {/* Only logged in user can access */}
          <PrivateRoute exact path={["/", "/dashboard"]} component={Group} />
          {/* Only Not logged in user can access, logged in user can not*/}
          <PublicRoute isRestricted={true} path="/login" component={Login} />
          {/* everyboday can access */}
          <PublicRoute path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
      {/* Footer Component */}
      <FooterNla25/>
    </div>
  );
}

export default App;
