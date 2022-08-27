
import { NewsCard, PageNav } from "../components";
import { useSelector } from 'react-redux';




export const GeneralPage = () => {
  
  

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


    <PageNav category = {"general"}/>
      
    </>
  )
}
