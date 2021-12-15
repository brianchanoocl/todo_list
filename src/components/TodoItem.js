import { CloseOutlined, FormOutlined } from "@ant-design/icons/lib/icons";
import { Input } from "antd";
import Modal from "antd/lib/modal/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodoItem, toggleTodoItemDoneStatus, updateTodoItenDetail } from "../APIs/todos";
import { REMOVE_TODOITEM, UPDATE_TODOITEM_DETAIL, UPDATE_TODOITEM_DONE_STATUS } from "../constants/constants";


function TodoItem(props) {
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newTodoItemDetail, setNewToDoItemDetail] = useState(props.todoItem.text);
    const showModal = (event) => {
        event.stopPropagation();
        setIsModalVisible(true);
    };
    const handleOk = (event) => {
        event.stopPropagation();
        console.log("new name: "+newTodoItemDetail);
        updateTodoItenDetail({...props.todoItem, text: newTodoItemDetail}).then((response) => {
            dispatch({type: UPDATE_TODOITEM_DETAIL, payload: response.data});
        });
        setIsModalVisible(false);
    };
    const handleCancel = (event) => {
        event.stopPropagation();
       setIsModalVisible(false);
    };

    function indicateTodoItemAsDone() {
        toggleTodoItemDoneStatus({...props.todoItem, done: !props.todoItem.done}).then((response) => {
            dispatch({type: UPDATE_TODOITEM_DONE_STATUS, payload: response.data});
        });
    }

    function removeTodoItem(event) {
        event.stopPropagation();
        deleteTodoItem(props.todoItem.id).then(() => {
            dispatch({type: REMOVE_TODOITEM, payload: props.todoItem});
        })
    }

    function handleChangeTodoItemDetail(event){
        setNewToDoItemDetail(event.target.value);
    }

    return(
        <div onClick={indicateTodoItemAsDone} className="todo-item row-item">
            <span className={props.todoItem.done? "done-todo-item" : ""}>{props.todoItem.text}</span>
            <span className="remove-check-box"><FormOutlined onClick={showModal} /> <CloseOutlined onClick={removeTodoItem} /></span>
            <Modal title="Update the todo item name" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Please type the new todo item name here:</p>
                <Input placeholder="Basic usage" value={newTodoItemDetail} onChange={handleChangeTodoItemDetail} />
            </Modal>
        </div>
    );
}


export default TodoItem;