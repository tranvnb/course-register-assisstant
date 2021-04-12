import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import UserService from '../../services/UserService';

export const userSignup = createAsyncThunk(
    'user/signup',
    (signupData, thunkAPI) => {
        const { currentRequestId, isLoading } = thunkAPI.getState().signup
        
        if(!isLoading || thunkAPI.requestId !== currentRequestId){
            return
        }

        //eslint-disable-next-line
        let requiredVar = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //validating input values of username and passowrd
        if(signupData.username === "" || signupData.password === "")
        {
          return thunkAPI.rejectWithValue({ message: 'Empty credentials not allowed'})
        }
        else if(!requiredVar.test(signupData.username))
        {
          return thunkAPI.rejectWithValue({ message: 'Invalid Email'})
        }

        return UserService.signupUser(signupData)
        .then(data => {
            return data;
        }).catch(error => {
            return thunkAPI.rejectWithValue({ message: 'Already a signed up user. ', error: error})
        });
    }
);

export const checkUserEmailValidity = createAsyncThunk("user/signup/checkEmail", (username, thunkAPI) => {
  return UserService.checkUserEmailValidity(username)
  .then(res => {
    if (res.block) {
      throw Error("Your email is not genuine.")
    }
    return true;
  })
  .catch(error => {
    return thunkAPI.rejectWithValue({message: error.message})
  })
})

export const signupSlice = createSlice({

    name: 'signup',
    initialState: {
      isLoading: false,
      currentRequestId: undefined,
      error: null
    },
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(userSignup.pending, (state, action) => {
          // only start update state if there is no request are loading/pending
          if (!state.isLoading) {
            state.isLoading = true;
            // store the request Id to avoid multiple request simultaneously
            state.currentRequestId = action.meta.requestId;
            // reset error
            state.error = null;
          }
        })
          .addCase(userSignup.fulfilled, (state, action) => {
            // only process if fulfilled is called from its request, but not from other request when user click multiple time on the button
            if (state.isLoading && state.currentRequestId === action.meta.requestId) {
              state.currentRequestId = undefined;
              state.isLoading = false;
            }
    
          })
          .addCase(userSignup.rejected, (state, action) => {
            if (state.isLoading && state.currentRequestId === action.meta.requestId) {
              state.currentRequestId = undefined;
              state.isLoading = false;
              if (action.payload) {
                state.error = action.payload;
              }
            }
    
          })
          .addCase(checkUserEmailValidity.rejected, (state, action) => {
            state.error = {message: action.payload.message};
          })
      }
});

export default signupSlice.reducer;
