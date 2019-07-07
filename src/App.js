import React from 'react';
import { Route } from 'react-router-dom';
import TodoListContainer from './containers/TodoListContainer';
import TodoDetailsContainer from './containers/TodoDetailsContainer';

// eslint-disable-next-line
import styles from './styles/app.scss';



{/* <div className='list-view'>
          <TodoListContainer />
      </div>
      <div className='details-view'>
        details
          <TodoDetailsContainer />
      </div> */}


class App extends React.Component {
  render() {
    return <div className='todo-root'>
      <Route path="/" exact component={TodoListContainer} />
      <Route path="/todo-item/:id" component={TodoDetailsContainer} />
  </div>
  }
}

export default App;
