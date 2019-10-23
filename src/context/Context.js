import React, { Component } from 'react'

const UserContext = React.createContext();

const reducer = (state,action) => {
    switch(action.type){
        case "DELETE_USER" :
            return {
                ...state,
                users: state.users.filter(user => user.payload !== user.id)
            }
    }
}

export class UserProvider extends Component {
    state = {
        users : [
          {id:1, name:"ersin",salary:"1000",department:"bilişim"},
          {id:2, name:"ahmet",salary:"1000",department:"bilişim"},
          {id:3, name:"mehmet",salary:"1000",department:"bilişim"},
        ],

        dispatch : action => {
            this.setState(state => reducer(state,action))
        }
      }

    render() {
        return (
            <UserContext.Provider value = {this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}


const UserConsumer = UserContext.Consumer;

export default UserConsumer;
