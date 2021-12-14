import { useState } from 'react';
import TodoGenerator from './TodoGenerator';
import TodoGroup from './TodoGroup';

function TodoList() {
    const [todoItems, settodoItems] = useState([]);
    
    function handleAddTodoItem(todoItemDetail){
        settodoItems([...todoItems, todoItemDetail]);
    }

    return(
        <div className="main-page">
            <h1 className="center-text">Todo List</h1>
            <TodoGroup todoItems={todoItems}></TodoGroup>
            <TodoGenerator handleAddTodoItem={handleAddTodoItem}></TodoGenerator>
        </div>
    );
}

export default TodoList;