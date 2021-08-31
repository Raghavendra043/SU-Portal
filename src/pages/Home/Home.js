import React from "react";
import path1 from "../../assets/home/hero/path1.svg";
import heroImg from "../../assets/home/hero/heroImg.svg";

function Home() {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <img src={path1} alt="path1" style={{ width: "100%" }} />
        <img
          src={heroImg}
          alt=" heroimg"
          style={{ position: "absolute", top: 46, right: 60 }}
        />

        <div style={{ position: "absolute" }}>
          <img src="" alt="" />
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
