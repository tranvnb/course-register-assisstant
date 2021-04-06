import { Component } from 'react';

import { getUserSchedules } from '../../services/ScheduleService/ScheduleService';

import ScheduleList from './ScheduleList/ScheduleList';

class Schedule extends Component {
  
    constructor(props) {

      super(props);
      this.state = {
        schedules: []
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
      return(
        <div>
          <ScheduleList schedules={this.state.schedules} />
        </div>
      )
    }

}

export default Schedule;
