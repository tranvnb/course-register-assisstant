import React from "react";
import { Card, Button } from 'react-bootstrap';
import style from './SearchCourseNla25.module.scss';

const SearchCourseNla25 = (props) => {
  return (
    <div className={style.cardDiv}>
      <Card style={{ width: '20rem' }} >
        <Card.Body>
          <Card.Title>{props.courseId}</Card.Title>

          {props.daysData.map((data, key) => (
            <Card.Subtitle className="mb-2 text-muted" key={key}>
              {data.time} on {data.day}
            </Card.Subtitle>
          ))}

          <Card.Text>
            {props.title} by {props.intructor}
          </Card.Text>
          <Button onClick={props.cardClicked} value={props.crn} variant="dark">Add</Button>
        </Card.Body>
      </Card>

    </div>
  )
}

export default SearchCourseNla25;