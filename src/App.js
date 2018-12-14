import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from "./components/Wizard/Wizard";
import {Switch, Route} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <Switch>
         <Route path="/wizard" component={Wizard}/>   
         <Route path="/" component={Dashboard}/>
       </Switch>
               
              
      </div>
    );
  }
}

export default App;
