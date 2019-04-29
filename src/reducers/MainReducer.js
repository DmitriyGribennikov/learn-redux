import { combineReducers } from 'redux'
import {
  ADD_TODO
} from '../constants/TodoConstants';

const STATUS_NOT_READY = 0;
//const STATUS_DONE = 1;

const defaultState = {
  todos: [
    {
      id: 1,
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

// мы сразу вытащили из объекта action поля type & data при помощи деструкции
//const todoReducer = (state = defaultState, action) => {
const todoReducer = (state = defaultState, {type, data}) => {
    switch(type) {
        case ADD_TODO:            
            return {
              ...state,
              //создаем новый массив todos в который вмерживаем старые элементы и новый который мы добавили
              todos: [...state.todos, generateTodoItem(data.title, state.todos)]
            };
        default: 
            return state;
    }
}


const todoApp = combineReducers({
  todoReducer
})

export default todoApp