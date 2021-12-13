import { useState } from "react";

function CreateTodoList() {
    const [taskName, setTaskName] = useState("");

    function handleTaskNameChange(event){
        setTaskName(event.target.value);
    }

    return(
        <div className="create-todo-list">
            <input value={taskName} onChange={handleTaskNameChange}></input>
            <button>add</button>
        </div>
    );
}

export default CreateTodoList;