
import ScheduleListItem from '../ScheduleListItem/ScheduleListItem';

function ScheduleList(props) {

  function displayScheduleListItems() {
    if (props.schedules !== undefined) {
      return props.schedules.map(element => <ScheduleListItem schedule={element}
                                                              getSchedule={props.getSchedule} />)
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
