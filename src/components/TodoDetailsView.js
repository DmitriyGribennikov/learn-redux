import React from  'react';
// eslint-disable-next-line
import styles from './TodoDetailsView.scss';

class TodoDetailsView extends React.Component {
  state = {
    isEditPathVisible: false,
    isEditButtonVisible: true,
    titleForUpdate: "",
    newStatusValue: "Not ready",
    details: ""
  }
  handleChange = (e) => {
    this.setState({titleForUpdate: e.target.value})
  }
  handleClick = (e) => {
    e.stopPropagation();
    switch(e.target.value) {
      case "1"://Edit
        this.setState({
          isEditPathVisible: !this.state.isEditPathVisible,
          isEditButtonVisible: !this.state.isEditButtonVisible
        })
        break
      case "2"://Confirm
        if (this.state.titleForUpdate) {
          this.props.item.title = this.state.titleForUpdate   //почему тут равно???
        }
      this.setState({
        titleForUpdate: ""
      })
        this.setState({
          isEditPathVisible: !this.state.isEditPathVisible,
          isEditButtonVisible: !this.state.isEditButtonVisible
        })
      break
      case "3"://Cancel
        this.setState({
          isEditPathVisible: !this.state.isEditPathVisible,
          isEditButtonVisible: !this.state.isEditButtonVisible,
          titleForUpdate: ""
        })
      break;
      case "4"://Update
        console.log("Update")
      break;
      default:
        break
    }
  }
  handleNewStatus = (e) => {
    console.log(this.state.newStatusValue)
    console.log(this.props.item.status)
    if (this.state.newStatusValue !== e.target.value) {
      this.setState({
        newStatusValue: e.target.value
      })
      console.log(this.state.newStatusValue) // Не корректно отображается в приходящем значении статуса
      this.props.item.status = this.state.newStatusValue
      console.log(this.props.item.status)
    }
  }
  render() {
    const { isEditPathVisible, isEditButtonVisible, newStatusValue } = this.state;
    const { item } = this.props;
    
    if (!item) {
      return <div> Nothing selected</div>
    }
    return <div className = "component-cotainer">
      active todo item: {item.title} 
      { isEditButtonVisible && <button 
        className = "btn edit"
        onClick = {this.handleClick} 
        value = "1">
        Edit
      </button> }
        { isEditPathVisible && <div className="edit-block">
          <input 
            type="text"
            maxLength = "50"
            placeholder = "Введите заголовок до 50 символов"
            onChange = {this.handleChange}
            value={this.state.titleForUpdate}  />
          <div className = "btn-container">
            <button 
              className = "btn conf" 
              type="submit"
              onClick = {this.handleClick} 
              value = "2">
              Confirm
            </button>
            <button 
              className = "btn canc"
              type="reset"
              onClick = {this.handleClick} 
              value = "3">
              Cancel
            </button>
          </div>
        </div> }
      <div> 
        status: {item.status}
      </div>
      <div> 
        New status: 
        <select 
          value = {newStatusValue} 
          onChange = {this.handleNewStatus}>
          <option value = "done">Done</option>
          <option value = "in processe">In process</option>
          <option value = "not ready">Not ready</option>
        </select>
      </div>
      <div>
        details: <textarea> 
        </textarea>
      </div>
      <button 
            className = "btn update" 
            type="submit"
            onClick = {this.handleClick} 
            value = "4">
            Update
          </button>
    </div>
  }
}

export default TodoDetailsView;
