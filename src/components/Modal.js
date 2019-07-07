import React from "react";
import { FormSection } from 'redux-form';
class Modal extends React.Component {

  onSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit && onSubmit();
  }

  onCancel = (e) => {
    e.preventDefault()
    const { onCancel } = this.props;
    onCancel && onCancel();
  }

  render (){
    const { visible } = this.props;
    return <div className="edit-block" style={{display: visible ? 'block': 'none'}}>
      <FormSection name='modal'>
        { this.props.children}
      </FormSection>
      <div className="btn-container">
        <button
          className="btn conf" 
          onClick={this.onSubmit}
        >
          Confirm
        </button>
        <button 
          className = "btn canc"
          onClick = {this.onCancel}
        >
          Cancel
        </button>
      </div>
    </div> 
  }
}

export default Modal;