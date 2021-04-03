import React from 'react';

const CourseDetails = ({ details: {instructor, credit, subject, time, day, offset, duration, numInGroup, indexInGroup }}) => {
    return (
      <div>
        <div className="instructor">Subject: <b>{subject}</b></div>
        <div className="instructor">Time: <b>{time}</b></div>
        <div className="instructor">Instr: <b>{instructor}</b></div>
        <div className="num-credit">Credit: <b>{credit}</b></div>
        <div className="num-credit">Day: <b>{day}</b></div>
        <div className="num-credit">Offset: <b>{offset}</b></div>
        <div className="num-credit">Duration: <b>{duration}</b></div>
        <div className="num-credit">NumInG: <b>{numInGroup}</b></div>
        <div className="num-credit">Index: <b>{indexInGroup}</b></div>
      </div>
    );
};

export default CourseDetails;