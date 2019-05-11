import React from "react";

//import { del, edit, changeStatus } from "../actions/TodoActions";     //Может раскоментить

class Menu extends React.Component {
    state = {
        menuId: ""
    }

    handleClick = (e) => {
        this.setState({
            menuId : e.target.id
        })
        switch (e.target.id) {
            case "Delet_ToDos":
            this.props.del( this.props.id );
            break;
            case "Edit_ToDos":
            this.props.edit( this.props.id );
            break;
            case "Done!":
            this.props.changeStatus( this.props.id );
            break;
            default:
                return this.state;
        }
    }
    render (){
        return <ul style = {{display:this.props.display}}  onClick={this.handleClick}>
                <li id = "Edit_ToDos" >Edit ToDos</li>
                <li id = "Done!">Done!</li>
                <li id = "Delet_ToDos">Delet ToDos</li>
            </ul> 
    }
}

export default Menu;