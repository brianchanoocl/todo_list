function CreateTodoList(props) {
    const taskName = props.taskName;

    function handleTaskNameChange(event){
        props.updateTaskName(event.target.value);
    }

    function handleAddTask(event){
        props.handleAddTask();
    }

    return(
        <div className="create-todo-list">
            <input value={taskName} onChange={handleTaskNameChange}></input>
            <button onClick={handleAddTask}>add</button>
        </div>
    );
}

export default CreateTodoList;