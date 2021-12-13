function TodoList(props) {
    return(
        <div className="todo-item row-item">
            {props.taskName}
        </div>
    );
}


export default TodoList;