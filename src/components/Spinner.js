import React, { Component } from 'react'
import loading from './loading.gif'

const Spinner =()=> {
 
    return (
      <div className="text-center" >
        <img src={loading}  alt="" style={{height:'30px', width:'30px'}}/>
      </div>
    )
  
}

export default Spinner
