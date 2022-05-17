import React from 'react'


const NewsItem = (props) => {

 
    let {title, description, imageUrl, newsUrl,author,date, source } = props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}<span className="visually-hidden">unread messages</span></span>
            <img src={!imageUrl?"https://cdn.arstechnica.net/wp-content/uploads/2022/04/psycheTOP-760x380.jpg":imageUrl} style={{height: "10rem"}} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-danger">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  
}

export default NewsItem
