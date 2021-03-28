import React from 'react';

const CourseDetails = ({ details }) => {
    return (
      <div>
        <div className="instructor">Instr: <b>{details.instructor}</b></div>
        <div className="num-credit">Credit: <b>{details.credit}</b></div>
      </div>
    );
};

export default CourseDetails;