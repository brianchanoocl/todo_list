function TodoItem(props) {
    return(
        <div className="todo-item row-item">
            {props.todoItem}
        </div>
    );
}


export default TodoItem;