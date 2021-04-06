
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
