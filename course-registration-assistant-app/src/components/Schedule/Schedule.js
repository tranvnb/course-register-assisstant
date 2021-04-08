import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { useHistory } from 'react-router';
import { getUserSchedules } from '../../containers/Dashboard/DashboardSlice';

import ScheduleList from './ScheduleList/ScheduleList';
import CreateNewScheduleForm from './CreateNewScheduleForm/CreateNewScheduleForm';

const Schedule = () => {
  
  const dispatch = useDispatch();
  const schedules = useSelector(state => state.dashboard.schedules);
  const username = useSelector(state => state.login.userCredentials.username);

  const [name, setName] = useState({});
  const [semester, setSemester] = useState("Winter 2021");

  useEffect(() => {
    console.log(`The current username is ${username}`);
    dispatch(getUserSchedules(username));
  }, []);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleSemester = (event) => {
    setSemester(event.target.value);
  }

  /*
  const createNewSchedule = () => {
    if (this.state.newSchedule.name === "") {
      alert("You need to add a name for the new schdule");
    } else {

      let username = this.state.newSchedule.username;
      let name = this.state.newSchedule.name;
      let semester = this.state.newSchedule.semester;

      createSchedule(username, name, semester)
        .then(json => {
          this.setState({
            schedules: [
              ...this.state.schedules,
              json
            ]
          });
        });
    }
  }
  */

  return (
    <div>

      <ScheduleList schedules={schedules} />

      {
        schedules.length < 5 &&
        <CreateNewScheduleForm handleChange={(event) => handleName(event)}
          handleSelect={(event) => handleSemester(event)}
          // *handleClick={this.createNewSchedule} 
          />
      }
    

    </div>
  )

}

export default Schedule;
