import React from 'react';
import { useState } from 'react';
import { Row, Col, Button, FormControl, Container, } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import style from './Sidebar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCourse } from '../../containers/Dashboard/DashboardSlice';
import SearchCourseNla25 from '../SearchCourseNla25/SearchCourseNla25';

const Sidebar = () => {

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

	const [currScheduleIdentifier, setCurrScheduleIdentifier] = useState("");

	const handleSearch = () => {

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


		if (dayOfweek !== "" || timeFrom !== "" || timeTo !== "") {
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
				setSearchArray(array);
			}
		} else {
			setSearchArray(searchResult);
		}

		// dispatch(selectCourse(courseCRN));
	};

	function handleCardClicked(e) {
		dispatch(selectCourse(e.target.value));
	}

	return (
		<>
			<Form.Group as={Row} className="mb-1" >
				<Form.Control type="text" className="col-12" placeholder="Course ID" id="courseID" value={searchByid}
					onChange={(e) => setSearchById(e.target.value)} />
			</Form.Group>

			<Form.Group as={Row} className="mb-1" >
				<Form.Control type="text" placeholder="Search Course Name" id="courseName" value={searchByName}
					onChange={(e) => setSearchByName(e.target.value)} />
			</Form.Group>

			<Form.Group as={Row} className="mb-1" >
				<Form.Control type="text" placeholder="Search Instructor" id="instructor" value={searchByInstructor}
					onChange={(e) => setSearchByInstructor(e.target.value)} />
			</Form.Group>

			<Row className="mt-3">
				<Col>
					<Button type="button" id="searchButton" onClick={handleSearch}>Search</Button>
				</Col>
				{/* <Col>
                <u className={style.underlineText} id="aSearch" onClick={aSearchClicked}>
                  Advanced Search
            </u>
              </Col> */}
				<Col md={{ span: 1, offset: 11 }}>
				</Col>
			</Row>
			<Row className={[style.height100, style.stretchChildHeight]}>
				<Col className={style.searchResultContainer}>					
					<Row>
						{searchArray.length > 0
							? searchArray.map((course, key) => (
								<SearchCourseNla25
									key={key}
									crn={course.CRN}
									courseId={course.subject}
									title={course.title}
									intructor={course.instructor}
									daysData={course.days}
									cardClicked={handleCardClicked}
								/>
							))
							: "Result found:"}
					</Row>
				</Col>
			</Row>


		</>
	)
}

export default Sidebar;