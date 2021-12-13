function CreateTodoList(props) {
    const taskName = props.taskName;

    function handleTaskNameChange(event){
        props.updateTaskName(event.target.value);
    }

    function handleAddTask(){
        props.handleAddTask();
    }

    return(
        <div className="center-item row-item center-text">
            <input className="row-item" value={taskName} onChange={handleTaskNameChange}></input>
            <button className="row-item" onClick={handleAddTask}>add</button>
        </div>
    );
}

export default CreateTodoList;