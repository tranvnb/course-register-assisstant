import React from 'react';

const CourseDetails = ({ details: {instructor, credit, subject, time, day }}) => {
    return (
      <div>
        <div className="instructor">Subject: <b>{subject}</b></div>
        <div className="instructor">Time: <b>{time}</b></div>
        <div className="instructor">Instr: <b>{instructor}</b></div>
        <div className="num-credit">Credit: <b>{credit}</b></div>
        <div className="num-credit">Day: <b>{day}</b></div>
      </div>
    );
};

export default CourseDetails;