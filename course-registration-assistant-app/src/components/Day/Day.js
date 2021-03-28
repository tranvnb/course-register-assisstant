import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course';

const Day = ({ courses }) => {

  const DAY_MAX_WORKING_TIME_BLOCK = 26;
  const BLOCK_HEIGHT = 30+1;
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    const courseRender = [];
    courses.map((groupCourse, groupKey) => {
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
    setCourseList(courseRender);
  }, [courses]);

  return (
    <>
      {courseList}
    </>
  )
}

export default Day;