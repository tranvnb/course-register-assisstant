import React, { useEffect, useRef, useState } from "react";
import CourseDetails from "../CourseDetails";
import css from './Course.module.scss';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover'
import Transition from "react-transition-group/Transition";
import { useDispatch, useSelector } from "react-redux";
import { clickCourseAnnimation } from '../../containers/Dashboard/DashboardSlice'

const Course = ({ id, title, instructor, credit, subject, room, campus, time, day, style, backgroundColor }) => {

  const dispatch = useDispatch();
  const clickedCourseCRN = useSelector(state => state.dashboard.clickedCourseCRN);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const duration = 300;

  const [inProp, setInProp] = useState(false);

  const transitionStyles = {
    entering: { backgroundColor: '#159c24' }, 
    entered: { backgroundColor: '#159c24' },
    exiting: { backgroundColor: '#159c24' },
    exited: { backgroundColor: backgroundColor },
  };

  const startCourseAnnimation = () => {
    dispatch(clickCourseAnnimation(id));
  }

  useEffect(() => {
    if (clickedCourseCRN === id) {
      setInProp(true);
    } else {
      setInProp(false);
    }
  }, [clickedCourseCRN]);

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
    setTarget(e.target);
    return true;
  };

  return (
    <Transition in={inProp} timeout={duration} onEntered={e => dispatch(clickCourseAnnimation(""))}>
      {state => (
        <div ref={ref}>
          <div className={css.courseBlockContent} 
          style={{ ...style, transition: `background-color ${duration}ms ease-in-out`, ...transitionStyles[state] }} 
          onContextMenu={handleClick} 
          onClick={e => startCourseAnnimation()}>
            <div className="course-title">{subject}</div>
            <div className="course-title"><b>{instructor}</b></div>
          </div>
          <div>
            <Overlay
              show={show}
              target={target}
              placement="top"
              transition={false}
              container={ref.current}
              containerPadding={20}
            >
              <Popover style={{ insetBottom: "-10px" }}>
                <Popover.Title as="h3">{"Course " + title}</Popover.Title>
                <Popover.Content>
                  <div className="course-details">
                    <CourseDetails details={{ id, instructor, credit, subject, time, day, room, campus }} />
                  </div>
                </Popover.Content>
              </Popover>
            </Overlay>
          </div>
        </div>
      )}
    </Transition>

  );
};

export default Course;
