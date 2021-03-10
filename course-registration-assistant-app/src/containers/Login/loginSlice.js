import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const userLogin = createAsyncThunk(
  'user/login', 
  async (loginData, thunkAPI) =>  {
    const { currentRequestId, authenticating } = thunkAPI.getState().login
    if (authenticating || thunkAPI.requestId !== currentRequestId) {
      return
    }
    const response = await fetch(process.env.BASE_URL + '/users/login', {
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
      return thunkAPI.rejectWithValue({message: 'Wrong username or password'});
    }
  });


export const loginSlice = createSlice({

  name: 'login',
  initialState: {
    authenticating: false,
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
    builder.addCase(userLogin.pending.apply, (state, action) => {
      console.log('in extra reducer pending', action);
      state.authenticating = true;
      state.isAuthenticated = false;
      state.error = null;
    })
    .addCase(userLogin.fulfilled, (state, action) => {
      // console.log('in extra reducer fulfilled', action);
      state.authenticating = false;
      if (action.payload?.user) {
        state.userCredentials = action.payload.user;
        state.isAuthenticated = true;
      }
    })
    .addCase(userLogin.rejected, (state, action) => {
      console.log('in extra reducer rejected', action);
      state.authenticating = false;
      state.isAuthenticated = false;
      if (action.payload) {
        state.error = action.payload;
      }
      console.log('in extra reducer rejected state.error', state.error);
    })
  }
});

export const { startAuthenticating, successAuthenticating, failureAuthenticating } = loginSlice.actions

export default loginSlice.reducer;
