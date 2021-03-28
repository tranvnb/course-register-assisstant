// Brief Discription of out Group
import HeaderNla25 from '../HeaderNla25/HeaderNla25';
import style from './Group.module.scss';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../containers/Login/loginSlice'

function Group() {

  const history = useHistory();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(userLogout());
    history.replace("/login");
  }

  return (
    <div>
      <HeaderNla25/>
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
