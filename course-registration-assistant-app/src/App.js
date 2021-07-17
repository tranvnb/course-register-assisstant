import React, { Switch, Redirect, BrowserRouter } from 'react-router-dom';
import style from './App.scss';
import Login from "./containers/Login";
import PrivateRoute from './containers/PrivateRoute';
import PublicRoute from "./containers/PublicRoute";
import NotFound from "./containers/NotFoundPage";
import Dashboard from "./containers/Dashboard";
import FooterNla25 from './components/FooterNla25/FooterNla25';
import HeaderNla25 from './components/HeaderNla25/HeaderNla25';
import Signup from './containers/SignUpNla25';
import Schedule from './components/Schedule/Schedule';
import SearchNla25 from './containers/SearchNla25/SearchNla25';

function App() {
  return (
    <div className={style.App}>
      <BrowserRouter>
        <Switch>
          <PublicRoute exact path={["/dashboard", "/"]} component={Dashboard} />
          <PublicRoute exact path={["/search"]} component={SearchNla25} />
          <PublicRoute path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
