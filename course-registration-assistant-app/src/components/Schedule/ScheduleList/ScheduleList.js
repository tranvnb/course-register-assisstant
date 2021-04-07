
import ScheduleListItem from '../ScheduleListItem/ScheduleListItem';

function ScheduleList(props) {

  function displayScheduleListItems() {
    console.log("props.schedules:", props.schedules);
    if (props.schedules?.timetable !== undefined) {
      return props.schedules.timetable.map(element => <ScheduleListItem schedule={element} />)
    }
  }

  return (
    <div>

      <h3>Saved Schedules</h3>

      <table className="table table-striped">

        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Semester</th>
            <th scope="col">No. of Courses</th>
          </tr>
        </thead>

        <tbody>
          {displayScheduleListItems()}
        </tbody>

      </table>

    </div>
  )

}

export default ScheduleList;
