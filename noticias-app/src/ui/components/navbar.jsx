import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import '../styles/navbar.css';
import { LogInButton } from './LogInButton';
import { LogOutButton } from './LogOutButton';


export const Navbar = () => {

    const { status } = useSelector(state => state.auth); // traigo el status para saber si está logeado o no y mostrar el boton de login o logout
    const navigate = useNavigate();

    const onSearch = () => {
        navigate('/search', { replace: true});
    }

    return (
        
        <nav className="navbar navbar-expand-lg d-flex justify-content-center justify-content-sm-center justify-content-md-center navbar-light bg-light px-3" >
            <div >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                            <div className='flex-lg-colum col-lg-2 pt-3 pt-sm-2 pt-md-2'>
                                <form className="d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start">
                                    <button 
                                        className="btn btn-outline-secondary material-symbols-outlined pt-sm-3 pt-md-3 pt-lg-2"
                                        onClick={onSearch}
                                    >Search</button>
                                </form>
                            </div>

                        <div className='flex-lg-colum col-lg-7 text-center d-flex justify-content-center'>
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
                                <li className="nav-item">
                                    <NavLink className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }`} to={'/general'}> General</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }`} to={'/business'}>Business</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }`}to={'/science'}>Science</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }`} to={'/technology'} >Technology</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }`} to={'/sports'}>Sports</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }`}to={'/health'}>Health</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }`} to={'/entertainment'}>Entertainment</NavLink>
                                </li>
                            </ul>
                        </div>
                        
                        <div className='flex-lg-colum col-lg-3'>
                            <form className="d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-end">
                                {
                                    (status === 'authenticated')
                                        ? <LogOutButton />   
                                        : <LogInButton />            
                                }
                            </form>
                        </div>
                </div>
            
        </nav>
        
    )
}