import { useState } from 'react';
import CreateTodoList from './CreateTodoList';
import TodoListGroup from './TodoListGroup';

function MainTodoList() {
    const [taskName, setTaskName] = useState("");
    const [taskList] = useState([]);

    function updateTask(taskName){
        setTaskName(taskName);
    }

    function handleAddTask(){
        taskList.push(taskName);
        setTaskName("");
    }

    return(
        <div className="main-page">
            <h1 className="center-text">Todo List</h1>
            <TodoListGroup taskList={taskList}></TodoListGroup>
            <CreateTodoList taskName={taskName} updateTaskName={updateTask} handleAddTask={handleAddTask}></CreateTodoList>
        </div>
    );
}

export default MainTodoList;