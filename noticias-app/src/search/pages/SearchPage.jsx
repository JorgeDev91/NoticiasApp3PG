import React from 'react'
import { SearchCard } from '../components/SearchCard'


export const SearchPage = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light w-100 d-flex justify-content-center">
        <form className="form-inline ">
          <div className='d-flex'>
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            <span className='d-flex p-1'></span>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </div>
        </form>
      </nav>

      <div className="row row-col-1 row-col-sm-1 row-col-md-2 row-col-lg-3 px-2 animate__animated animate__zoomIn">

        <div>
          <SearchCard /> 
        </div>

      </div>    
    </>
  )
}
