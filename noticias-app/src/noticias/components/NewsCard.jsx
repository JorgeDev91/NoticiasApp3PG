import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/NewsCard.css';


export const NewsCard = (article) => {
  

  
  return (
    <>
      
      <div className='card mt-5 movile tablet desktop'>
        <img className="card-img-top pt-3" src={article.urlToImage}  alt={article.title}  />
        <div className="card-body">
          <h5 className="card-title"> {article.title} </h5>
          <h6 className="card-subtitle mb-2 text-muted"> {article.publishedAt}  </h6>
          <p className="card-text"> {article.content} </p>
          <NavLink to={'/about'} className="card-link d-flex justify-content-center">Read more...</NavLink>
        </div>
      </div>
    
    </>
  )
}
