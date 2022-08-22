import { NavLink, useNavigate } from 'react-router-dom';

import '../styles/navbar.css';

export const Navbar = () => {

    const navigate = useNavigate();

    const onLogin = () => {
        navigate('/login', { replace: true});
    }

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
                                    <input type="text" className="form-control form-contol-sm" id="searchInput" aria-describedby="searchInput" placeholder="Search" />
                                    <span className='d-flex p-1'></span>

                                    <button 
                                        className="btn btn-outline-secondary material-symbols-outlined"
                                        onClick={onSearch}
                                    >Search</button>
                                </form>
                            </div>

                        <div className='flex-lg-colum col-lg-8 text-center d-flex justify-content-center'>
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
                        
                        <div className='flex-lg-colum col-lg-2'>
                            <form className="d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-end">
                                <button 
                                    className="btn btn-outline-secondary my-2 my-sm-0 mr-3"
                                    onClick={onLogin}
                                >Login</button>
                            </form>
                        </div>
                </div>
            
        </nav>
        
    )
}