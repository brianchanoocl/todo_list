import TodoList from "./TodoList";

function TodoListGroup(props) {
    return(
        <div className="center-item">
            {
                props.taskList.map((item, index) => {
                   return <TodoList taskName={item} key={index+index}></TodoList>
                })
            }
        </div>
    );
}

export default TodoListGroup;