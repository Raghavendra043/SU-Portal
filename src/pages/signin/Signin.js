import React from "react";
import "./signin.css";
import Gogglesvg from "../../assets/images/Group52.svg";
import logo from "../../assets/images/Group 51.svg";
export default function Signin() {
  return (
    <div
      className="mainbox"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <img src={logo} alt="" width="300px" />
      <h1
        style={{
          display: "inline-block",
          margin: "auto",
          color: "white",
          fontSize: "50px",
          marginTop: "-10px",
          fontWeight: "bold",
        }}
      >
        Sign in
      </h1>
      <div style={{ display: "flex", marginTop: "14vh" }}>
        <div
          className="leftblock"
          style={{
            color: "white",
            fontSize: "20vw",
            maxWidth: "43%",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "4vw",
              fontWeight: "bold",
              marginLeft: "90px",
            }}
          >
            BITS PILANI HYDERABAD STUDENT'S UNION
          </h1>
        </div>
        <div className="rightblock">
          <img
            src={Gogglesvg}
            alt=""
            srcset=""
            style={{
              width: "15vw",
            }}
          />
        </div>
      </div>
    </div>
  );
}
