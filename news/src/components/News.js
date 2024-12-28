import React, { Component } from 'react'

import NewsItems from './NewsItems';
import Spinner from './Spinner';
// import img from './back.png';

export default class News extends Component {
    constructor(){
        super();
        this.state = {
          isLoading: false,
          articles: [],
          page: 1
        }
    }
   async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a5934cebf2f14ea3a60c00971c3c3c9a&page=1&pageSize=${this.props.pageSize}`
      this.setState({
        isLoading: true
      })
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, isLoading: false})
    }

    handlePrevClick = async()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a5934cebf2f14ea3a60c00971c3c3c9a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
      this.setState({
        isLoading: true
      })
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        isLoading: false
      })
    }
    handleNextClick = async()=>{
      if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

      }else{
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a5934cebf2f14ea3a60c00971c3c3c9a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({
          isLoading: true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles,
          isLoading: false
        })
      }
    }
  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'>Here is the latest news</h2>
        <div className="row">
        {this.state.isLoading?<Spinner/>:""}
          {!this.state.isLoading && this.state.articles.map((element)=>{
            
            return <div className="col-md-3 mx-4 my-3" key={element.author}>
                <NewsItems titles = {element.title?element.title.slice(0, 45):""} descripiton = {element.description?element.description.slice(0,45):""}
                 imgUrl = {element.urlToImage} newsUrl = {element.url}/>
            </div>})}
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
            {/* <div className="col-md-3 mx-4">
                <NewsItems title = 'Lahore News' descripiton = 'The new news of the lahore is new lahore'/>
            </div>
            <div className="col-md-3 mx-4">
                <NewsItems title = 'Lahore News' descripiton = 'The new news of the lahore is new lahore'/>
            </div> */}
        </div>
      </div>
    )
  }
}
