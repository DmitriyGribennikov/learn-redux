import { combineReducers } from 'redux';
import {
  ADD_TODO,
  DEL_TODO,
  EDIT_TODO,
  CHANGE_STATUS_TODO
} from '../constants/TodoConstants';

const STATUS_NOT_READY = `Not ready`;
const STATUS_DONE = `Done`;

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
const generateTodoItem = (action, state) => {
  console.log(state.todos)
  return{
    id: counter(),
    title: action.data.title,
    status: STATUS_NOT_READY
  }
}

const makeCounter = () => {
  let currentCount = 1;
  return () => {
    return currentCount++;
  };
}

const counter = makeCounter();

const delTodoItem = (todos, id) => {
  const elementIndex = todos.findIndex(todo => todo.id === id);
  if(elementIndex) {
    const newTodos = [ ...todos];
    newTodos.splice(elementIndex, 1)
    return newTodos;
  }
  return todos;
}

const editTodoItem = (state, action) => {
}

const todoReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_TODO:          
            return {
              ...state,
              todos: [...state.todos, generateTodoItem(action, state)]
            };
        case DEL_TODO:
            return {
              ...state,
              todos: delTodoItem(state.todos, action.data)
            }
        case EDIT_TODO:
            return {   
              ...state, id: action.id
            };
        case CHANGE_STATUS_TODO:  ///дОПИСАТЬ выбор тудуса по айдишнику и изменение статуса.
            //console.log(action.data)
            //console.log(state.todos.status === STATUS_NOT_READY ? state.todos.status = STATUS_DONE : state.todos.status = STATUS_NOT_READY)
            //console.log(state.todos.status)
            editTodoItem(state, action)
            // return {
            // };
        default: 
            return state;
    }
}

const todoApp = combineReducers({
  todoReducer
})

export default todoApp