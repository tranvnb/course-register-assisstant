import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course';

const Day = ({ dayOfWeek, courses }) => {

  const DAY_MAX_WORKING_TIME_BLOCK = 26;
  const BLOCK_HEIGHT = 30+1;
  const [courseList, setCourseList] = useState([]);

  const oldRender =  () => courses.forEach((groupCourse, groupKey) => {
    const courseRender = [];
    let paddingWidth = 0;
    if (groupCourse.length > 1) {
      paddingWidth = 100 / groupCourse.length;
    }
    courseRender.push(...groupCourse.map((course, index) => {
      const style = {
        inset: (BLOCK_HEIGHT * course.offset) + "px " // top
          + (paddingWidth * (groupCourse.length - index - 1)) + "% " // padding right
          + (DAY_MAX_WORKING_TIME_BLOCK - course.offset - course.duration) * BLOCK_HEIGHT + "px " // bottom
          + (index * paddingWidth) + "%" // left
        , zIndex: (index + 1)
        , backgroundColor: groupCourse.length === 1 ? "rgba(112, 136, 158, 0.64)" : "#ff00007a"
      };
      return (
        <Course
          key={course.id}
          style={style}
          id={course.id}
          preCoursePos={course.preCoursePos}
          details={course.details}
          title={course.title}
          offset={course.offset}
          duration={course.duration} />)
    }));
    // no need to return
  });

  useEffect(() => {
    const courseRender = [];
    courses.forEach((course, courseIndex) => {
      let paddingWidth = 0;
      course.days.forEach((day, dayIndex) => {
        if (dayOfWeek.toLowerCase() !== day.day.toLowerCase()) {
          return;
        }

        if (day.numCourseInGroup > 1) {
          paddingWidth = 100 / day.numCourseInGroup;
        }
        const style = {
          inset: (BLOCK_HEIGHT * day.offset) + "px " // top
            + (paddingWidth * (day.numCourseInGroup - day.indexInGroup - 1)) + "% " // padding right
            + (DAY_MAX_WORKING_TIME_BLOCK - day.offset - day.duration) * BLOCK_HEIGHT + "px " // bottom
            + (day.indexInGroup * paddingWidth) + "%" // left
          , zIndex: (day.indexInGroup + 1)
          , backgroundColor: day.numCourseInGroup === 1 ? "rgba(112, 136, 158, 0.64)" : "#ff00007a"
        };
        courseRender.push(
            <Course
              key={dayIndex}
              style={style}
              id={course.crn}
              subject={course.subject}
              instructor={course.instructor}
              credit={course.credit}
              title={course.title}
              offset={day.offset}
              time={day.time}
              day={day.day}
              numInGroup={day.numCourseInGroup}
              indexInGroup={day.indexInGroup}
              duration={day.duration} />)
        });
        
      })
    setCourseList(courseRender);
  }, [courses]);

  return (
    <>
      {courseList}
    </>
  )
}

export default Day;