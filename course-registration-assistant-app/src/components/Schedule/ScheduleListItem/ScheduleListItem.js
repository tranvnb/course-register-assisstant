import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
function ScheduleListItem(props) {
  
  let history = useHistory();

  const gotoDashboard = () => {
    console.log("props._id", props.schedule._id)
    history.push("/dashboard/schedule/" + props.schedule._id)
  }

  return (
    <tr onClick={gotoDashboard}>
      <td>{props.schedule.name}</td>
      <td>{props.schedule.semester}</td>
      <td>{props.schedule.courses.length}</td>
    </tr>
  )
}

export default ScheduleListItem;
