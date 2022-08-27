


export const AboutCard = () => {
  
  const article = JSON.parse(localStorage.getItem('article'));
  
  return (
    <>
   
      <div className='card mt-5 w-100'>
        <div className='d-flex justify-content-center pt-5'>
          <img className="card-img-top w-50" src={ article.urlToImage } alt = { article.title } />
        </div>
        <div className="card-body">
          <h5 className="card-title"> { article.title } </h5>
          <h6 className="card-subtitle mb-2 text-muted"> { article.publishedAt } </h6>
          <p className="card-text display-block"> { article.content } </p>
          
        </div>
      </div>
    
    </>
  )
}
