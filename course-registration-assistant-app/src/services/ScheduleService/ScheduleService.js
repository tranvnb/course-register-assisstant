
export const getUserSchedules = () => {
  let username = "johndoe@example.com";
  return fetch(`${process.env.REACT_APP_WEB_SERVICE_URL}/schedule/${username}`)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    })
}

export const createSchedule = (username, name, semester) => {
  let details = JSON.stringify({ username: username, name: name, semester: semester });
  return fetch(`${process.env.REACT_APP_WEB_SERVICE_URL}/schedule/`,
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
