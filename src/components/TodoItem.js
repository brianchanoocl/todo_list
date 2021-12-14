function TodoItem(props) {
    return(
        <div className="todo-item row-item">
            {props.todoItem.TodoItemDetail}
        </div>
    );
}


export default TodoItem;