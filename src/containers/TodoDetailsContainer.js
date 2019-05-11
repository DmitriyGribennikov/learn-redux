import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TodoDetailsView from '../components/TodoDetailsView';
import * as TodoActions from '../actions/TodoActions';

const mapStateToProps = state => {    
    return {
      activeTodoItem: state.todoReducer.activeTodoItem
    }
}
  
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      TodoActions, dispatch)
}

class TodoDetailsContainer extends React.Component {
  render() {
    return <TodoDetailsView {...this.props}/>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoDetailsContainer)
