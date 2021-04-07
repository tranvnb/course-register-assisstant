
export const getUserSchedules = (userId) => {
  return fetch(`${process.env.REACT_APP_WEB_SERVICE_URL}/timetable/${userId}`)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json
    })
    .catch(error => {
      console.log(error);
    })
}

export const createSchedule = (userId, username, name, semester) => {
  let details = JSON.stringify({ userId: userId, username: username, name: name, semester: semester, courses:[] });
  return fetch(`${process.env.REACT_APP_WEB_SERVICE_URL}/timetable/${userId}`,
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

export const updateTimetable = (timetableId, courses) => {
  let details = JSON.stringify({courses: courses});
  debugger;
  return fetch(`${process.env.REACT_APP_WEB_SERVICE_URL}/timetable/${timetableId}`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: details
    })
    .then(response => response.json())
    .then(json => json)
    .catch(error => {
      console.log(error);
    });
}