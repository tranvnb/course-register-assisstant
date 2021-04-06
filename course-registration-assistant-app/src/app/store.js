import { configureStore } from '@reduxjs/toolkit';

// Reducers
import loginReducer from '../containers/Login/LoginSlice';
import signupReducer from '../containers/SignUpNla25/SignUpSlice';
import dashboardReducer from '../containers/Dashboard/DashboardSlice';
import scheduleReducer from '../components/Schedule/ScheduleSlice';

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
    login: loginReducer,
    signup: signupReducer,
    schedule: scheduleReducer
  }
});
