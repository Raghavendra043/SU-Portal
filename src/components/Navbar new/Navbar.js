import React, {useEffect} from 'react'
import  './Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';

function Navbar() {

    useEffect(() => {
        
        const handleScroll = () =>{
                var navbar = document.getElementsByClassName('navbar');
                const size = window.scrollY > 10;
                const isWhite = navbar[0].classList.contains('bg-light');
                if(size && !isWhite){
                    navbar[0].classList.add('bg-light');
                }
                else if (window.scrollY <= 10) {
                    navbar[0].classList.remove('bg-light');
                }
        }
        
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll',handleScroll)
        }

    },[]);

    
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" id='main-nav'>
                <div class="container nav-container">
                    <a class="navbar-brand" href="/">
                        <div className='bits-logo'>
                            <img src={logo} alt='Bits SU' className='bits-logo-img'/>
                            BPHC SU
                        </div>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="/" exact>
                                        Home
                                    </NavLink>
                                </li>

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
                                        Places To Visit
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
                                        General Notice Board
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact" exact>
                                        Contact Us
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
