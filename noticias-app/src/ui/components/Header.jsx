
import { useNavigate } from 'react-router-dom';
import '../styles/header.css';

export const Header = () => {
  
  const navigate = useNavigate();

  const onHome = () => {
    navigate('/general',{ replace: true});
  }

  return (
    <div>

      <h1 
        className="d-flex justify-content-center animate__animated animate__fadeIn py-3"
        onClick={onHome}
      >The 3PillarGlobal Times</h1>

    </div>
  )
}
