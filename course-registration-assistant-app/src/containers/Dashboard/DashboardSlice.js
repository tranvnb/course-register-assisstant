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
        const addedCourse = state.courses.find(c => c.CRN === action.payload);
        // ADD and RE ARRANGE at the same time IF REMOVE then remove first, then re-arrange but decrease the number/index
        //each day1 in recent added course's days
        // each day2 in already selected courses' days
        // if day1 overlap day2 => increase day2 numCourseInGroup 
        //        day1.numCourseInGroup = day2.numCourseInGroup & day1.indexInGroup = day2.indexInGroup + 1


        // REMOVE : filter selectedList then if overlap numGroup-- & then if index >=x => x-- else do nothing
        let newData = []
        if (state.selectedCourses.length === 0) {
          newData.push(addedCourse);
        } else {
          newData = state.selectedCourses;
          state.selectedCourses.forEach(currCourse => {
            currCourse.days.forEach(currCourseDay => {
              addedCourse.days.forEach(addCourseDay => {
                if (addCourseDay.day.toLowerCase() === currCourseDay.day.toLowerCase()) {
                  if (!(addCourseDay.offset + addCourseDay.duration < currCourseDay.offset || addCourseDay.offset > currCourseDay.offset + currCourseDay.duration)) {
                    currCourseDay.numCourseInGroup++
                    if (addCourseDay.numCourseInGroup < currCourseDay.numCourseInGroup) {
                      addCourseDay.numCourseInGroup = currCourseDay.numCourseInGroup;
                    }

                    if (addCourseDay.indexInGroup <= currCourseDay.indexInGroup) {
                      addCourseDay.indexInGroup = currCourseDay.indexInGroup + 1;
                    }


                  }
                }
                // if ((addCourseDay.offset <= currCourseDay.offset && addCourseDay.duration >= currCourseDay.duration) // added one include/equal curr one
                //  || (addCourseDay.offset < currCourseDay.offset && addCourseDay.offset + addCourseDay.duration >= currCourseDay.)) 
              })
            })
          });
          newData.push(addedCourse);
        }

        console.log(newData);

        // newData = state.courses.map((course) => {
        //   return { ...course, isSelected: course.CRN === action.payload || course.isSelected }
        // });

        state.selectedCourses = newData;
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