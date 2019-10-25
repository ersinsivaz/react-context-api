import React, { Component } from 'react'
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css'
import Navbar from './components/Navbar'
import Users from './components/Users'
import AddUser from './components/AddUser';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NotFound from './components/NotFound';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
        <Navbar title="User App"></Navbar>
          <hr></hr>
          <Switch>
            <Route exact path="/" component = {Users} />
            <Route exact path="/add" component = {AddUser} />
            <Route component = {NotFound} />
          </Switch>
          
        </div>
      </Router>
    )
  }
}

export default App;


