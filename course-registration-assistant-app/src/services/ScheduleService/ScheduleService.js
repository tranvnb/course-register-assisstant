import {processCourse} from "../CourseService/courseUtils";

export const getUserSchedules = (username) => {
  return fetch(`${process.env.REACT_APP_WEB_SERVICE_URL}/schedule/${username}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const schedule = data;
      const processedSchedule = schedule.map(sch => {
        return {...sch, courses: sch.courses.map(course => processCourse(course))}
      })
      return processedSchedule;
    })
    .catch(error => {
      console.log(error);
    })
}

export const createSchedule = (new_schedule_details) => {
  let details = JSON.stringify(new_schedule_details);
  return fetch(`${process.env.REACT_APP_WEB_SERVICE_URL}/schedule/create`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: details
    })
    .then(response => response.json())
    .then(json => json)
    .catch(error => {
      console.log(error);
    });
}

export const updateSchedule = (schedule) => {
  let body = JSON.stringify(schedule);
  return fetch(`${process.env.REACT_APP_WEB_SERVICE_URL}/schedule/update`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body
    })
    .then(response => response.json())
    .catch(error => {
      console.log(error);
    });
}
