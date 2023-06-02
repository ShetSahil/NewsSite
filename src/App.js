import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import News  from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  state ={
    progress:10
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  pageSize=6;
  render() {
    return (
      <div>
    <Router>
    <Navbar />
    <LoadingBar
        width='5px'
        color='#f11946'
        progress={this.state.progress}
        
      />
    {/* <News progress={this.state.setProgress}  pageSize={this.pageSize} category="science"/> */}

      <Switch>
        <Route exact path="/"><News setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country='in' category="general"/></Route>
        <Route exact path="/business" ><News setProgress={this.setProgress}  key="business" pageSize={this.pageSize} country='in' category="business"/></Route>
        <Route exact path="/entertainment"><News setProgress={this.setProgress}  key="entertainment" pageSize={this.pageSize} country='in' category="entertainment"/></Route>
        <Route exact path="/general"><News setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country='in' category="general"/></Route>
        <Route exact path="/health"><News setProgress={this.setProgress}  key="health" pageSize={this.pageSize} country='in' category="health"/></Route>
        <Route exact path="/science"><News setProgress={this.setProgress}  key="science" pageSize={this.pageSize} country='in' category="science"/></Route>
        <Route exact path="/sports"><News setProgress={this.setProgress}  key="sports" pageSize={this.pageSize} country='in' category="sports"/></Route>
        <Route exact path="/tehnology"><News setProgress={this.setProgress}  key="tehnology" pageSize={this.pageSize} country='in' category="tehnology"/></Route>
      </Switch>

    </Router>
      </div>
    )
  }
}
