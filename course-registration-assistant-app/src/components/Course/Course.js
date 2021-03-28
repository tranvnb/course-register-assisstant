import React, { useContext, useState } from "react";
import CourseDetails from "../CourseDetails";
import css from './Course.module.scss';

const Course = ({ id, title, details, offset, duration, preCoursePos, style }) => {

//   const [showModal, setShowModal] = useState(false);

  const offsetBlocks = [];
  const contentBlocks = [];

  const editCourse = () => {
  }

  const showConfirm = () => {
  }

  return (
    // <div className={css.aCourse} >
    <div className={css.courseBlockContent} style={style}>
      <div className="course-title">{title}</div>

      <div className="course-details">
        <CourseDetails details={details} />
      </div>
      {/* </div> */}
    </div>);
};

export default Course;
