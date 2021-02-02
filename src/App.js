import { Switch, Route } from 'react-router-dom';
import style from './App.scss';
import Group from './components/Group/Group';
import Login from "./components/Login";

function App() {
  return (
    <div className={style.App}>
      <header className={style.header}>
        <Switch>
          <Route exact path="/" component={Group} />
          <Route path="/login" component={Login} />
          <Route path="/group" component={Group} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
