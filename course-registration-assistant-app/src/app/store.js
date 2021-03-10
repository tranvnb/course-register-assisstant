import { configureStore } from '@reduxjs/toolkit';

// Reducers
import loginReducer from '../containers/Login/loginSlice';


export default configureStore({
  reducer: {
    login: loginReducer
  }
});
