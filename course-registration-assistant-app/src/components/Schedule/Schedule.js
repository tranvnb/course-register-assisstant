import { Component } from 'react';

import { getUserSchedules, createSchedule } from '../../services/ScheduleService/ScheduleService';

import ScheduleList from './ScheduleList/ScheduleList';
import CreateNewScheduleForm from './CreateNewScheduleForm/CreateNewScheduleForm';

class Schedule extends Component {

  constructor(props) {

    super(props);
    this.state = {
      schedules: [],
      newSchedule: {
        username: "johndoe@example.com",
        name: "",
        semester: "Winter 2021"
      }
    }

    this.handleName = this.handleName.bind(this);
    this.handleSemester = this.handleSemester.bind(this);
    this.createNewSchedule = this.createNewSchedule.bind(this);
  }

  handleName(event) {
    this.setState({
      newSchedule: {
        ...this.state.newSchedule,
        name: event.target.value
      }
    });
  };

  handleSemester(event) {
    this.setState({
      newSchedule: {
        ...this.state.newSchedule,
        semester: event.target.value
      }
    });
  }

  createNewSchedule() {
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

  componentDidMount() {
    // call get timetabe service
    getUserSchedules()
      .then(json => {
        this.setState({
          ...this.state,
          schedules: json
        })
      })
      .catch(error => {
        console.log("Error Setting State");
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        <ScheduleList schedules={this.state.schedules} />


        {
          this.state.schedules.length < 5 &&

          <CreateNewScheduleForm handleChange={(event) => this.handleName(event)}
          handleSelect={(event) => this.handleSemester(event)}
          handleClick={this.createNewSchedule} />

        }


      </div>
    )
  }

}

export default Schedule;
