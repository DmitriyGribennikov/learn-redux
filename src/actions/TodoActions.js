import {
    ADD_TODO,
    DEL_TODO,
    EDIT_TODO,
    CHANGE_STATUS_TODO
} from '../constants/TodoConstants';

export const add = (todoItem) => {
    return {
        type: ADD_TODO,
        data: todoItem
    }
}

export const del = (todoItem) => {
    return {
        type: DEL_TODO,
        data : todoItem
    }
}

export const edit = (todoItem) => {
    return {
        type: EDIT_TODO,
        data: todoItem
    }
}

export const changeStatus = (todoItem) => {
    return {
        type: CHANGE_STATUS_TODO,
        data: todoItem
    }
}
