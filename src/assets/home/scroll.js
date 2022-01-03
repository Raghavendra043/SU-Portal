/* eslint-disable no-restricted-globals */

import { red } from "@material-ui/core/colors";
import React from "react";
import ReactDOM from "react-dom";
import Typewriter from "typewriter-effect";
import './scrol.css'
export default function Typing1() {

  
  return(
    <>
      <div 
          style={{
            font: "normal normal 800 30px/49px Montserrat",
            letterSpacing: "0px",
            color: "#FFFFFF",
            opacity: "1",
            paddingRight: 10,
          }}
          >
          <h1><span class="text_1">Let's <span style={{font:"normal normal 800 30px/49px Montserrat", color:"#DF456A", fontsize: "30px"}}>Innovate</span> Together !</span>
          <span class="text_2">Let's <span style={{font:"normal normal 800 30px/49px Montserrat", color:"#DF456A", fontsize: "30px"}}>Acheive</span> Together !</span>
          {/* <span class="text_3">Let's <span style={{font:"normal normal 800 30px/49px Montserrat", color:"#DF456A", fontsize: "30px"}}>Lead</span> Together</span> */}
          </h1>
       </div>
    </>
  );
}