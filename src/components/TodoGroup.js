import TodoItem from "./TodoItem";

function TodoGroup(props) {

    return(
        <div className="center-item">
            {
                props.todoItems.map((item, index) => {
                   return <TodoItem todoItem={item} key={index+index}></TodoItem>
                })
            }
        </div>
    );
}

export default TodoGroup;