import api from './api';

export const getTodos = () => {
    return api.get("/todos");
}

export const addTodoItem = (item) => {
    return api.post("/todos", item);
}