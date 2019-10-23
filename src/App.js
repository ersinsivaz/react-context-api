import React, { Component } from 'react'

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import './App.css'
import Navbar from './components/Navbar'
import Users from './components/Users'

class App extends Component {

  render() {
    return (
      <div className="container">
        <Navbar title="User App"></Navbar>
        <hr></hr>
        <Users></Users>
      
      </div>
    )
  }
}

export default App;
