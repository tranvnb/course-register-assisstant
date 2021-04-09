import { Button } from 'react-bootstrap';

function ScheduleListItem(props) {

  return (
    <tr>
      <td>{props.schedule.name}</td>
      <td>{props.schedule.semester}</td>
      <td>{props.schedule.courses.length}</td>
      <td><Button onClick={ () => props.getSchedule(props.schedule)}>View</Button></td>
    </tr>
  )
}

export default ScheduleListItem;
