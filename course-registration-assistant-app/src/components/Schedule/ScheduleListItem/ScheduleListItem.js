
function ScheduleListItem(props) {

  return (
    <tr>
      <td>{props.schedule.name}</td>
      <td>{props.schedule.semester}</td>
      <td>{props.schedule.courses.length}</td>
    </tr>
  )
}

export default ScheduleListItem;
