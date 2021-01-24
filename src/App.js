import logo from './logo.svg';
// import './App.css';
import TodoFeature from './features/Todo';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import AlbumFeature from './features/Album';

function App() {
  return (
    <div className="App">
      Home Page
      <p><NavLink to="/todos">Todos</NavLink></p> 
      <p><NavLink to="/albums">Albums</NavLink></p>
      
      <Switch>
        <Route path='/albums' component={AlbumFeature} />
        <Route path='/todos' component={TodoFeature} />
      </Switch>
    
    </div>
  );
}

export default App;
