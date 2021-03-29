import React from "react";
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import style from "./SignUpNla25.scss";

function SignUpNla25()
{
    return(
        <div className="SignUpContainer">
          <Form className="formSignUp">
                <h2>Sign Up</h2>
                <p>Please fill in this form to create an account</p>
               <Form.Group as={Row} controlId="name">
                    <Col sm={10}>
                        <Form.Control type="text" data-testid="name" placeholder="Full Name"/>
                    </Col>
                    <Form.Control.Feedback type="invalid">
                        Please choose a usename.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Row} controlId="email">
                    <Col sm={10}>
                        <Form.Control type="email" data-testid="email" placeholder="Email"/>
                    </Col>
                    <Form.Control.Feedback type="invalid">
                        Please choose a usename.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Row} controlId="studentId">
                    <Col sm={10}>
                        <Form.Control type="text" data-testid="studentId" placeholder="Student ID"/>
                    </Col>
                    <Form.Control.Feedback type="invalid">
                        Please choose a usename.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Row} controlId="password">
                    <Col sm={10}>
                        <Form.Control type="password" data-testid="password" placeholder="Password" />
                    </Col>
                    <Form.Control.Feedback type="invalid">
                        Please choose a password.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 0 }}>
                        <Button className="buttonSignUp" type="button" id="signUpButton" >Sign Up</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default SignUpNla25;