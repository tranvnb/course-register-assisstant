import { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import logo from '../../assets/logo.svg';
import style from './Login.module.scss';

const Login = ({location, history}) => {   
    const [validated, setValidated] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {

            //request to back-end service here
            if (username ==='test@test.com' && password === 'test@test.com') {
                const { from } = location.state || { from: { pathname: "/group" } };
                history.push(from);
            }
        }

        setValidated(true);

      };

    return (
        <div className={style.loginContainer}>
            <img src={logo} className={style.logo} alt="logo" />
            <Form className={style.formLogin} data-testid="form-submit">
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
                        <Form.Check label="Remember me" noValidate />
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