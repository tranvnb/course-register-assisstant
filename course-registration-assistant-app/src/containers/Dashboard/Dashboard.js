import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import HeaderNla25 from '../../components/HeaderNla25/HeaderNla25';
import Week from '../../components/Week';
import { userLogout } from '../Login/loginSlice';
import style from './Dashboard.module.scss';

const DAY_MAX_WORKING_TIME_BLOCK_BK = 24;
const DAY_MAX_WORKING_TIME_BLOCK = 13;

const timeTable = ["07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30"];
const timeTableLabelBk = ["07:00 - 07:30", "07:30 - 08:00", "08:00 - 08:30", "08:30 - 09:00", "09:00 - 09:30", "09:30 - 10:00", "10:00 - 10:30", "10:30 - 11:00", "11:00 - 11:30", "11:30 - 12:00", "12:00 - 12:30", "12:30 - 13:00", "13:00 - 13:30", "13:30 - 14:00", "14:00 - 14:30", "14:30 - 15:00", "15:00 - 15:30", "15:30 - 16:00", "16:00 - 16:30", "16:30 - 17:00", "17:00 - 17:30", "17:30 - 18:00", "18:00 - 18:30", "18:30 - 19:00"];
const timeTableLabel = ["7:00", "8:00", "9:00", "10:00","11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];
const weekDays = ["SUN", "MON", "TUE", "WED", "THI", "FRI", "SAT"];


const initData = [
  {
      "name": "Monday",
      "courses": []
  },
  {
      "name": "Tuesday",
      "courses": [
          // [
          //     {
          //         id: "1",
          //         title: "2200",
          //         details: { instructor: "Rahim", credit: 3 },
          //         offset: 3,
          //         duration: 4,
          //         preCoursePos: 0,
          //     },
          //     {
          //         id: "2",
          //         title: "2700",
          //         details: { instructor: "Michael", credit: 3 },
          //         offset: 7,
          //         duration: 4,
          //         preCoursePos: 5,
          //     },
          // ],
          // [
          //     {
          //         id: "3",
          //         title: "2300",
          //         details: { instructor: "Brian", credit: 3 },
          //         offset: 3,
          //         duration: 4,
          //         preCoursePos: 0,
          //     },
          // ],
          // [
          //     {
          //         id: "4",
          //         title: "3380",
          //         details: { instructor: "Gabriel", credit: 3 },
          //         offset: 3,
          //         duration: 4,
          //         preCoursePos: 0,
          //     },
          // ]]
          [
              {
                  id: "1",
                  title: "2200",
                  details: { instructor: "Rahim", credit: 3 },
                  offset: 3,
                  duration: 4,
                  preCoursePos: 0,
              },
              
              {
                  id: "3",
                  title: "2300",
                  details: { instructor: "Brian", credit: 3 },
                  offset: 3,
                  duration: 4,
                  preCoursePos: 0,
              },
              {
                  id: "4",
                  title: "3380",
                  details: { instructor: "Gabriel", credit: 3 },
                  offset: 3,
                  duration: 4,
                  preCoursePos: 0,
              },
          ],
          [
              {
                  id: "2",
                  title: "2700",
                  details: { instructor: "Michael", credit: 3 },
                  offset: 7,
                  duration: 4,
                  preCoursePos: 5,
              },
          ],
          [
              
          ]]
  },
  {
      "name": "Wednesday",
      "courses": [
          [
              {
                  id: "5",
                  title: "2200",
                  details: { instructor: "Rahim", credit: 3 },
                  offset: 3,
                  duration: 4,
                  preCoursePos: 0,
              },
              {
                  id: "6",
                  title: "2700",
                  details: { instructor: "Michael", credit: 3 },
                  offset: 5,
                  duration: 4,
                  preCoursePos: 5,
              },
          ],
          [
              {
                  id: "8",
                  title: "3380",
                  details: { instructor: "Gabriel", credit: 3 },
                  offset: 10,
                  duration: 6,
                  preCoursePos: 0,
              },
          ]]
  },
  {
      "name": "Thirsday",
      "courses": []
  },
  {
      "name": "Friday",
      "courses": []
  },
  {
      "name": "Saturday",
      "courses": []
  },
];

const Dashboard = () => {



  const history = useHistory();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(userLogout());
    history.replace("/login");
  }

  return (
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col">
            <HeaderNla25 />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            This is sidebar
            </div>
          <div className="col-9">
            This is the calendar
            <Week timeFrames={timeTableLabel} days={initData}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            This is footer
          </div>
        </div>
      </div>


      <button onClick={logout}>LOG OUT</button>


    </div>
  )
}

export default Dashboard;