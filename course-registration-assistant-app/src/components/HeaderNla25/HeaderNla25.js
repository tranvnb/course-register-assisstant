import { useState } from "react";
import style from "./HeaderNla25.scss";
import logo from  "../../assets/logoNew.png";
import { Link } from "react-router-dom";


function HeaderNla25()
{
   const[login, setLogin] = useState(false);
   const[userName, setUserName] = useState("");

   const NotLoggedIn = () =>(
          //Also don't show Create schedule and Saved schedule options when not logged in
    <div className="headerButtons">
    <button type="button">Login</button>
      <button type="button">Sign Up</button>
      </div>
   )
  
   const LoggedIn = () => (
    <div className="headerButtons">
    <label>{userName}</label>
      <button type="button" onClick={setLogin(false)}>Sign out</button>
      </div>
   )


    return(
      <div className="header1">
          {/* <div className="imageDiv"> */}
                        <img src={logo} className={style.logo} alt="logo"></img>
            {/* </div> */}
          <div className="navLinks">
          <Link className="linksClass" to="/"> Create Schedule</Link>
            <Link className="linksClass" to="/">Saved Schedule</Link>
          </div>
          <div className="headerButtons">
            {login ? <LoggedIn/>  : <NotLoggedIn/>}
          </div>
          <hr></hr>
       </div>
    )
    

}

export default HeaderNla25;