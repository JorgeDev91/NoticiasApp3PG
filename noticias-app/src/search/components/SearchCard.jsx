import React from 'react'
import { NavLink } from 'react-router-dom';

import '../components/searchCardStyles.css';

export const SearchCard = () => {

    const handleArticle = () =>{

    }

    return (
        <>
          
          <div className='card mt-5 movile tablet desktop'>
            <img className="card-img-top pt-3" src=''  alt='alternate'  />
            <div className="card-body">
              <h5 className="card-title"> Titulo </h5>
              <h6 className="card-subtitle mb-2 text-muted"> fecha  </h6>
              <p className="card-text"> content </p>
              <NavLink onClick={ handleArticle } to={'/about'} className="card-link d-flex justify-content-center">Read more...</NavLink>
            </div>
          </div>
        
        </>
      )
}
