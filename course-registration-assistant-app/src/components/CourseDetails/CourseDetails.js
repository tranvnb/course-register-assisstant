import React from 'react';
import { useDispatch } from 'react-redux';
import { deselectCourse } from '../../containers/Dashboard/DashboardSlice';

const CourseDetails = ({ details: {id, instructor, credit, subject, time, day, room, campus }}) => {

  const dispatch = useDispatch();

  const removeCourse = (id) => {
    dispatch(deselectCourse(id));
  }

    return (
      <div>
        <div className="instructor">Subject: <b>{subject}</b></div>
        <div className="instructor">Instr: <b>{instructor}</b></div>
        <div className="num-credit">Credit: <b>{credit}</b></div>
        <div className="instructor">Campus & Room: <b>{campus + " & " + room}</b></div>
        <div><button type="button" onClick={e => removeCourse(id)}>Remove course</button></div>
      </div>
    );
};

export default CourseDetails;