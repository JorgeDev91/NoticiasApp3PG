
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsByQuery } from '../../store/slices/search/thunks';

export const PageNav = ( {query} ) => {
    
    const dispatch = useDispatch();      // se utiliza siempre que se requiera una acción

    const { pageLength } = useSelector( state => state.searchNews); 
    
    let [page, setpage] = useState(1);
    
    const handleNextPage = () => {
        
        (pageLength < 10)
        ? setpage( page + 0)
        : setpage( page + 1)

    }
    
    const handlePrevPage = () => {

        ( page === 1)
        ? setpage( page - 0 )
        : setpage( page - 1 )
        
    }
    
    
    
    useEffect(() => {
        
        dispatch( getNewsByQuery(page, query));  // se llama al thunk para la petición a la api de noticias

    }, [page, query, dispatch]);

    
  return (
    <>
        <div className='container my-4'>
            <div className='row'>
                <div className='col'>
                    <button 
                        className='btn btn-secondary'
                        onClick={ handlePrevPage }
                    > Prev</button>
                </div>
              
                <div className='col d-flex justify-content-end'>
                    <button 
                        className='btn btn-secondary'
                        onClick={ handleNextPage }
                    > Next</button>
                </div>
            </div>
        </div>
    </>
  )
}
