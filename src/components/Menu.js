import React from "react";
import { del, edit, changeStatus } from "../actions/TodoActions"

class Menu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            menuId : ""
        }
    }

    handleClick = (e) => {
        this.setState({
            menuId : e.target.id
        })
        switch (e.target.id) {
            case "Delet_ToDos":
            //console.log('del')
                del( {title: this.state.item}
                );
            break;
            case "Edit_ToDos":
            //console.log("edit")
                edit( 2
                );
            break;
            case "Done!":
            //console.log("done")
                changeStatus( 3
                );
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