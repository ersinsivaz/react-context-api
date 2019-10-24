import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from '../context/Context';
var uniqid = require('uniqid');

const Animation = posed.div({
    visible : {
        opacity : 1,
        applyAtStart : {
            display : "block"
        }
    },
    hidden : {
        opacity : 0,
        applyAtEnd : {
            display : "none"
        }
    }
});

class AddUser extends Component {
    state = {
        visible : false,
        name:"",
        department:"",
        salary:""
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addUser = (dispatch,e) =>{
        console.log(e);
        e.preventDefault();
        const {name,department,salary} = this.state;
        const newUser = {
            id : uniqid(),
            name: name,
            salary : salary,
            department : department
        }
        console.log(newUser);
        dispatch({type:"ADD_USER",payload:newUser});
        
    }

    changeVisibility = (e) => {
        this.setState({
            visible : !this.state.visible
        });
    }

    render() {
        const {visible,name,salary,department} = this.state;

        return <UserConsumer>
            {
                value => {
                    const {dispatch} = value;

                    return (
                        <div className="col-md-8 mb-4">
                            <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-2">{visible? "Hide Form" : "Show Form"}</button>
                            
                           <Animation pose={visible ? "visible" : "hidden"}>
                           <div className="card">
                                <div className="card-header">
                                    <h4>Add User Form</h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.addUser.bind(this,dispatch)}>
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input 
                                                type="text"
                                                name = "name"
                                                id = "name"
                                                className="form-control"
                                                placeholder = "Enter name"
                                                value = {name}
                                                onChange = {this.changeInput}
                                            ></input>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="department">Department</label>
                                            <input 
                                                type="text"
                                                name = "department"
                                                id = "department"
                                                className="form-control"
                                                placeholder = "Enter department"
                                                value = {department}
                                                onChange = {this.changeInput}
                                            ></input>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="salary">Salary</label>
                                            <input 
                                                type="text"
                                                name = "salary"
                                                id = "salary"
                                                className="form-control"
                                                placeholder = "Enter salary"
                                                value = {salary}
                                                onChange = {this.changeInput}
                                            ></input>
                                        </div>
                                        <button className="btn btn-success btn-block" type="submit">Add User</button>
                                    </form>
                                </div>
                            </div>
                           </Animation> 
                           
                        </div>
                    )
                }
            }
        </UserConsumer>

    
    }
}

export default AddUser;
