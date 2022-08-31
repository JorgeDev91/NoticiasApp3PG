import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../store/slices/news/thunks';

export const PageNav = ( {category} ) => {

    const { pageLength } = useSelector( state => state.newsCategory); 
    
    let [page, setpage] = useState(1);
    
    const handleNextPage = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        (pageLength < 10)
        ? setpage( page + 0)
        : setpage( page + 1)

    }
    
    const handlePrevPage = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        ( page === 1)
        ? setpage( page - 0 )
        : setpage( page - 1 )
        
    }
    
    const dispatch = useDispatch();      // se utiliza siempre que se requiera una acción
    
    
    useEffect(() => {
        
        dispatch( getNews(page, category));  // se llama al thunk para la petición a la api de noticias

    }, [page, category, dispatch]);

    
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
