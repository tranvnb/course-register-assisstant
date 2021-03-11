import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const userLogin = createAsyncThunk(
  'user/login',
  async (loginData, thunkAPI) => {
    const { currentRequestId, isLoading } = thunkAPI.getState().login
    // cancel any new requests if current request had not been fulfilled (reset to undefined), 
    // in other words, if this request (requestId) is different from the one was init(pending) before, then cancel
    if (!isLoading || thunkAPI.requestId !== currentRequestId) {
      return
    }
    const response = await fetch(process.env.REACT_APP_WEB_SESRVICE_URL + '/users/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(loginData)
    })

    if (response.status === 200) {
      return response.json();
    } else if (response.status === 401) {
      return thunkAPI.rejectWithValue({ message: 'Wrong username or password' });
    }
  });


export const loginSlice = createSlice({

  name: 'login',
  initialState: {
    isLoading: false,
    isAuthenticated: false,
    userCredentials: null,
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

export const { startAuthenticating, successAuthenticating, failureAuthenticating } = loginSlice.actions

export default loginSlice.reducer;
