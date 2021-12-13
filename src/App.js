import './App.css';
import CreateTodoList from './components/CreateTodoList';
import TodoListGroup from './components/TodoListGroup';

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoListGroup></TodoListGroup>
      <CreateTodoList></CreateTodoList>
    </div>
  );
}

export default App;
