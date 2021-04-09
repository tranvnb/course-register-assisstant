
export const getUserSchedules = (username) => {
  return fetch(`${process.env.REACT_APP_WEB_SERVICE_URL}/schedule/${username}`)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    })
}

export const createSchedule = (username) => {
  let details = JSON.stringify({ username: username });
  return fetch(`${process.env.REACT_APP_WEB_SERVICE_URL}/schedule/create`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: details
    })
    .then(response => response.json())
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
