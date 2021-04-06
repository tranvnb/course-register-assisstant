import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ScheduleService from "../../services/ScheduleService";

export const getUserSchedules = createAsyncThunk('user/getSchedules', (data = {}, thunkAPI) => {
  // Skipping check duplicated requests
  return ScheduleService.getUserSchedules()
    .then(schedules => schedules)
    .catch(error => {
      return thunkAPI.rejectWithValue({ message: error });
    })
});

const initialState = {
  schedules: [],
  status: 'loading' | 'succeeded' | 'failed',
  error: null
};

const ScheduleSlice = createSlice({
  name: "schedule",
  initialState: initialState,
  reducers: {

  },
  extraReducers: {
    [getUserSchedules.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getUserSchedules.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.schedule = action.payload;
    },
    [getUserSchedules.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
});

export default ScheduleSlice.reducer;
