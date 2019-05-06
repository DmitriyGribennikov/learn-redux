import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TodoList from '../components/TodoList';
// import {
//     add,
//     del,
//     edit,
//     changeStatus
// } from '../actions/TodoActions';
import * as TodoActions from '../actions/TodoActions';

// Container component - вся его задача - это только подключиться к Store c помощью connect, взять 
// данные и передать ниже по дереву компонентов. он не отрисовывает ничего!!!
const mapStateToProps = state => {    
    return {
        todos: state.todoReducer.todos
    }
}
  
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      TodoActions, dispatch)
    // return {
    //    (data) => {
    //     dispatch(TodoActions(data))
    //   }
    // }
}

class TodoListContainer extends React.Component {
  render() {
    return <TodoList {...this.props}/>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer)
