import React from  'react';
import {Link} from 'react-router-dom';
import Modal from './Modal';
import { reduxForm, Field, FormSection } from 'redux-form';

// eslint-disable-next-line
import styles from '../styles/TodoDetailsView.scss';
 const formName = 'TODO_DETAILS_FORM';
class TodoForm extends React.Component {
  state = {
    isEditPathVisible: false,
    isEditButtonVisible: true,
    isEditPathDetailsVisible: false,
    isEditButtonDetailsVisible: true,
    titleForUpdate: "",
    newTitle: "",
    newStatusValue: "",
    details: "",
    newDetails:"",
    isEditDetailsModalOpen: false
  }
  handleChange = (e) => {
    this.setState({titleForUpdate: e.target.value})
  }
  handleDetails = (e) => {
    this.setState({details: e.target.value})
  }
  handleNewStatus = (e) => {
    if (this.state.newStatusValue !== e.target.value) {
      this.setState({
        newStatusValue: e.target.value
      })
    }
  }
  handleClick = (e) => {
    e.stopPropagation();
    const reversVisibleTitlePath = () => {
      return this.setState({
        isEditPathVisible: !this.state.isEditPathVisible,
        isEditButtonVisible: !this.state.isEditButtonVisible
      })
    }
    const reversVisibleDetailsPath = () => {
      return this.setState({
        isEditPathDetailsVisible: !this.state.isEditPathDetailsVisible,
        isEditButtonDetailsVisible: !this.state.isEditButtonDetailsVisible
      })
    }
    const resetState = () => {
      return this.setState({
        isEditPathVisible: false,
        isEditButtonVisible: true,
        isEditPathDetailsVisible: false,
        isEditButtonDetailsVisible: true,
        titleForUpdate: "",
        newTitle: "",
        newStatusValue: "",
        details: "",
        newDetails:""
      })
    }
    switch(e.target.value) {
      case "Edit"://Edit блока тайтла. Инверсия состояний видимости блока и кнопки
        reversVisibleTitlePath();
        break
      case "Confirm"://Confirm блока тайтла
        if (this.state.titleForUpdate) {
          this.setState({newTitle : this.state.titleForUpdate})
        }
        this.setState({
          titleForUpdate: ""
        })
        reversVisibleTitlePath();
        break
      case "Cancel"://Cancel
        reversVisibleTitlePath();
        this.setState({
          titleForUpdate: ""
        })
        break;
      case "Update"://Update
        let newData = {
          details:  this.state.newDetails ? this.state.newDetails : this.props.item.details,
          newTitle: this.state.newTitle ? this.state.newTitle : this.props.item.title,
          status:   this.state.newStatusValue ? this.state.newStatusValue : this.props.item.status,
          id:       this.props.item.id
        }
        this.props.update(newData);
        resetState();
        break;
      case "Edit_details":
        reversVisibleDetailsPath();
        break;
      case "Confirm_details":
        if (this.state.details) {
          this.setState({newDetails : this.state.details})
        }
        this.setState({
          details: ""
        })
        reversVisibleDetailsPath();
        break;
      case "Cancel_details":
        reversVisibleDetailsPath();
        this.setState({
          details: ""
        })
        break;
      case "Reset":
        resetState()
        break;
      case "Close details":
          this.props.closeDet();
          resetState();
        break;
      default:
        break
    }
  }

  handleClickEditDetails = () => {
    this.setState({isEditDetailsModalOpen: !this.state.isEditDetailsModalOpen})
  }
  render() {
    const { //Переменные для короткого обпращения в рендере
      isEditPathVisible, 
      isEditButtonVisible, 
      newStatusValue, 
      newTitle, 
      isEditPathDetailsVisible, 
      isEditButtonDetailsVisible,
      newDetails
    } = this.state;
    const { item } = this.props;
    if (!item) {
      return <div> Nothing selected</div>
    }
    return <div className = "component-cotainer">
      {//Если Новое значение тайтла не введено - используется значение из пропса
      }
      active todo item: {newTitle ? newTitle : item.title} 
      { //Вкл/выкл видимости кнопки редактипрования тайтла
        isEditButtonVisible && <button 
        className = "btn edit"
        onClick = {this.handleClick} 
        value = "Edit">
        Edit
      </button> }
      { //Вкл/выкл видимости блока редактирования с инпутом и кнопками
        isEditPathVisible && <div className="edit-block">
        <input 
          type="text"
          maxLength = "50"
          placeholder = "Input new short title"
          onChange = {this.handleChange}/>
        <div className = "btn-container">
          <button 
            className = "btn conf" 
            type="submit"
            onClick = {this.handleClick} 
            value = "Confirm">
            Confirm
          </button>
          <button 
            className = "btn canc"
            type="reset"
            onClick = {this.handleClick} 
            value = "Cancel">
            Cancel
          </button>
        </div>
      </div> }
      <div> 
        {/* Если новое значение статуса не введено - используется значение с пропса */}
        status: {newStatusValue ? newStatusValue : item.status}
      </div>
      <div> 
        New status: 
        <select 
          onChange = {this.handleNewStatus}>
          <option value = "not ready">Not ready</option>
          <option value = "done">Done</option>
          <option value = "in process">In process</option>
        </select>
      </div>
      <div>
        {/* Если нет нового описания Деталей - используется дефолтное */}
        Details: {newDetails ? newDetails : item.details}
        { //Вкл/выкл видимости кнопки редактирования блока
          isEditButtonDetailsVisible && <button 
        className = "btn edit"
        onClick = {this.handleClickEditDetails} 
        value = "Edit_details">
        Edit
        </button> }
        <br />
      </div>
      <button 
        className = "btn update" 
        onClick = {this.handleClick} 
        value = "Update">
        Update
      </button>
      <button 
        className = "btn update"
        onClick = {this.handleClick} 
        value = "Reset">
        Reset changes
      </button>
      <Link to='/'>
        <button 
          className = "btn update"
          value = "Close details">
          Close details
        </button>
      </Link>
      <form>
        <Modal
          onSubmit={() => {}}
          onCancel={() => this.props.resetSection(formName, 'modal')}
          visible={this.state.isEditDetailsModalOpen}
        >
            <Field
                component="input" 
                type="text"
                name="details"
            />
        </Modal>
      </form>
    </div>
  }
}


export default reduxForm({  
  form: formName, 
})(TodoForm);