import TodoList from "./TodoList";

function TodoListGroup(props) {
    return(
        <div>
            {
                props.taskList.map((item, index) => {
                    console.log("item " + index + " is " + item);
                   return <TodoList taskName={item} key={index+index}></TodoList>
                })
            }
        </div>
    );
}

export default TodoListGroup;