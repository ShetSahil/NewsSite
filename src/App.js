import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize=6;
  render() {
    return (
      <div>
    <Router>
    <Navbar/>
    {/* <News pageSize={this.pageSize} category="science"/> */}

      <Switch>
        <Route exact path="/"><News key="general" pageSize={this.pageSize} country='in' category="general"/></Route>
        <Route exact path="/business" ><News key="business" pageSize={this.pageSize} country='in' category="business"/></Route>
        <Route exact path="/entertainment"><News key="entertainment" pageSize={this.pageSize} country='in' category="entertainment"/></Route>
        <Route exact path="/general"><News key="general" pageSize={this.pageSize} country='in' category="general"/></Route>
        <Route exact path="/health"><News key="health" pageSize={this.pageSize} country='in' category="health"/></Route>
        <Route exact path="/science"><News key="science" pageSize={this.pageSize} country='in' category="science"/></Route>
        <Route exact path="/sports"><News key="sports" pageSize={this.pageSize} country='in' category="sports"/></Route>
        <Route exact path="/tehnology"><News key="tehnology" pageSize={this.pageSize} country='in' category="tehnology"/></Route>
      </Switch>

    </Router>
      </div>
    )
  }
}
