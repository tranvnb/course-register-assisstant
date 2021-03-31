import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const userSignUp = createAsyncThunk(
    'user/signup',
    (signupData, thunkAPI) => {
        const { currentRequestId, isLoading } = thunkAPI.getState().signup
        
        if(!isLoading || thunkAPI.requestId != currentRequestId){
            return
        }
        return UserService.signupUser(signupData)
        .then(data => {
            return data;
        }).catch(error => {
            return thunkAPI.rejectWithValue({ message: 'Already a signed up user'})
        });
    }
);

const user = JSON.parse(localStorage.getItem("user"));

export const signupSlice = createSlice({
    name: 'signup',
    initialState: {
        isLoading: false,
        isAuthenticated: user !== null & user !== undefined,
        userCredentials: user,
        currentRequestId: undefined,
        error: null
    },
    reducers: {
        startAuthenticating: (state, action) => {
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
            debugger;
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
export const { startAuthenticating, successAuthenticating, failureAuthenticating, userLogout } = signupSlice.actions

export default signupSlice.reducer;
