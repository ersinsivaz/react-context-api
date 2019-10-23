import React, { Component } from 'react'
import PropTypes from "prop-types";
import Button from 'devextreme-react/button';
import UserConsumer from '../context/Context';


const data = [{
    arg: 1990,
    val: 5320816667
}, {
    arg: 2000,
    val: 6127700428
}, {
    arg: 2010,
    val: 6916183482
}];

class User extends Component {

    state = {
        isVisible: true
    }
    /* constructor(props){
        super(props);

        this.state = {
            isVisible : false
        }
    } */

    

    onClickEvent = (e) => {
        this.setState({
            isVisible : !this.state.isVisible
        });
    }

    onDeleteUser = (dispatch,e) => {
        const {id} = this.props;
        console.log(id);
        dispatch({
            type:"DELETE_USER",
            payload: id
        })
    }

    render() {
        //Descructing
        const {name,department,salary} = this.props;
        const {isVisible} = this.state;

        return(
            <UserConsumer>
                {
                    value=>{
                        const {dispatch} = value;

                        return (
                            <React.Fragment>
                               <div className="col-md-8 mb-4">
                                <div className="card" style={isVisible ? {backgroundColor : "#AED6F1",color:"white"} : null}>
                                    <div className="card-header d-flex justify-content-between">
                                        <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>
                                        <i onClick = {this.onDeleteUser.bind(this,dispatch)} className="far fa-trash-alt" style={{cursor:"pointer"}}></i>
                                    </div>
                                    {
                                        isVisible? 
                                        <div className="card-body">
                                            <p className="card-text">Maaş: {salary}</p>
                                            <p className="card-text">Department: {department}</p>
                                            <Button
                                                text="Click me"
                                                
                                            />
                                        </div> : null
                                    }
                
                                    
                                </div>
                                
                            </div>
                             
                            </React.Fragment>
                            
                        )
                    }
                }
            </UserConsumer>
        )
    }
}

User.protoTypes = {
    name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired
   
}

User.defaultProps = {
    name:"Bilgi yok",
    salary:"Bilgi yok",
    department:"Bilgi yok"
}

export default User;
