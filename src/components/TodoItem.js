import React from  'react';

class TodoItem extends React.Component {
  render() {
    const { item } = this.props;  
    return <li>
        { item.title }    
    </li>
  }
}

export default TodoItem;



// const { item } = this.props;  
// const item = this.props.item;