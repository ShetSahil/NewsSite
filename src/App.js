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
import { useState } from 'react';
// import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

const App=()=> {
  const[progress,setProgress]=useState(10)
  // state ={
  //   progress:10
  // }
  // setProgress(progress)
  // setProgress = (progress)=>{
  //   this.setState({progress:progress})
  // }
  const pageSize=6;
  const[mode,setMode]=useState('light')
  const handleClick=()=>{
    if(mode=='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey';
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
  }
}
    return (
      <>
      <div>
    <Router>
    <Navbar mode={mode} handleClick={handleClick} />
    <LoadingBar
        width='5px'
        color='#f11946'
        progress={progress}
        
      />
    {/* <News progress={this.state.setProgress}  pageSize={pageSize} category="science"/> */}

      <Switch>
        <Route exact path="/"><News setProgress={setProgress} mode={mode} key="general" pageSize={pageSize} country='in' category="general"/></Route>
        <Route exact path="/business"  ><News setProgress={setProgress} mode={mode} key="business" pageSize={pageSize} country='in' category="business"/></Route>
        <Route exact path="/entertainment"><News setProgress={setProgress} mode={mode} key="entertainment" pageSize={pageSize} country='in' category="entertainment"/></Route>
        <Route exact path="/general"><News setProgress={setProgress} mode={mode} key="general" pageSize={pageSize} country='in' category="general"/></Route>
        <Route exact path="/health"><News setProgress={setProgress} mode={mode} key="health" pageSize={pageSize} country='in' category="health"/></Route>
        <Route exact path="/science"><News setProgress={setProgress} mode={mode} key="science" pageSize={pageSize} country='in' category="science"/></Route>
        <Route exact path="/sports"><News setProgress={setProgress} mode={mode} key="sports" pageSize={pageSize} country='in' category="sports"/></Route>
        <Route exact path="/tehnology"><News setProgress={setProgress} mode={mode} key="tehnology" pageSize={pageSize} country='in' category="tehnology"/></Route>
        {/* <Route exact path="/"  element={<Home />}  > */}
      </Switch>

    </Router>
      </div>
      </>
    )
    
}
export default App
