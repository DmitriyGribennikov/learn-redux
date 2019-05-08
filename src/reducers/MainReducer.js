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
const generateTodoItem = (title, items) => {
  return{
    id: items.length,
    title: title,
    status: STATUS_NOT_READY
  }
}

const delTodoItem = (state, action) => {  //Add search in obj by "id" and then delete thouse obj
  // console.log(state.todos)
  // console.log(action.data)
  state.todos.splice(action.data, 1)
  //console.log(state)
  return state
}

const editTodoItem = (state, action) => {
  return
}

// мы сразу вытащили из объекта action поля type & data при помощи деструкции
//const todoReducer = (state = defaultState, action) => {
const todoReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_TODO:          
            return {
              ...state,
              //создаем новый массив todos в который вмерживаем старые элементы и новый который мы добавили
              todos: [...state.todos, generateTodoItem(action.data.title, state.todos)]
            };
        case DEL_TODO:
            return Object.assign({}, delTodoItem(state, action) );
        case EDIT_TODO:
            return {   
              ...state, id: action.id
            };
        case CHANGE_STATUS_TODO:
            return {
              ...state, id: action.id
            };
        default: 
            return state;
    }
}

const todoApp = combineReducers({
  todoReducer
})

export default todoApp