import React, { Component } from 'react'

const NewsItems=(props)=> {

  
    let{title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
    <div className="my-3">
    <div className="card" >
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}</span>
        {/* <span class="badge badge-danger" style={{margin:'auto' , marginLeft:'280px' ,zIndex:'1'}}>{source}</span> */}
        <img src={!imageUrl ? "https://www.deccanherald.com/sites/dh/files/articleimages/2023/05/29/file7qdtzpo4f88fn3753xv-1-1222897-1685356452.jpg":imageUrl }className="card-img-top" alt="..."/>
        <div className="card-body" >
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">{!author?"unknown": author} published on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank"className="btn brn-sm  btn-dark">Read More</a>
        </div>
    </div>
    </div>
    )
  
}

export default NewsItems
