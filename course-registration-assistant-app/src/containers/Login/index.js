import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import logo from '../../assets/logo.svg';
import style from './Login.module.scss';
import {useLocation, useHistory} from 'react-router-dom';
import { userLogin } from './loginSlice'



const Login = () => {   
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [hasError, setHasError] = useState(false);
    
    const error = useSelector(state => state.login.error);

    const location = useLocation();
    const history = useHistory();

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        setValidated(true);
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
            const resultAction = await dispatch(userLogin({username: username, password: password}))
            if (resultAction?.payload?.user)  {
                const { from } = location.state || { from: { pathname: "/schedule" } };
                history.replace(from);
            } else {
                setHasError(true);
            }

        }

      };

    return (
        <div className={style.loginContainer}>
            <img src={logo} className={style.logo} alt="logo" />

            <Form className={style.formLogin} data-testid="form-submit" validated={validated}  >
                {hasError ? 
                    (<Form.Group as={Row}>
                        <Col sm={12}>
                            <Alert variant="danger" onClose={() => setHasError(false)} dismissible>
                                {error !== null ? error.message : ""}
                            </Alert>
                        </Col>
                    </Form.Group>) 
                    : ""
                }
                <Form.Group as={Row} controlId="email">
                    <Form.Label column sm={2}>Email</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" data-testid="email" placeholder="Email" value={username} required  onChange={(e) => setUsername(e.target.value)}/>
                    </Col>
                    <Form.Control.Feedback type="invalid">
                        Please choose a usename.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Row} controlId="password">
                    <Form.Label column sm={2}>Password</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="password" data-testid="password" placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                    </Col>
                    <Form.Control.Feedback type="invalid">
                        Please choose a password.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Row} controlId="checkbox">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Form.Check label="Remember me" formNoValidate={true} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="button" id="signInButton" onClick={handleSubmit} >Sign in</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
}


export default Login;