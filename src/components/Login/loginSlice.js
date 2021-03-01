import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({

  name: 'login',
  initialState: {
    authenticating: false,
    isAuthenticated: false
  },
  reducers: {
    startAuthenticating: (state, action) => {
      return {
        ...state,
        authenticating: true,
        userCredentials: action.payload
      }
    },
    successAuthenticating: state => {
      return {
        ...state,
        authenticating: false,
        isAuthenticated: true,
        userCredentials: {
          email: state.userCredentials.email,
          password: ""
        }
      }
    },
    failureAuthenticating: state => {
      return {
        ...state,
        authenticating: false,
        isAuthenticated: false
      }
    }
  }
});

export const { startAuthenticating, successAuthenticating, failureAuthenticating } = loginSlice.actions

export default loginSlice.reducer;
