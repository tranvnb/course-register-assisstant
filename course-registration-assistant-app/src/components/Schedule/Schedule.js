import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
//import { useHistory } from 'react-router';
import { getUserSchedules, setCurrentSchedule } from '../../containers/Dashboard/DashboardSlice';

import ScheduleList from './ScheduleList/ScheduleList';

const Schedule = () => {
  
  const dispatch = useDispatch();
  const history = useHistory();
  const schedules = useSelector(state => state.dashboard.schedules);
  const username = useSelector(state => state.login.userCredentials.username);

  const [name, setName] = useState({});
  const [semester, setSemester] = useState("Winter 2021");

  useEffect(() => {
    //console.log(`The current username is ${username}`);
    dispatch(getUserSchedules(username));
  }, []);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleSemester = (event) => {
    setSemester(event.target.value);
  }

  const getSchedule = (schedule) => {
    console.log(`clicked on ${schedule.name}`);
    dispatch(setCurrentSchedule(schedule));
    history.push("/dashboard");
  }

  return (
    <div>

      <ScheduleList schedules={schedules}
                    getSchedule={ (id) => getSchedule(id)} />

    </div>
  )

}

export default Schedule;
