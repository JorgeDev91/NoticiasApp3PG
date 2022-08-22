import  onuImg from '../../assets/imagenes/noticiasONU.jpg'

export const AboutCard = () => {
  return (
    <>
   
      <div className='card mt-5 w-100'>
        <div className='d-flex justify-content-center pt-5'>
          <img className="card-img-top w-50" src={onuImg} alt="News" />
        </div>
        <div className="card-body">
          <h5 className="card-title">Título de la noticia</h5>
          <h6 className="card-subtitle mb-2 text-muted">fecha</h6>
          <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non enim recusandae, facere esse necessitatibus temporibus libero quibusdam culpa amet cum architecto eos vel ab distinctio vitae odio repellat est asperiores! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa distinctio illo perspiciatis, vero beatae possimus, cumque ex quod tempore perferendis enim similique officiis consequuntur molestias? Qui nobis cumque atque animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sit deserunt error nam magnam architecto. Consequatur tempora a modi quidem dolor. Sapiente quibusdam voluptatibus aliquam repudiandae repellendus optio exercitationem quo!</p>
          
        </div>
      </div>
    
    </>
  )
}
