import { configureStore } from '@reduxjs/toolkit';

// Reducers
import loginReducer from '../containers/Login/loginSlice';
import signupReducer from '../containers/SignUpNla25/signupSlice'


export default configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer
  }
});
