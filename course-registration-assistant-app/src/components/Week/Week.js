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
      <table style={{minWidth: "990px", minHeight: "780px", overflow: "auto"}}>
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
            <td style={{width: "40px", verticalAlign: "top"}}>
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
                      {courses.map((day, dayIndex) => {
                        return (
                          <td key={dayIndex}>
                            <div className={style.courseWrapper}>
                              <Day courses={day.courses} />
                            </div>
                          </td>
                        )
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
            <td style={{width: "40px", verticalAlign: "top"}}>{timeFrames[0]}</td>
          </tr>
          {timeFrames.map((time, index) => {
            if (index > 0) {
              return (
                <tr key={index}>
                  <td style={{width: "40px", verticalAlign: "top"}}>{time}</td>
                  <td style={{width: "40px", verticalAlign: "top"}}>{time}</td>
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