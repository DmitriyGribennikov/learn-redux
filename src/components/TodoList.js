import React from  'react';
import TodoItem from './TodoItem';

//styles
// eslint-disable-next-line
import styles from './todolist.scss';


class TodoList extends React.Component {

  state = {
      item: ''
  };  

  handleChange = (e) => {
    this.setState({item: e.target.value})
  }

  handleClick = () => {
    if (this.state.item){
      this.props.add({
        title: this.state.item
      }) 
    }
    this.setState({
      item: ""
    })
  }

  render() {
    const { todos } = this.props;
    return <div>
        <ol className="todolist">
            TODO LIST:
            { todos.map(todoItem => <TodoItem key={todoItem.id} item={todoItem} />) }
        </ol>
        <br />
        <input type='text' placeholder="type your todos heare" value={this.state.item} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Add Todo Item </button>
    </div>
  }
}

export default TodoList;
