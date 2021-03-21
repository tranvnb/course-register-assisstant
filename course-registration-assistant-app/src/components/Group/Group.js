// Brief Discription of out Group
import style from './Group.module.scss';
import {logUserOut} from "../../services/UserService";
import { useHistory } from 'react-router';

function Group() {

  const history = useHistory();
  const logout = () => {
    logUserOut();
    history.replace("/login");
  }

  return (
    <div>
      <h3>Group Brian</h3>
      <h4>Members</h4>
      <ul className={style.list}>
        <li>Brian</li>
        <li>Nancy</li>
        <li>Japheth</li>
        <li><button onClick={logout}>LOG OUT</button></li>
      </ul>
    </div>
  );
}

export default Group;
