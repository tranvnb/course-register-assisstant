import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import CourseSummary from "../../components/CourseSummary";
import Week from "../../components/Week";
import { getAllCourses, selectCourse} from "./DashboardSlice";
import classNames from "classnames";
import style from "./Dashboard.module.scss";
import { Button } from "react-bootstrap";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchNla25 from "../SearchNla25/SearchNla25";

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
  const courses = useSelector((state) => {
    return state.dashboard.selectedCourses;
  });

  const [sidebarSize, setSidebarSize] = useState("col-0");
  const [mainboardSize, setMainboardSize] = useState("col-12");
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    if (!showSidebar) {
      setSidebarSize("col-3");
      setMainboardSize("col-9")
    } else {
      setSidebarSize("col-0");
      setMainboardSize("col-12")
    }

    setShowSidebar(!showSidebar);
  }

  useEffect(() => {
    dispatch(getAllCourses())
    .then(() => {
      dispatch(selectCourse("22371"))
      dispatch(selectCourse("22368"))
      dispatch(selectCourse("23852"))
    });
    
  }, []);

  const location = useLocation();

  return (
    <div className={classNames("row", { [style.timetable]: true })}>
      <div className={sidebarSize}>
        
        <nav className={"navbar navbar-light"}>
          <div className="container justify-content-sm-end">
            <button type="button" aria-label="Toggle navigation" className="navbar-toggler" onClick={toggleSidebar}>
              <span className="navbar-toggler-icon"></span>
            </button>
            {showSidebar ? <SearchNla25 /> : ""}          
          </div>
        </nav>

      </div>
      <div className={mainboardSize}>

        <Week timeFrames={timeTableLabel} days={weekDays} courses={courses} />
      </div>
      {/* <div className={classNames("col-3", { [style.courses_margin]: true })}> */}
        {/* <Button variant="light">
          <Link to={{pathname: '/search', state: { prevPath: location.pathname }}}>Search Course</Link>
        </Button> */}
        {/* <Button variant="dark">Save Timetable</Button> */}
        {/* <CourseSummary /> */}
      {/* </div> */}
    </div>
  );
};

export default Dashboard;