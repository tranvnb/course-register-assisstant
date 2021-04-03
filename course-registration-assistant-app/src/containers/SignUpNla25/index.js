import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import style from "./Signup.module.scss";
import {useLocation, useHistory} from 'react-router-dom';
import { userSignup } from "./signupSlice";

const Signup = () => {
    
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasError, setHasError] = useState(false);

    const error = useSelector(state => state.signup.error);

    const location = useLocation();
    const history = useHistory();

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if(form.checkValidity() === false)
        {
            event.preventDefault();
            event.stopPropagation();
        }else
        {
                const resultAction = await dispatch(userSignup({
                    username: email, 
                    password: password
               }))
               if(resultAction?.payload?.username) {
                   const {from} = location.state || { from: {
                       pathname: "/login"
                   }};
                   history.replace(from);
               }
               else{
                   setHasError(true);
               }
        }
    };


    return(
        <div className={style.SignUpContainer}>
          <Form className={style.formSignUp}>
                <h2>Sign Up</h2>
                <p>Please fill in this form to create an account</p>
                {hasError ? 
              (<Form.Group as={Row}>
                  <Col sm={12}>
                      <Alert variant="danger" onClose={() => setHasError(false)} dismissible>
                      {error.message} 
                      </Alert>
                  </Col>
              </Form.Group> ) : ""}

                <Form.Group as={Row} controlId="email">
                    <Col sm={10}>
                        <Form.Control type="email" data-testid="email" placeholder="Email" value={email} 
                        onChange={(e) => setEmail(e.target.value)}/>
                    </Col>
                    <Form.Control.Feedback type="invalid">
                        Please enter your email address.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Row} controlId="password">
                    <Col sm={10}>
                        <Form.Control type="password" data-testid="password" placeholder="Password" value={password} 
                        onChange={(e) => setPassword(e.target.value)} />
                    </Col>
                    <Form.Control.Feedback type="invalid">
                        Please enter password.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 0 }}>
                        <Button className={style.buttonSignUp} type="button" id="signUpButton" onClick={handleSubmit}>Sign Up</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Signup;