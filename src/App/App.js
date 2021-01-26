import logo from '../assets/logo.svg';
import style from './App.module.scss';

import Group from './Group/Group';

function App() {
  return (
    <div className={style.App}>
      <header className={style.header}>
        <img src={logo} className={style.logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={style.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Group />
      </header>
    </div>
  );
}

export default App;
