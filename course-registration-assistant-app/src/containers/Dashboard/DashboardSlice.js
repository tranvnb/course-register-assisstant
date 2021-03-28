import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CourseService from "../../services/CourseService";

export const getAllCourses = createAsyncThunk('courses/getAll', (data = {}, thunkAPI) => {
    // Skipping check duplicated requests
    return CourseService.getAllCourses()
        .then(courses => courses)
        .catch(error => {
            return thunkAPI.rejectWithValue({ message: error });
        })
});

const initialState = {
    courses: [],
    error: null
};

const DashboardSlice = createSlice({
    name: "dashboard",
    initialState: initialState,
    extraReducers: {
    reducers: {
    },
        [getAllCourses.fulfilled]: (state, action) => {
            // immer behind the scene, so go a head and change the state
            state.courses = action.payload;
            state.error = null;
        },
        [getAllCourses.rejected]: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const {  } = DashboardSlice.actions;

export default DashboardSlice.reducer;