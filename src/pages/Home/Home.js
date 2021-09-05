import React from "react";
import path1 from "../../assets/home/hero/path1.svg";
import heroImg from "../../assets/home/hero/heroImg.svg";
import Campus_Events from "../../components/Home/Campus_Events";
import SU_Initiatives from "../../components/Home/SU_Initiatives";
import "./Home.css";

function Home() {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <img src={path1} alt="path1" style={{ width: "100%" }} />
        <img
          src={heroImg}
          alt=" heroimg"
          style={{ position: "absolute", top: 4, right: 60, width: "50vw" }}
        />

        <div style={{ position: "absolute" }}>
          <img src="" alt="" />
          <div></div>
          <div></div>
        </div>
      </div>

        {/* Campus Events */}
      
      <div>
        <p className="header">Campus Events</p>
        <div className="container">
          <Campus_Events title="Campus Event Headline" width="25vw" date="21" month="Dec"/>
          <Campus_Events title="Campus Event Headline" width="30vw" date="18" month="Sept"/>
          <Campus_Events title="Campus Event Headline" width="30vw" date="25" month="August"/>
          <Campus_Events title="Campus Event Headline" width="25vw" date="01" month="Sept"/>
          <a href="#" className="more">
            <i class="fa fa-lg fa-chevron-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>

        {/* SU Initiaves */}
      
      <div>
        <p className="header">SU Initiatives</p>
        <div className="container">
          <SU_Initiatives />
          <SU_Initiatives />
          <SU_Initiatives />
          <a href="#" className="more">
            <i class="fa fa-lg fa-chevron-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>

        {/* Built By */}

      <div>
        <p className="header">Built By</p>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <p>SUC LOGO</p>
          <button className="contri-btn">Contributors</button>
        </div>
      </div>
    </div>
  );
}

export default Home;