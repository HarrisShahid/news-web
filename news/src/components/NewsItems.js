import React, { Component } from 'react'
import img from './back.png';

export default class NewsItems extends Component {

  render() {
    let {titles, descripiton, imgUrl, newsUrl, names} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
        <img src={imgUrl?imgUrl:"https://www.aljazeera.com/wp-content/uploads/2024/12/AP24347134143212-1735100055.jpg?resize=1920%2C1440"} className="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title">{titles}...</h5>
            <p className="card-text">{descripiton}</p>
            <a rel='noreferrer' href={newsUrl} target = "_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}
