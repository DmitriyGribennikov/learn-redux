import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers/MainReducer'
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';


//import { add, del, edit, changeStatus} from './actions/TodoActions'


const store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// console.log(store.getState())

// // Каждый раз при обновлении состояния - выводим его
// // Отметим, что subscribe() возвращает функцию для отмены регистрации слушателя
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

// // Отправим несколько действий
// store.dispatch(add('Learn about actions'))
// store.dispatch(add('Learn about reducers'))
// store.dispatch(add('Learn about store'))
// store.dispatch(changeStatus(0))
// store.dispatch(changeStatus(1))
// //store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// // Прекратим слушать обновление состояния
// unsubscribe()

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
