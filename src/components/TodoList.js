import { useSelector } from 'react-redux';
import TodoGenerator from './TodoGenerator';
import TodoGroup from './TodoGroup';

function TodoList() {
    const todoItems = useSelector(state => state.todoItems);

    return(
        <div className="main-page">
            <h1 className="center-text">Todo List</h1>
            <TodoGroup todoItems={todoItems}></TodoGroup>
            <TodoGenerator></TodoGenerator>
        </div>
    );
}

export default TodoList;