import { useDispatch } from "react-redux";
import { deleteTodoItem, toggleTodoItemDoneStatus } from "../APIs/todos";
import { REMOVE_TODOITEM, UPDATE_TODOITEM_DONE_STATUS } from "../constants/constants";


function TodoItem(props) {
    const dispatch = useDispatch();

    function indicateTodoItemAsDone() {
        toggleTodoItemDoneStatus(props.todoItem.id, {...props.todoItem, done: !props.todoItem.done}).then((response) => {
            dispatch({type: UPDATE_TODOITEM_DONE_STATUS, payload: response.data});
        });
    }

    function removeTodoItem(event) {
        event.stopPropagation();
        deleteTodoItem(props.todoItem.id).then(() => {
            dispatch({type: REMOVE_TODOITEM, payload: props.todoItem});
        })
    }

    return(
        <div onClick={indicateTodoItemAsDone} className="todo-item row-item">
            <span className={props.todoItem.done? "done-todo-item" : ""}>{props.todoItem.text}</span>
            <span onClick={removeTodoItem} className="remove-check-box">x</span>
        </div>
    );
}


export default TodoItem;