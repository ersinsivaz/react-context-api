import React, { Component } from 'react'
import posed from 'react-pose';

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
        visible : true
    }

    changeVisibility = (e) => {
        this.setState({
            visible : !this.state.visible
        });
    }

    render() {
        const {visible} = this.state;

        return (
            <div className="col-md-8 mb-4">
                <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-2">{visible? "Hide Form" : "Show Form"}</button>
                
               <Animation pose={visible ? "visible" : "hidden"}>
               <div className="card">
                    <div className="card-header">
                        <h4>Add User Form</h4>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input 
                                    type="text"
                                    name = "name"
                                    id = "name"
                                    className="form-control"
                                    placeholder = "Enter name"
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

export default AddUser;
