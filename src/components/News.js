import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'



export class News extends Component {
    // articles = [
    //     {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    //         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    //         "publishedAt": "2020-04-27T11:41:47Z",
    //         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    //         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    //         "publishedAt": "2020-03-30T15:26:05Z",
    //         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    //     }
    // ]
    
    
    static defaultProps ={
      country:'in',
      pageSie:8
    }
    static propTypes={
      country: PropTypes.string,
      pageSize:PropTypes.number

    }
    constructor(){
        super();
        this.state={
        articles:[],
        loading:false,
        page:1
        
    }
    
}
async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bed0b41b81b2480ea30c935ee539a97f&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
    })
    console.log(parsedData);
}


 handlePrevClick=async()=>{
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bed0b41b81b2480ea30c935ee539a97f&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data = await fetch(url);
  let parsedData = await data.json()
 
  console.log(parsedData);
  this.setState({
    page:this.state.page-1,
    articles:parsedData.articles,
    loading:false
    
  })

 }
 handleNextClick=async()=>{
  if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bed0b41b81b2480ea30c935ee539a97f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data = await fetch(url);
  let parsedData = await data.json()
 
  console.log(parsedData);
  this.setState({
    page:this.state.page+1,
    articles:parsedData.articles,
    loading:false
  
    
 })}

 }
  render() {
    // let{pageSize}=this.props;
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        {this.state.loading &&<Spinner />}
        <div className="row" >
            {!this.state.loading && this.state.articles.map((element)=>{ 
                return  <div className="col-md-4" key={element.url}>
       
                 <NewsItems title={element.title? element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
            } )}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button"onClick={this.handlePrevClick} class="btn btn-dark">&larr;previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" onClick={this.handleNextClick} class="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
