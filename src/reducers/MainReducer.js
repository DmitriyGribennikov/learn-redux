import { combineReducers } from 'redux';
import uniqid from 'uniqid';
import {
  ADD_TODO,
  DEL_TODO,
  EDIT_TODO,
  CHANGE_STATUS_TODO,
  OPEN_DETAILS_VIEW
} from '../constants/TodoConstants';

const STATUS_NOT_READY = `Not ready`;
//const STATUS_DONE = `Done`;
const firstUniqueId = uniqid();
const defaultState = {
  todos: {
    byId: {
      firstUniqueId: {
          id: firstUniqueId,
          title: 'wash a car',
          status: STATUS_NOT_READY
      }  
    },
    allIds: [firstUniqueId]
  },
  activeTodoItem: null
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
            };
        case CHANGE_STATUS_TODO:
            editTodoItem(state, action)
            return {
            };
        case OPEN_DETAILS_VIEW: 
            return {
              ...state,
              activeTodoItem: action.data
            };
        default: 
            return state;
    }
}

const todoApp = combineReducers({
  todoReducer
})

export default todoApp