import { useDispatch } from "react-redux";
import { REMOVE_TODOITEM, UPDATE_TODOITEM_DONE_STATUS } from "../constants/constants";


function TodoItem(props) {
    const dispatch = useDispatch();

    function indicateTodoItemAsDone() {
        console.log(props.todoItem);
        dispatch({type: UPDATE_TODOITEM_DONE_STATUS, payload: props.todoItem});
    }

    function removeTodoItem() {
        dispatch({type: REMOVE_TODOITEM, payload: props.todoItem});
    }

    return(
        <div className="todo-item row-item">
            <span onClick={indicateTodoItemAsDone} className={props.todoItem.done? "done-todo-item" : ""}>{props.todoItem.text}</span>
            <span onClick={removeTodoItem} className="done-check-box">x</span>
        </div>
    );
}


export default TodoItem;