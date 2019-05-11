import React from  'react';
import Menu from './Menu'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    del, 
    edit,
    changeStatus
} from '../actions/TodoActions';

class TodoItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display:"none"  
    }
  }
  handleClick = () => {
    if (this.state.display === "none") {
      this.setState({
        display:"inline"
      })
    } else {
      this.setState({
        display:"none"
      })
    }
  }
  render() {
    const { item } = this.props;  
    //console.log (item)
    return <li onClick = { this.handleClick} id = {item.id}>   
        { item.title } : { item.status }  
        <Menu 
          id = {item.id}
          status = {item.status}
          del={this.props.del}
          edit={this.props.edit}
          changeStatus={this.props.changeStatus}
          display={this.state.display}/>
    </li>
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {del,
    edit,
    changeStatus}, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(TodoItem)



// const { item } = this.props;  
// const item = this.props.item;