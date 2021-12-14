import { UPDATE_TODOLIST } from "../constants/constants";

const initState = { todoItems: [] };

const todoListReducer = ( state = initState, action ) => {
    switch(action.type) {
        case UPDATE_TODOLIST:
            return {...state, todoItems: ["you have a new task"]};
        default:
            return state;
    }
};

export default todoListReducer;