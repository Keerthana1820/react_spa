import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import App from "./App";


 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Home Page</h1>
          
          <ul className="header">
          <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
    <li><NavLink to="/app">App</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
    
          </ul>
          <div className="content">
          <Route path="/home" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
           
            <Route path="/app" component={App}/>
            <Route path="/contact" component={Contact}/>
            
             
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;
