import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
// import './App.css';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="App">
      Home Page
      <p>
        <NavLink to="/todos">Todos</NavLink>
      </p>
      <p>
        <NavLink to="/albums">Albums</NavLink>
      </p>
      <Switch>
        <Redirect from="/home" to="/" exact />

        <Route path="/" component={CounterFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/todos" component={TodoFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
