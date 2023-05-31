import React, { Component } from 'react'

export class NewsItems extends Component {

  render() {
    let{title,description,imageUrl,newsUrl} = this.props;
    return (
    <div className="my-3">
    <div className="card" >
        <img src={!imageUrl ? "https://www.deccanherald.com/sites/dh/files/articleimages/2023/05/29/file7qdtzpo4f88fn3753xv-1-1222897-1685356452.jpg":imageUrl }className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target="_blank"className="btn brn-sm  btn-dark">Read More</a>
        </div>
    </div>
    </div>
    )
  }
}

export default NewsItems
