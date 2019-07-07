import React from  'react';
import Menu from './Menu';
import {withRouter} from 'react-router-dom';
class TodoItem extends React.Component {
  state = {
    isMenuVisible: false
  }
  handleClick = () => {
    const { openDetailsView, item: { id }, history } = this.props;
    this.setState({isMenuVisible: !this.state.isMenuVisible})
    openDetailsView(id);
    history.push(`/todo-item/${id}`);
  }
  render() {
    const { item } = this.props;
    const { isMenuVisible } = this.state;
    console.log('here', this.props)
    return <li onClick = { this.handleClick} id = {item.id}>   
      { item.title } : { item.status }  
      { isMenuVisible && <Menu 
        id = {item.id}
        openerCloser = { this.props.openerCloser}
        status = {item.status}
        del={this.props.del}
        edit={this.props.edit}
        changeStatus={this.props.changeStatus}
        display={this.state.display}/>
      }
    </li>
  }
}

export default withRouter(TodoItem);



// const { item } = this.props;  
// const item = this.props.item;