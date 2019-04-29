import {
    ADD_TODO
} from '../constants/TodoConstants';

export const add = (todoItem) => {
    return {
        type: ADD_TODO,
        data: todoItem
    }
}