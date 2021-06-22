import React from 'react';
import Day from '../Day';
import style from './Week.module.scss';

const Week = ({ timeFrames, days, courses = [] }) => {

  const table = timeFrames.map((time, timeIndex) => {
    return (
      <tr className={style.scheduleTimeFrame} key={timeIndex}>
        {days.map((day, dayIndex) => {
          return (
            <td className={style.scheduleDay} key={dayIndex}>
            </td>
          )
        })}
      </tr>
    )
  })

  return (
    <div >
<<<<<<< HEAD
      <table className={style.scheduleBoard}>
=======
      <table style={{ minWidth: "990px", minHeight: "760px", overflow: "auto" }}>
>>>>>>> 686762c096cbd988269bcf56f6ec854b856311db
        <thead>
          <tr >
            <th></th>
            {days.map((day, dayIndex) => {
              return <th key={dayIndex} className={style.scheduleDay}>
                {day}
              </th>
            })}
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: "40px", verticalAlign: "top" }}>
              {timeFrames[0]}
            </td>
            <td colSpan="6" rowSpan="13">
              <div className={style.tableArea}>
                <table className={style.table}>
                  <tbody>
                    {table}
                  </tbody>
                </table>
                {/* Course table 1 row and 7 cols */}
                <table className={style.courseTable}>
                  <tbody>
                    <tr>
                      {days.map(day => {
                        return {day, courses: courses.filter(course => {
                          return course.days
                            .filter(schedule => {
                              return schedule.day !== "" && schedule.day.toLowerCase() === day.toLowerCase();
                            })
                            .length > 0
                        })}
                      }).map(({day, courses: coursesOfDay}, dayIndex) => {
                          return (
                            <td key={day + "-" + dayIndex}>
                              <div className={style.courseWrapper}>
                                <Day dayOfWeek={day} courses={coursesOfDay} />
                              </div>
                            </td>
                          )
                        })
                      }
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
          {timeFrames.map((time, index) => {
            if (index > 0) {
              return (
                <tr key={index}>
                  <td style={{ width: "40px", verticalAlign: "top" }}>{time}</td>
                </tr>
              )
            }
          })}
        </tbody>
      </table>

    </div>
  )
}

export default Week;