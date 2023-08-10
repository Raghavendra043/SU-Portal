import React, { useEffect,useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import './RightNav.css'
import { useRef } from "react";

function Navbar() {
  const [open,setOpen]=useState(false);
  // let menuRef=useRef();
  // useEffect (() => {
  //   function handler(e){
  //     if(!menuRef.current.contains(e.target))
  //     setOpen(false);
  //   }
  
  //   document.addEventListener("click",handler)
  // })

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg  fixed-top py-0 "
        id="main-nav"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <div className="bits-logo">
              <img src={logo} alt="Bits SU" className="bits-logo-img" />
            </div>
          </a>
          <div
            className="collapse navbar-collapse ms-lg-2 pt-2"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" exact>
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
        <div className="hamburger" onClick={()=>setOpen(!open)}  >
          <div className={!open?'line':'cross'} ></div>
          <div className={!open?'line':'cross'} ></div>
          <div className={!open?'line':'cross'} ></div>
        </div>       
        
      </nav>
      <div className="right-nav" >
          <div className={!open?'close':'right-navbar'} >
            <ul> 
                  <li onClick={()=>setOpen(false)} key={1}>
                    <NavLink className="nav-link" to="/about" exact>
                      About Us
                    </NavLink>
                  </li>

                  <li  onClick={()=>setOpen(false)} key={2} >
                    <NavLink className="nav-link" to="/change" exact>
                      Make A Change
                    </NavLink>
                  </li>
                  <li  onClick={()=>setOpen(false)} key={3}>
                    <NavLink className="nav-link" to="/places" exact>
                      Places For You
                    </NavLink>
                  </li>
                  <li onClick={()=>setOpen(false)} key={4}>
                    <NavLink className="nav-link" to="/studentlife" exact>
                      Student Life
                    </NavLink>
                  </li>
                  <li  onClick={()=>setOpen(false)} key={5}>
                    <NavLink className="nav-link" to="/helpandadvice" exact>
                      Help & Advice
                    </NavLink>
                  </li>
                  <li   onClick={()=>setOpen(false)} key={6}>
                    <NavLink className="nav-link" to="/places" exact>
                      General Noticeboard
                    </NavLink>
                  </li>
                  <li  onClick={()=>setOpen(false)} key={7} >
                    <NavLink className="nav-link navbar-login" to="/login" exact>
                      Login
                    </NavLink>
                  </li>
            </ul>
        </div>
      </div>
      
    </div>
  );
}

export default Navbar;
