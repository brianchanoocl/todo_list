import TodoGenerator from './TodoGenerator';
import TodoGroup from './TodoGroup';

function TodoList() {
    return(
        <div className="main-page">
            <h1 className="center-text">Todo List</h1>
            <TodoGenerator></TodoGenerator>
            <TodoGroup></TodoGroup>
        </div>
    );
}

export default TodoList;