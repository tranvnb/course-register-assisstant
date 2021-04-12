import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import CourseSummary from "../../components/CourseSummary";
import Week from "../../components/Week";
import { getAllCourses, selectCourse, updateSchedule } from "./DashboardSlice";
import classNames from "classnames";
import style from "./Dashboard.module.scss";
import { Button } from "react-bootstrap";

const timeTableLabel = [
  "7:00",
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];
const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Dashboard = () => {
  const params = useParams();
  const [scheduleId, setScheduleId] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();

  const schedule = useSelector((state) => {
    return state.dashboard.current_schedule;
  });

  useEffect(() => {
    dispatch(getAllCourses());
  }, []);

  // useEffect(() => {
  //   if (schedule.courses !== null && schedule.courses.length > 0) {
  //     schedule.courses.forEach(course => {
  //       dispatch(selectCourse(course.CRN));
  //     });
  //   }
  // }, [schedule])

  const saveSchedule = (schedule) => {
    dispatch(updateSchedule(schedule));
  }

  return (
    <div className={classNames("row", { [style.timetable]: true })}>
      <div className="col-7">
        <Week timeFrames={timeTableLabel} days={weekDays} courses={schedule.courses} />
      </div>
      <div className={classNames("col-3", { [style.courses_margin]: true })}>
        <Button variant="light">
          <Link to={{ pathname: '/search', state: { prevPath: location.pathname } }}>Search Course</Link>
        </Button>
        <Button variant="dark" onClick={() => saveSchedule(schedule)}>Save Schedule</Button>
        <CourseSummary />
      </div>
    </div>
  );
};

export default Dashboard;
