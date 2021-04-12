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
import CreateSchedule from './components/CreateSchedule/CreateSchedule';

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
          <PrivateRoute exact path={["/", "/dashboard", "/dashboard/schedule/:scheduleId"]} component={Dashboard} />
          <PrivateRoute exact path={["/search"]} component={SearchNla25} />
          <PrivateRoute exact path={["/schedule"]} component={Schedule} />
          <PrivateRoute exact path={["/create"]} component={CreateSchedule} />
          {/* Only Not logged in user can access, logged in user can not*/}
          {/* <PublicRoute isRestricted={true} path="/login" component={Signup} /> */}
          <PublicRoute isRestricted={true} path="/signup" component={Signup} />
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
