import { UPDATE_TODOITEM_DONE_STATUS, UPDATE_TODOLIST, REMOVE_TODOITEM } from "../constants/constants";

const initState = { todoItems: [] };

const todoListReducer = ( state = initState, action ) => {
    switch(action.type) {
        case UPDATE_TODOLIST:
            console.log(action.payload);
            return {todoItems: [...state.todoItems, action.payload]};
        case UPDATE_TODOITEM_DONE_STATUS:
            return { todoItems: state.todoItems.map(item => {
                if(item.id === action.payload.id) {
                    item.done = !item.done;
                }
                return item;
            })};
        case REMOVE_TODOITEM:
            return {todoItems: state.todoItems.filter(item => item.id !== action.payload.id)};
        default:
            return state;
    }
};

export default todoListReducer;