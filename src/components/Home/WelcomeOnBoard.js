import React from 'react';
import "./WelcomeOnBoard.css";
import bg1 from "../../assets/home/WelcomeOnBoard/bg1.svg";
import bg2 from "../../assets/home/WelcomeOnBoard/bg2.svg";


export default function WelcomeOnBoard() {
  return (
    <>
      <div className="welcome-first">
        <div className="welcome-container">
          <img src={bg2} alt="bg2" style={{ width: "100%" }} />
          <img src={bg1} alt="bg1" style={{ width: "100%", position: "absolute", top: "0.8vh" }} />
          <h1 className="welcome-title">Welcome On Board</h1>
          <h2 className="welcome-subtitle"><b>BITS, It's Magic !</b></h2>
          <img className="image1" alt="" />
          <img className="image2" alt="" />

          <p className="welcome-text">
          <b>Birla Institute of Technology and Science, Pilani - Hyderabad Campus</b> is one of the leading engineering and scientific institutes of higher learning in India. The newest campus of the BITS family is equipped with eye-catching lush floral greenery, accompanied by state-of-the-art infrastructure constituting modern laboratories, well-furnished classrooms, a student activity center and many more essential establishments. Some of the brightest minds from all over our country undertake their tutelage here, exposing themselves to a vibrant campus life along with a bundle of extracurricular activities that ensures the holistic development of their personalities. The culture of freedom to explore various domains and walks of life at BITS enables students to become the global leaders of the next generation.
          </p>
        </div>
      </div>
    </>
  )
}
