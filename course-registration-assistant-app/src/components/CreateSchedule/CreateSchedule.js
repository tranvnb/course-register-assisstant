import style from './CreateSchedule.module.scss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Button, Card, Form } from 'react-bootstrap';
import { createNewSchedule } from '../../containers/Dashboard/DashboardSlice';

const CreateSchedule = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.login.userCredentials);

  const [name, setName] = useState("Plan C");
  const [semester, setSemester] = useState("Summer 2021");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleSemester = (event) => {
    setSemester(event.target.value);
  }

  const createSchedule = () => {

    const new_schedule = {
      username: user.username,
      name: name,
      semester: semester
    }
    dispatch(createNewSchedule(new_schedule));
    history.push("/dashboard");

  }

  return (
    <Card className={style.create} >
      <Card.Body>
        <Card.Title>Create A New Schedule</Card.Title>

        <Form.Group>
          <Form.Label>Schedule Name:</Form.Label>
          <Form.Control type="text"
            name="name"
            value={name}
            onChange={(event) => handleName(event)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Select Semester:</Form.Label>
          <Form.Control as="select" value={semester} onChange={(event) => handleSemester(event)}>
            <option value="Winter 2021">Winter 2021</option>
            <option value="Summer 2021">Summer 2021</option>
            <option value="Fall 2021">Fall 2021</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" onClick={() => createSchedule()}>Create</Button>

      </Card.Body>
    </Card>
  )
}

export default CreateSchedule;
