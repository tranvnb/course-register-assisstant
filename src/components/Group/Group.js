// Brief Discription of out Group
import style from './Group.module.scss';

function Group() {
  return (
    <div>
      <h3>Group Brian</h3>
      <h4>Members</h4>
      <ul className={style.list}>
        <li>Brian</li>
        <li>Nancy</li>
        <li>Japheth</li>
      </ul>
    </div>
  );
}

export default Group;
