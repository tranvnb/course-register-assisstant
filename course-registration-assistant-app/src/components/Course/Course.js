import React, { useRef, useState } from "react";
import CourseDetails from "../CourseDetails";
import css from './Course.module.scss';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover'

const Course = ({ id, title, instructor, credit, subject, offset, duration, time, day, numInGroup, indexInGroup, style }) => {

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
    setTarget(e.target);
    return true;
  };

  return (
    <div ref={ref}>
      <div className={css.courseBlockContent} style={style} onContextMenu={handleClick} >
        <div className="course-title">{subject}</div>
        <div className="course-title"><b>{instructor}</b></div>

      </div>
      <div >
        <Overlay
          show={show}
          target={target}
          placement="top"
          transition={false}
          container={ref.current}
          containerPadding={20}
        >
          {/* <div  */}
            <Popover style={{insetBottom: "-10px"}}>
              <Popover.Title as="h3">{"Course " + title}</Popover.Title>
              <Popover.Content>
                <div className="course-details">
                  <CourseDetails details={{instructor, credit, subject, time, day, offset, duration, numInGroup, indexInGroup}} />
                </div>
              </Popover.Content>
            </Popover>
          {/* </div> */}
        </Overlay>
      </div>
    </div>);
};

export default Course;
