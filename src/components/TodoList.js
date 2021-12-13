function TodoList(props) {
    return(
        <div className="todo-item">
            {props.taskName}
        </div>
    );
}


export default TodoList;