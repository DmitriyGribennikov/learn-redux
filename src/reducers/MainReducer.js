import { combineReducers } from 'redux';
import {
  ADD_TODO,
  DEL_TODO,
  EDIT_TODO,
  CHANGE_STATUS_TODO
} from '../constants/TodoConstants';

const STATUS_NOT_READY = 0;
// const STATUS_DONE = 1;
// const STATUS_IN_PROCESS = 2;
const defaultState = {
  todos: [
    {
      id: 0,
      title: 'wash a car',
      status: STATUS_NOT_READY
    }
  ]
}

// это замена сервера
const generateTodoItem = (title, items) => ({
  id: items.length,
  title: title,
  status: STATUS_NOT_READY
})

const delTodoItem = (id, todos) => {
  return     console.log(id, todos)
  
}

// мы сразу вытащили из объекта action поля type & data при помощи деструкции
//const todoReducer = (state = defaultState, action) => {
const todoReducer = (state = defaultState, {type, data, id}) => {
    switch(type) {
        case ADD_TODO:            
            return {
              ...state,
              //создаем новый массив todos в который вмерживаем старые элементы и новый который мы добавили
              todos: [...state.todos, generateTodoItem(data.title, state.todos)]
            };
        case  DEL_TODO:
            return {
              ...state,
              //создаем новый массив todos в который вмерживаем старые элементы и новый который мы добавили
              todos: [ delTodoItem(id, ...state.todos)]
            }
        case EDIT_TODO:
            return {

            }
        case CHANGE_STATUS_TODO:
            return {

            }
        default: 
            return state;
    }
}


const todoApp = combineReducers({
  todoReducer
})

export default todoApp