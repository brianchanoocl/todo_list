import './App.css';
import TodoList from './components/TodoList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DoneItems from './components/DoneItems';
import UndoneItems from './components/UndoneItems';
import { useEffect } from 'react';
import { getTodos } from './APIs/todos';
import { useDispatch } from 'react-redux';
import { INIT_TODO } from './constants/constants';

function App() {
  const dispatch = useDispatch();

    useEffect(() => {
        getTodos().then((response) => {
            console.log(response)
            dispatch({type: INIT_TODO, payload: response.data});
        })
    });

  return (
    <div>
      <Router>
      <div>
        <nav>
              <button className='link'><Link to="/">Home</Link></button>
              <button className='link'><Link to="/done">Done</Link></button>
              <button className='link'><Link to="/undone">Undone</Link></button>
        </nav>
        <Switch>
          <Route exact path="/done">
            <DoneItems />
          </Route>
          <Route exact path="/undone">
            <UndoneItems />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

function Home() {
  return <TodoList></TodoList>;
}

export default App;
