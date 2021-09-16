import React, {useEffect} from 'react'
import  './Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';

function Navbar() {

    useEffect(() => {
        
        const handleScroll = () =>{
                var navbar = document.getElementsByClassName('navbar');
                const size = window.scrollY > 10;
                const isWhite = navbar[0].classList.contains('nav-des-free');
                if(size && !isWhite){
                    navbar[0].classList.remove('nav-des-top');
                    navbar[0].classList.add('nav-des-free');
                }
                else if (window.scrollY <= 10) {
                    navbar[0].classList.remove('nav-des-free');
                    navbar[0].classList.add('nav-des-top');
                }
        }
        
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll',handleScroll)
        }

    },[]);

    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-0" id='main-nav'>
                <div className='container-fluid'>
                    <a className="navbar-brand mx-lg-5 mt-lg-1" href="/">
                        <div className='bits-logo'>
                            <img src={logo} alt='Bits SU' className='bits-logo-img'/>
                        </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-lg-2 pt-2" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto  navbar-right">

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about" exact>
                                        About
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/change" exact>
                                        Make A Change
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/places" exact>
                                        Places For You
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/studentlife" exact>
                                        Student Life
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/helpandadvice" exact>
                                        Help & Advice
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/notice" exact>
                                        General Noticeboard
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link navbar-login" to="/studentlife" exact>
                                        Login
                                    </NavLink>
                                </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
