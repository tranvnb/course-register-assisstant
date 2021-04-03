import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course';

const Day = ({ dayOfWeek, courses }) => {


  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    const DAY_MAX_WORKING_TIME_BLOCK = 26;
    const BLOCK_HEIGHT = 30+1;
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
              key={course.CRN+ "-" + dayIndex}
              style={style}
              id={course.CRN}
              subject={course.subject}
              instructor={course.instructor}
              credit={course.credit}
              title={course.title}
              campus={course.campus}
              room={day.buiding + "-" + day.rom} // note the typo, this is from college website
              time={day.time}
              day={day.day}
              />)
        });
        
      })
    setCourseList(courseRender);
  }, [courses, dayOfWeek]);

  return (
    <>
      {courseList}
    </>
  )
}

export default Day;