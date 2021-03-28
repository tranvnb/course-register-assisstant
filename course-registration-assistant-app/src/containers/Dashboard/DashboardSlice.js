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
  selectedCourses: [],
  error: null
};

const DashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {
    selectCourse: (state, action) => {
      if (state.courses.length > 0) {
        const newDate = state.courses.map(({ name, courses }) => {
          return {
            name, courses: courses.map(courseInGroup => {
              return courseInGroup.map(course => {
                return {...course, isSelected: course.id === action.payload || course.isSelected}
              });
            })
          }
        });
        console.log("state.courses = state.courses = ", newDate);
        state.courses = newDate;
      }
    }
  },
  extraReducers: {
    [getAllCourses.fulfilled]: (state, action) => {
      console.log("course has result");
      // immer behind the scene, so go a head and change the state
      state.courses = action.payload;
      state.error = null;
    },
    [getAllCourses.rejected]: (state, action) => {
      state.error = action.payload;
    }
  }
})

export const { selectCourse } = DashboardSlice.actions;

export default DashboardSlice.reducer;