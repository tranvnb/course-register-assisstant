import { configureStore } from '@reduxjs/toolkit';

// Reducers
import loginReducer from '../containers/Login/loginSlice';
import dashboardReducer from '../containers/Dashboard/DashboardSlice';

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
    login: loginReducer,
  }
});
