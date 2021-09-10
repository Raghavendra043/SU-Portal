import React from "react";
import path1 from "../../assets/home/hero/path1.svg";
import heroImg from "../../assets/home/hero/heroImg.svg";
import Text from "./Text";

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

        <div style={{ position: "absolute", top: 0 }}>
          <Text />
          <div
            style={{
              width: "340px",
              height: "49px",
              textAlign: "left",
              font: "normal normal 800 40px/49px Montserrat",
              letterSpacing: "0px",
              color: "#FFFFFF",
              opacity: "1",
            }}
          >
            Students' Union
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                font: "normal normal 800 32px/39px Montserrat",
                letterSpacing: "0px",
                color: "#FFFFFF",
                opacity: "1",
              }}
            >
              Let's
            </div>
            <div
              style={{
                font: "normal normal 800 40px/49px Montserrat",
                letterSpacing: "0.16px",
                color: "#DF456A",
                opacity: "1",
              }}
            >
              Innovate
            </div>
            <div
              style={{
                font: "normal normal 800 32px/39px Montserrat",
                letterSpacing: "0px",
                color: "#FFFFFF",
                opacity: "1",
              }}
            >
              together
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
