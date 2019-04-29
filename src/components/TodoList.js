import React from  'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {

  state = {
      item: ''
  };  

  handleChange = (e) => {
    this.setState({item: e.target.value})
  }

  handleClick = () => {
    this.props.add({
        title: this.state.item
    })  
    console.log( `item  ${this.state.item} will be saved!`)
  }

  render() {
    const { todos } = this.props; 
    return <div>
        <ul>
            TODO LIST:
            {
                todos.map(todoItem => <TodoItem key={todoItem.id} item={todoItem} />)
            }
        
        </ul>
        <input type='text' value={this.state.item} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add Todo Item </button>
    </div>
    
  }
}

export default TodoList;
