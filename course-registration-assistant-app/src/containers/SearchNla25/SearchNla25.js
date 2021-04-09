import React, {useEffect, useState } from "react";
import style from "./SearchNla25.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button, FormControl, Container,} from "react-bootstrap";
import SearchCourseNla25 from "../../components/SearchCourseNla25/SearchCourseNla25";
import { selectCourse } from '../Dashboard/DashboardSlice';
import {Link, useLocation } from "react-router-dom";

const SearchNla25 = () => {
  const dispatch = useDispatch();
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [searchByid, setSearchById] = useState("");
  const [searchByName, setSearchByName] = useState("");
  const [searchByInstructor, setSearchByInstructor] = useState("");
  const [dayOfweek, setDow] = useState("");
  const [timeFrom, setfTime] = useState("");
  const [timeTo, seteTime] = useState("");
  const [searchArray, setSearchArray] = useState([]);

  // debugger;
  const allMyCourses = useSelector((state) => state.dashboard.courses);

  const location = useLocation();
  const [currScheduleIdentifier, setCurrScheduleIdentifier] = useState("");

  const handleSearch = () => {
    console.log(allMyCourses, "  ", advancedSearch);

    const searchResult = allMyCourses.filter((course) => {
      return (
        (searchByid !== "" &&
          course.subject.toLowerCase().includes(searchByid.toLowerCase()) &&
          searchByInstructor === "" &&
          searchByName === "") ||
        (searchByid === "" &&
          searchByInstructor !== "" &&
          course.instructor
            .toLowerCase()
            .includes(searchByInstructor.toLowerCase()) &&
          searchByName === "") ||
        (searchByid === "" &&
          searchByInstructor === "" &&
          searchByName !== "" &&
          course.title.toLowerCase().includes(searchByName.toLowerCase())) ||
        (searchByid !== "" &&
          course.subject.toLowerCase().includes(searchByid.toLowerCase()) &&
          searchByInstructor !== "" &&
          course.instructor
            .toLowerCase()
            .includes(searchByInstructor.toLowerCase()) &&
          searchByName === "") ||
        (searchByid !== "" &&
          course.subject.toLowerCase().includes(searchByid.toLowerCase()) &&
          searchByInstructor === "" &&
          searchByName !== "" &&
          course.title.toLowerCase().includes(searchByName.toLowerCase())) ||
        (searchByid === "" &&
          searchByInstructor !== "" &&
          course.instructor
            .toLowerCase()
            .includes(searchByInstructor.toLowerCase()) &&
          searchByName !== "" &&
          course.title.toLowerCase().includes(searchByName.toLowerCase())) ||
        (searchByid !== "" &&
          course.subject.toLowerCase().includes(searchByid.toLowerCase()) &&
          searchByInstructor !== "" &&
          course.instructor
            .toLowerCase()
            .includes(searchByInstructor.toLowerCase()) &&
          searchByName !== "" &&
          course.title.toLowerCase().includes(searchByName.toLowerCase()))
      );
    });

    console.log("Result12324--", searchResult);

    if (dayOfweek !== "" || timeFrom !== "" || timeTo !== "") {
      const l = searchResult.length;
      console.log(l);
      if (searchResult.length > 0) {
        const array = searchResult.filter((course) => {
          return course.days.every(
            (d) =>
              (dayOfweek !== "" &&
                d.day.toLowerCase().includes(dayOfweek.toLowerCase())) ||
              (timeTo !== "" && d.time.toLowerCase().includes(timeTo)) ||
              (timeFrom !== "" &&
                d.time.toLowerCase().includes(timeFrom.toLowerCase()))
          );
        });
        console.log("Dayssss1", array);
        setSearchArray(array);
      } else {
        const array = allMyCourses.filter((course) => {
          return course.days.every(
            (d) =>
              (dayOfweek !== "" &&
                d.day.toLowerCase().includes(dayOfweek.toLowerCase())) ||
              (timeTo !== "" &&
                d.time.toLowerCase().includes(timeTo.toLowerCase())) ||
              (timeFrom !== "" &&
                d.time.toLowerCase().includes(timeFrom.toLowerCase()))
          );
        });
        console.log("Dayssss", array);
        setSearchArray(array);
      }
    } else {
      console.log("Complete array", searchResult);
      setSearchArray(searchResult);
    }

    // dispatch(selectCourse(courseCRN));
  };

  function aSearchClicked() {
    if (advancedSearch) setAdvancedSearch(false);
    else setAdvancedSearch(true);
  }

  function handleCardClicked(e) {
    console.log(e.target.value);
    dispatch(selectCourse(e.target.value));
  }

  useEffect(() => {
    setCurrScheduleIdentifier(location.state.prevPath);
  }, [])

  return (
    <div className={style.SearchContainer}>
      <Container>
        <Row>
          <Col>
            <Row className="mt-3">
              <Col>
                <FormControl type="text" placeholder="Search Course ID" className="mr-sm-2" id="id" value={searchByid}
                  onChange={(e) => setSearchById(e.target.value)}
                />
              </Col>
              <Col>
                <FormControl type="text" placeholder="Search Course Name" className="mr-sm-2" id="courseName" value={searchByName}
                  onChange={(e) => setSearchByName(e.target.value)}
                />
              </Col>
              <Col>
                <FormControl type="text" placeholder="Search Instructor" className="mr-sm-2" id="instructor" value={searchByInstructor}
                  onChange={(e) => setSearchByInstructor(e.target.value)}
                />
              </Col>

            </Row>
            {advancedSearch ? (
          <Row className="mt-1">
            <Col>
              <FormControl type="text" placeholder="Day of week" className="mr-sm-2" id="dow" value={dayOfweek}
                onChange={(e) => setDow(e.target.value)}
              />
            </Col>
            <Col>
              <FormControl type="text" placeholder="Time from" className="mr-sm-2" id="timeF" value={timeFrom}
                onChange={(e) => setfTime(e.target.value)}
              />
            </Col>
            <Col>
              <FormControl type="text" placeholder="Time to" className="mr-sm-2" id="timeE" value={timeTo}
                onChange={(e) => seteTime(e.target.value)}
              />
            </Col>
          </Row>
        ) : (
          ""
        )}
            <Row className="mt-3">
              <Col>
                <Button className={style.buttonSearch} type="button" id="searchButton" onClick={handleSearch}>
                  Search
            </Button>
              </Col>
              <Col>
                <u className={style.underlineText} id="aSearch" onClick={aSearchClicked}>
                  Advanced Search
            </u>
              </Col>
              <Col md={{ span: 1, offset: 11 }}>
          <Link to={currScheduleIdentifier}>Back----&gt;</Link>
          </Col>
            </Row>
          </Col></Row>


        <Row className={style.searchResult}>
          {searchArray.length > 0
            ? searchArray.map((course, key) => (
              <SearchCourseNla25
                key={key}
                CRN={course.CRN}
                courseId={course.subject}
                title={course.title}
                intructor={course.instructor}
                daysData={course.days}
                cardClicked={handleCardClicked}
              />
            ))
            : ""}
        </Row>
      </Container>
    </div>
  );
};

export default SearchNla25;
