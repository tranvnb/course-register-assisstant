import { configureStore } from '@reduxjs/toolkit';

// Reducers
import loginReducer from '../containers/Login/loginSlice';
import signupReducer from '../containers/SignUpNla25/SignUpSlice';
import dashboardReducer from '../containers/Dashboard/DashboardSlice';

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
    login: loginReducer,
    signup: signupReducer
  }
});
