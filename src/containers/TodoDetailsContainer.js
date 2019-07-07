import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import TodoForm from '../components/TodoDetailsView';
import * as TodoActions from '../actions/TodoActions';

const mapStateToProps = (state, router) => {   
    const {todoReducer: { todos: {byId}}} = state;
    return {
      item: byId[router.match.params.id]
    }
}
  
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      TodoActions, dispatch)
}

class TodoDetailsContainer extends React.Component {
  render() {
    return <TodoForm {...this.props}/>
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoDetailsContainer)



export default withRouter(withConnect)
