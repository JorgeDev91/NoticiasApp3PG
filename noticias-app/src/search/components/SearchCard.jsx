import React from 'react'
import { NavLink } from 'react-router-dom';

import '../components/searchCardStyles.css';

export const SearchCard = (article) => {

    const handleArticle = () =>{
      localStorage.removeItem('article');
      localStorage.setItem('article', JSON.stringify(article));
    }

    return (
        <>
          
          <div className='card mt-5 movile tablet desktop'>
            <img className="card-img-top pt-3" src={article.urlToImage}  alt={article.title}  />
            <div className="card-body">
              <h5 className="card-title"> {article.title} </h5>
              <h6 className="card-subtitle mb-2 text-muted"> {article.publishedAt}  </h6>
              <p className="card-text"> {article.content} </p>
              <NavLink onClick={ handleArticle } to={'/about'} className="card-link d-flex justify-content-center">Read more...</NavLink>
            </div>
          </div>
        
        </>
      )
}
