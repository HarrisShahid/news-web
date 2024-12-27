import React, { Component } from 'react'

import NewsItems from './NewsItems';
import img from './back.png';

export default class News extends Component {
  articles = [
    
    ]
    constructor(){
        super();
        this.state = {
          isLoading: false,
          articles: this.articles
        }
    }

   async componentDidMount(){
      let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=a5934cebf2f14ea3a60c00971c3c3c9a"
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles: parsedData.articles})
    }

  render() {
    return (
      <div className='container my-3'>
        <h3>Here is the latest news</h3>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-3 mx-4 my-3" key={element.author}>
                <NewsItems titles = {element.title?element.title.slice(0, 45):""} descripiton = {element.description?element.description.slice(0,45):""}
                 imgUrl = {element.urlToImage} newsUrl = {element.url}/>
            </div>})}
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
