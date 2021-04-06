import style from "./HeaderNla25.module.scss";
import logo from "../../assets/logoNew.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../containers/Login/loginSlice';
import { useHistory } from 'react-router';
import { Navbar, Nav, Form } from "react-bootstrap";


const HeaderNla25 = () => {
  const user = useSelector((state) => state.login.userCredentials);
  
  const history = useHistory();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(userLogout());
    history.replace("/login");
  }

  const NotLoggedIn = () => (
    //Also don't show Create schedule and Saved schedule options when not logged in
    <div className={style.headerButtons}>
      <button type="button" ><Link to="/login" className={style.link}>Login</Link></button>
      <button type="button"><Link to="/signup" className={style.link}>Sign Up</Link></button>
    </div>
  )

  const LoggedIn = () => (
    <div >
      <label>{user.username}</label>
      <button type="button" onClick={logout}>Sign out</button>
    </div>
  )


  return (
    <div className={style.header1}>
      <Navbar bg="light" expand="lg">
        <img src={logo} className={style.logo} alt="logo"></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {user != null ?
            <Nav className="mr-auto">
              <Nav.Link href="#home"> Create Schedule</Nav.Link>
              <Nav.Link href="#link">Saved Schedule</Nav.Link>
            </Nav>
            : <Nav className="mr-auto"></Nav>}
          <Form inline>
            {user != null ? <LoggedIn /> : <NotLoggedIn />}
          </Form>

        </Navbar.Collapse>
      </Navbar>


    </div>
  )


}

export default HeaderNla25;