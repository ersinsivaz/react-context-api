import React, { Component } from 'react'
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css'
import Navbar from './components/Navbar'
import Users from './components/Users'
import AddUser from './components/AddUser';
import {BrowserRouter as Router,Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
        <Navbar title="User App"></Navbar>
          <hr></hr>
          <Route exact path="/" component = {Users} />
          <Route exact path="/add" component = {AddUser} />
        </div>
      </Router>
    )
  }
}

export default App;


