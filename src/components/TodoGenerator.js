import { useState } from "react";
import { useDispatch } from "react-redux";
import { UPDATE_TODOLIST } from "../constants/constants";
import { v4 as uuidv4 } from "uuid";


function TodoGenerator() {
    const [todoItemDetail, setTodoItemDetail] = useState("");
    const dispatch = useDispatch();

    function handleTodoItemDetailChange(event){
       setTodoItemDetail(event.target.value);
    }

    function handleAddTodoItem(){
        if(todoItemDetail.trim() === "")
            alert("dun be lazy, do some work la... = =");
        else{
            dispatch({type: UPDATE_TODOLIST, payload: {id: uuidv4(), text: todoItemDetail, done: false}});
        }
        setTodoItemDetail("");
    }

    return(
        <div className="center-item row-item center-text">
            <input className="row-item" value={todoItemDetail} onChange={handleTodoItemDetailChange}></input>
            <button className="row-item" onClick={handleAddTodoItem}>add</button>
        </div>
    );
}

export default TodoGenerator;