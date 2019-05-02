import React from  'react';
import Menu from './Menu'

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
        <Menu display={this.state.display}/>
    </li>
  }
}

export default TodoItem;



// const { item } = this.props;  
// const item = this.props.item;