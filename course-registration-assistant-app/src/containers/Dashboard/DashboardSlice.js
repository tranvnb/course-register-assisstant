import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CourseService from "../../services/CourseService";
import ScheduleService from "../../services/ScheduleService";
import {processCourse} from '../../services/CourseService/courseUtils'

export const getAllCourses = createAsyncThunk('courses/getAll', (data = {}, thunkAPI) => {
  // Skipping check duplicated requests
  return CourseService.getAllCourses()
    .then(courses => courses)
    .then(courses => {
      thunkAPI.dispatch(getUserTimetable());  
      return courses;
    })
    .catch(error => {
      return thunkAPI.rejectWithValue({ message: error });
    })
});

export const getUserTimetable = createAsyncThunk('courses/selected', (data = {}, thunkAPI) => {
  return ScheduleService.getUserSchedules(thunkAPI.getState().login.userCredentials._id)
    .then(timetable => {
      const selectedTimetable = timetable.timetable.find(item => item._id === thunkAPI.getState().dashboard.selectedTimetableId);
      return selectedTimetable.courses.map(item => {
        thunkAPI.dispatch(selectCourse(item.CRN));
        return item;
      });
    })
    .catch(error => {
      return thunkAPI.rejectWithValue({ message: error });
    })
})


const initialState = {
  courses: [], // all course that we have
  selectedCourses: [], // selected courses for current building timetable
  clickedCourseCRN: "",
  selectedTimetableId: "",
  error: null
};

const DashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {
    selectCourse: (state, action) => {
      if (state.courses.length > 0) {
        const addedCourse = state.courses.find(c => c.CRN === action.payload);
        if (addedCourse !== undefined) {
        let newData = []
        if (state.selectedCourses.length === 0) {
          newData.push(addedCourse);
        } else {
          newData = state.selectedCourses;
          state.selectedCourses.forEach(currCourse => {
            currCourse.days.forEach(currCourseDay => {
              addedCourse.days.forEach(addCourseDay => {
                if (addCourseDay.day.toLowerCase() === currCourseDay.day.toLowerCase()) {
                  // Please note the exclamation mark
                  if (!(addCourseDay.offset + addCourseDay.duration <= currCourseDay.offset || addCourseDay.offset >= currCourseDay.offset + currCourseDay.duration)) {
                    currCourseDay.numCourseInGroup++
                    if (addCourseDay.numCourseInGroup < currCourseDay.numCourseInGroup) {
                      addCourseDay.numCourseInGroup = currCourseDay.numCourseInGroup;
                    }
                    if (addCourseDay.indexInGroup <= currCourseDay.indexInGroup) {
                      addCourseDay.indexInGroup = currCourseDay.indexInGroup + 1;
                    }
                  }
                }
              })
            })
          });
          newData.push(addedCourse);
        }
        state.selectedCourses = newData;
      }
      }
    },
    deselectCourse: (state, action) => {

      // re-arrange the other courses
      let newData = [];
      if (state.selectedCourses.length >= 1) {
        const removeCourseIndex = state.selectedCourses.findIndex(c => c.CRN === action.payload);
        let removeCourse;
        // only remove and re-arrange if the deselected course had been selected before
        if (removeCourseIndex !== -1) {
          removeCourse = state.selectedCourses.splice(removeCourseIndex, 1)[0];
          newData = state.selectedCourses;
          state.selectedCourses.forEach(currCourse => {
            currCourse.days.forEach(currCourseSchedule => {
              removeCourse.days.forEach(removeCourseSchedule => {
                if (removeCourseSchedule.day.toLowerCase() === currCourseSchedule.day.toLowerCase()) {
                  // Please BE AWARE the exclamation mark
                  if (!(removeCourseSchedule.offset + removeCourseSchedule.duration <= currCourseSchedule.offset || removeCourseSchedule.offset >= currCourseSchedule.offset + currCourseSchedule.duration)) {
                    currCourseSchedule.numCourseInGroup--
                    if (currCourseSchedule.indexInGroup >= removeCourseSchedule.indexInGroup) {
                      currCourseSchedule.indexInGroup--;
                    }
                  }
                }
              })
            })
          });

        }

      }

      // immer behind the scene otherwise, spread operator must be used 
      state.selectedCourses = newData;
    },
    clickCourseAnnimation: (state, action) => {
      state.clickedCourseCRN = action.payload;
    },
    selectTimetableId: (state, action) => {
      state.selectedTimetableId = action.payload;
    }
  },
  extraReducers: {
    [getAllCourses.fulfilled]: (state, action) => {
      // immer behind the scene, so go a head and change the state
      state.courses = action.payload;
      state.error = null;
    },
    [getAllCourses.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [getUserTimetable.fulfilled]: (state, action) => {
      if (action.payload !== null) {
        // state.selectedCourses = action.payload;
      }
    },
    [getUserTimetable.rejected]: (state, action) => {
      console.log(action.payload)
    }
  }
})

export const { selectCourse, deselectCourse, clickCourseAnnimation, selectTimetableId } = DashboardSlice.actions;

export default DashboardSlice.reducer;