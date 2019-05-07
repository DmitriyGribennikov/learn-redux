import React from "react";
import { del, edit, changeStatus } from "../actions/TodoActions"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

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
            console.log('del')
                del( 1
                );
            break;
            case "Edit_ToDos":
            console.log("edit")
                edit( 2
                );
            break;
            case "Done!":
            console.log("done")
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

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
    {del,
    edit,
    changeStatus
    }, dispatch)
}

export default connect(
    () => {},
    mapDispatchToProps
    )(Menu)
