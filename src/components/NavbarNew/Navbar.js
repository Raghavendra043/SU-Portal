/* eslint-disable no-unused-vars */
import React, { useEffect,useState,useRef } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import logo from "./logo.png";
import { faBars, faTimes,faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(window.innerWidth < 993);
  const navRef = useRef(null);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsProfileVisible(window.innerWidth < 993);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  //   useEffect(() => {
  //     const handleScroll = () => {
  //       var navbar = document.getElementsByClassName("navbar");
  //       const size = window.scrollY > 10;
  //       const isWhite = navbar[0].classList.contains("nav-des-free");
  //       if (size && !isWhite) {
  //         navbar[0].classList.remove("nav-des-top");
  //         navbar[0].classList.add("nav-des-free");
  //       } else if (window.scrollY <= 10) {
  //         navbar[0].classList.remove("nav-des-free");
  //         navbar[0].classList.add("nav-des-top");
  //       }
  //     };

  //     document.addEventListener("scroll", handleScroll);
  //     return () => {
  //       document.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  //   return (
  // <div>
  //   <nav
  //     className="navbar navbar-expand-lg navbar-dark fixed-top py-0"
  //     id="main-nav"
  //   >
  //     <div className="container-fluid">
  //       <a className="navbar-brand" href="/">
  //         <div className="bits-logo">
  //           <img src={logo} alt="Bits SU" className="bits-logo-img" />
  //         </div>
  //       </a>
  //       <button
  //         className="navbar-toggler"
  //         type="button"
  //         data-bs-toggle="collapse"
  //         data-bs-target="#navbarSupportedContent"
  //         aria-controls="navbarSupportedContent"
  //         aria-expanded="false"
  //         aria-label="Toggle navigation"
  //       >
  //         <span className="navbar-toggler-icon"></span>
  //       </button>
  //       <div
  //         className="collapse navbar-collapse ms-lg-2 pt-2"
  //         id="navbarSupportedContent"
  //       >
  //         <ul className="navbar-nav ml-auto ">
  //           <li className="nav-item">
  //             <NavLink className="nav-link" to="/about" exact>
  //               About Us
  //             </NavLink>
  //           </li>

  return (
    <div ref={navRef}>
      {isNavOpen && <div className="background-overlay" onClick={handleToggleNav} />}
      <nav
        className="navbar navbar-expand-lg  fixed-top py-0 nav-des-free"
        id="main-nav"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <div className="bits-logo">
              <img src={logo} alt="Bits SU" className="bits-logo-img" />
            </div>
          </a>
          <div className="d-flex align-items-center">
          {isProfileVisible && (
            <div className="user-icon ml-5" style={{ fontSize: "24px"}}> {/* Increase the font size for the user icon */}
              <FontAwesomeIcon icon={faUser} />
            </div>
          )}
      
          <button
            className={`navbar-toggler ${isNavOpen ? "active" : ""} `}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleToggleNav}
            style={{ fontSize: "28px" }}
          >
            
        
           <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} />
          </button>
          </div>
          
          <div
              className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}  navbar-side-collapse-right`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item">
                <NavLink className="nav-link topper" to="/about" exact>
                  About Us
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
                {/* <NavLink className="nav-link" to="/notice" exact> */}
                <NavLink className="nav-link" to="/places" exact>
                  General Noticeboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navbar-login" to="/login" exact>
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    //   </nav>
    // </div>
  );
}

export default Navbar;
