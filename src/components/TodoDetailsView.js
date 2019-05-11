import React from  'react';
// eslint-disable-next-line
import styles from './todolist.scss';


class TodoDetailsView extends React.Component {

  render() {
    const { activeTodoItem } = this.props;
    return <div className=''>
        active todo item: {activeTodoItem}
    </div>
  }
}

export default TodoDetailsView;
