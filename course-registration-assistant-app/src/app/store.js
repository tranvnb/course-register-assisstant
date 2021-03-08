import { configureStore } from '@reduxjs/toolkit';

// Reducers
import loginReducer from '../components/Login/loginSlice';


export default configureStore({
  reducer: {
    login: loginReducer
  }
});
