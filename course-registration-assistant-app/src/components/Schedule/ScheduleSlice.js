import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ScheduleService from "../../services/ScheduleService";

export const getUserSchedules = createAsyncThunk('user/getSchedules', (username, thunkAPI) => {
  // Skipping check duplicated requests
  return ScheduleService.getUserSchedules(username)
    .then(schedules => schedules)
    .catch(error => {
      return thunkAPI.rejectWithValue({ message: error });
    })
});

const initialState = {
  schedules: [],
  newSchedule: {
    username: "",
    name: "",
    semester: "Winter 2021"
  },
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
      state.schedules = action.payload;
    },
    [getUserSchedules.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
});

export default ScheduleSlice.reducer;
