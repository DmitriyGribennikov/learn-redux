import React from  'react';
import Menu from './Menu';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    del,
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
    return <li onClick = { this.handleClick}>   
        { item.title } : { item.status }  
        <Menu del={this.props.del} display={this.state.display}/>
    </li>
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({del}, dispatch)
}

export default connect(
  ()=> {},
  mapDispatchToProps
)(TodoItem)



// const { item } = this.props;  
// const item = this.props.item;