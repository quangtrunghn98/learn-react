import Header from 'components/Header';
import AlbumFeature from 'features/Album';
import { Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import CounterFeature from './features/Counter';
// import './App.css';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Switch>
        <Redirect from="/home" to="/" exact />

        <Route path="/" component={CounterFeature} exact />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/todos" component={TodoFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
