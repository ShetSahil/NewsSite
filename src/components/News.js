import React, { useEffect , useState } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const  News =(props)=> {
  

    const[articles,setArticles]=useState([])
    const[loading,setLoading]=useState(true)
    const[page,setPage]=useState(1)
    const[totalResults,setTotalResults]=useState(0)
    // document.title = `${props.category} -Monkey News`;
  
   const updateNews=async() =>{
    props.setProgress(20);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bed0b41b81b2480ea30c935ee539a97f&page=${page}pageSize=${props.pageSize}`;
    // setState({ loading: true });
    setLoading(true)
    props.setProgress(50);
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false
    // })
    props.setProgress(100);
    console.log(parsedData);
  }
  useEffect(()=>{
    updateNews();
  },[])
  // async componentDidMount() {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bed0b41b81b2480ea30c935ee539a97f&pageSize=${props.pageSize}`;
  //   // this.setState({loading:true});
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json()
  //   // this.setState({
  //   //   articles:parsedData.articles,
  //   //   totalResults:parsedData.totalResults,
  //   //   loading:false
  //   // })
  //   // console.log(parsedData);
  //   this.updateNews();
  // }


  const handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bed0b41b81b2480ea30c935ee539a97f&page=${this.state.page-1}&pageSize=${props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json()

    // console.log(parsedData);
    // this.setState({
    //   page:this.state.page-1,
    //   articles:parsedData.articles,
    //   loading:false


    // })
    setPage(page-1)
    // this.setState({ page: this.state.page - 1 })
    updateNews();

  }
  const handleNextClick = async () => {
    //   if(!(this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize))){
    //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bed0b41b81b2480ea30c935ee539a97f&page=${this.state.page+1}&pageSize=${props.pageSize}`;
    //   this.setState({loading:true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json()

    //   console.log(parsedData);
    //   this.setState({
    //     page:this.state.page+1,
    //     articles:parsedData.articles,
    //     loading:false


    //  })}
    setPage(page+1)
    // this.setState({ page: this.state.page + 1 })
    updateNews();
  }

    const fetchMoreData = async () => {
      setPage(page+1)
      // this.setState({
      //   page: this.state.page + 1
      // })
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bed0b41b81b2480ea30c935ee539a97f&page=${page}pageSize=${props.pageSize}`;
      // this.setState({ loading: true });
      setLoading(true)
      let data = await fetch(url);
      let parsedData = await data.json()
      // this.setState({
      //   articles: this.state.articles.concat(parsedData.articles),
      //   totalResults: parsedData.totalResults,
      //   loading: false
      // })
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
    };

  
  
    // let{pageSize}=props;
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top {props.category} headlines </h1>
        {/* {loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length != totalResults}
          loader={<Spinner />}
        >
          <div className="row" >

            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                {/* console.log({"print"}) */}
                <NewsItems  title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
          
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} class="btn btn-dark">&larr;previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" onClick={this.handleNextClick} class="btn btn-dark">Next &rarr;</button>
        </div> */}
      </div>
    )
  }


News.defaultProps = {
  country: 'in',
  pageSize: 5
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string

}
export default News
