import React, { Component } from 'react'

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import './App.css'
import Navbar from './components/Navbar'
import Users from './components/Users'
import AddUser from './components/AddUser';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Navbar title="User App"></Navbar>
        <hr></hr>
        <AddUser />
        <Users></Users>
      
      </div>
    )
  }
}

export default App;
