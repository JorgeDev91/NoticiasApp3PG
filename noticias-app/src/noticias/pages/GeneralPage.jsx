import { useEffect } from "react";
import { NewsCard } from "../components";
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from "../../store/slices/news/thunks";



export const GeneralPage = () => {

   const dispatch = useDispatch();      // se utiliza siempre que se requiera una acción
  
  useEffect(() => {
    dispatch( getNews(4, 'general'));  // se llama al thunk para la petición a la api de noticias
  }, [])
  
  const { news={} } = useSelector( state => state.newsCategory);  //  state del store!
  

  return (
    <>
      
      <div className="row row-col-1 row-col-sm-1 row-col-md-2 row-col-lg-3 px-2 d-flex justify-content-center animate__animated animate__fadeIn">
        
        {
          news.map( (news,index) => (
            
            <NewsCard  
              key={index}
              {...news}
              
            /> 
          ))
        }
        
       
      </div>
    
    </>
  )
}
