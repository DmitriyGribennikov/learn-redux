import {
    ADD_TODO,
    DEL_TODO,
    EDIT_TODO,
    CHANGE_STATUS_TODO
} from '../constants/TodoConstants';

export const add = (todoItem) => {
    //console.log(todoItem)
    console.log("TodoActions - add")
    return {
        type: ADD_TODO,
        data: todoItem
    }
}

export const del = (todoItem) => {
    console.log("TodoActions - del")
    //console.log(todoItem)
    return {
        type: DEL_TODO,
        data: todoItem
    }
}

export const edit = (todoItem) => {
    console.log("TodoActions - edit")
    //console.log(todoItem)
    return {
        type: EDIT_TODO,
        data: todoItem
    }
}

export const changeStatus = (todoItem) => {
    console.log("TodoActions - Change")
    //console.log(todoItem)
    return {
        type: CHANGE_STATUS_TODO,
        data: todoItem
    }
}
