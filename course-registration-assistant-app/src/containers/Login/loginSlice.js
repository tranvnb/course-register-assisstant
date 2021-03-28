import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import UserService from '../../services/UserService';

export const userLogin = createAsyncThunk(
  'user/login',
  (loginData, thunkAPI) => {
    const { currentRequestId, isLoading } = thunkAPI.getState().login
    // cancel any new requests if current request had not been fulfilled (reset to undefined), 
    // in other words, if this request (requestId) is different from the one was init(pending) before, then cancel
    if (!isLoading || thunkAPI.requestId !== currentRequestId) {
      return
    }
    return UserService.logUserIn(loginData)
      .then(data => {
        // return data to fulfill reducer or we can use dispatch an action here
        // just return data or a promise resolve
        return data;
      }).catch(error => {
        // return data to reject reducer or we can use dispatch an action here
        // at here we should return promise reject or use rejectWithValue
        return thunkAPI.rejectWithValue({ message: 'Wrong username or password' });
      });

  });

const user = JSON.parse(localStorage.getItem("user"));

export const loginSlice = createSlice({

  name: 'login',
  initialState: {
    isLoading: false,
    isAuthenticated: user !== null && user !== undefined, // get localStorage here and assign to the initializeState
    userCredentials: user,
    currentRequestId: undefined,
    error: null
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
    },
    userLogout: (state, action) => {
      UserService.logUserOut();
      // immer behind the scene
      state.isAuthenticated = false;
      state.userCredentials = null;
    }
  },
  extraReducers: builder => {
    builder.addCase(userLogin.pending, (state, action) => {
      // only start update state if there is no request are loading/pending
      if (!state.isLoading) {
        state.isLoading = true;
        // store the request Id to avoid multiple request simultaneously
        state.currentRequestId = action.meta.requestId;
        // reset authenticated state
        state.isAuthenticated = false;
        // reset error
        state.error = null;
      }
    })
      .addCase(userLogin.fulfilled, (state, action) => {
        // only process if fulfilled is called from its request, but not from other request when user click multiple time on the button
        if (state.isLoading && state.currentRequestId === action.meta.requestId) {
          state.currentRequestId = undefined;
          state.isLoading = false;
          if (action.payload?.user) {
            state.userCredentials = action.payload.user;
            state.isAuthenticated = true;
          }
        }

      })
      .addCase(userLogin.rejected, (state, action) => {
        if (state.isLoading && state.currentRequestId === action.meta.requestId) {
          state.currentRequestId = undefined;
          state.isLoading = false;
          state.isAuthenticated = false;
          if (action.payload) {
            state.error = action.payload;
          }
        }

      })
  }
});

export const { startAuthenticating, successAuthenticating, failureAuthenticating, userLogout } = loginSlice.actions

export default loginSlice.reducer;
