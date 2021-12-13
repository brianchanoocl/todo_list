import CreateTodoList from './CreateTodoList';
import TodoListGroup from './TodoListGroup';

function MainTodoList() {
    return(
        <div>
            <h1>Todo List</h1>
            <TodoListGroup></TodoListGroup>
            <CreateTodoList></CreateTodoList>
        </div>
    );
}

export default MainTodoList;