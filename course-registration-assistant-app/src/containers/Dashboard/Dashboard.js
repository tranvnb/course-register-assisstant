import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import CourseSummary from "../../components/CourseSummary";
import Week from "../../components/Week";
import { getAllCourses, selectCourse } from "./DashboardSlice";
import classNames from "classnames";
import style from "./Dashboard.module.scss";
import { Button, Row, Col } from "react-bootstrap";
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

  const [sidebarSize, setSidebarSize] = useState("col-3");
  const [mainboardSize, setMainboardSize] = useState("col-9");
  const [showSidebar, setShowSidebar] = useState(true);

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
        dispatch(selectCourse("23382"))
      });

  }, []);

  const location = useLocation();

  return (
    <div className={classNames("row", { [style.timetable]: true })}>

      {!showSidebar ? <div className={style.sidebarToggleButton} onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" />
        </svg>
      </div> : ""}

      {showSidebar ? <div className={sidebarSize} >
          <Row>
            <Col>
              <Button variant="light"className={"float-sm-right"} onClick={toggleSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                </svg>
            </Button>  
            </Col>
          </Row>
          <Row className={style.stretchChildHeight, style.height100}>
            <Col className={["mt-3", style.stretchChildHeight]}>
              <Sidebar />
            </Col>
          </Row>
      </div> : ""}
      <div className={mainboardSize}>

        <Week timeFrames={timeTableLabel} days={weekDays} courses={courses} />
      </div>
    </div>
  );
};

export default Dashboard;