import React from 'react';
import { SearchCard } from '../components/SearchCard';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { useEffect } from 'react';
import { useState } from 'react';
import { getNewsByQuery } from '../../store/slices/search/thunks';
import { PageNav } from '../components/PageNav';
import  { FootBar } from '../../ui/components/FootBar';

export const SearchPage = () => {
  
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  let [hasQuery, sethasQuery] = useState(false);
  let [queryValue,setqueryValue] = useState(null);

  useEffect(() => {           // Setea en false si he ha hecho alguna busqueda 
    sethasQuery( false );
  }, [])
  
  useEffect(() => {
    dispatch( getNewsByQuery(1, queryValue));
  }, [queryValue, dispatch])
  
  
  const onSubmit = (data) => {

    document.getElementById('inputQuery').value = "";
    setqueryValue(data.query);
    sethasQuery(true );
  };

  //console.log(queryValue);
  const { news } = useSelector( state => state.searchNews); 
  
  return (
    <>
      <nav className="navbar navbar-light bg-light w-100 d-flex justify-content-center">
        <form className="form-inline" onSubmit={handleSubmit(onSubmit)} >
          <div className='d-flex'>
            <input 
                className="form-control" 
                placeholder="Search" 
                aria-label="Search"
                id='inputQuery' 
                type="search"
                {...register("query")} 
            />
            <span className='d-flex p-1'></span>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </div>
        </form>
      </nav>

      {
        (hasQuery)
          ?  <div className="row row-col-1 row-col-sm-1 row-col-md-2 row-col-lg-3 px-2 d-flex justify-content-center animate__animated animate__fadeIn">       
              {
                news.map( (news,index) => (
                  
                  <SearchCard  
                    key={index}
                    {...news}
                    
                  /> 
                ))
              }
            </div>
          : <></>
      }

      {
        (hasQuery)
          ? <PageNav query = {queryValue}/> 
              
          : <></>
      }

{
        (hasQuery)
          ? <FootBar query = {queryValue}/> 
              
          : <></>
      }

    </>
  )
}
