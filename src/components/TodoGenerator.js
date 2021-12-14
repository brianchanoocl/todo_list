import { useState } from "react";

function TodoGenerator(props) {
    const [todoItemDetail, setTodoItemDetail] = useState("");

    function handleTodoItemDetailChange(event){
       setTodoItemDetail(event.target.value);
    }

    function handleAddTodoItem(){
        if(todoItemDetail.trim() === "")
            alert("dun be lazy, do some work la... = =");
        else{
            props.handleAddTodoItem(todoItemDetail);
            setTodoItemDetail("");
        }
    }

    return(
        <div className="center-item row-item center-text">
            <input className="row-item" value={todoItemDetail} onChange={handleTodoItemDetailChange}></input>
            <button className="row-item" onClick={handleAddTodoItem}>add</button>
        </div>
    );
}

export default TodoGenerator;