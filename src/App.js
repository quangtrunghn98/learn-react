import logo from './logo.svg';
// import './App.css';
import TodoFeature from './features/Todo';
import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import AlbumFeature from './features/Album';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      Home Page
      <p><NavLink to="/todos">Todos</NavLink></p> 
      <p><NavLink to="/albums">Albums</NavLink></p>
      
      <Switch>
        <Redirect from="/home" to="/" exact />

        <Route path='/albums' component={AlbumFeature} />
        <Route path='/todos' component={TodoFeature} />
        
        <Route component={NotFound} />
      </Switch>
    
    </div>
  );
}

export default App;
