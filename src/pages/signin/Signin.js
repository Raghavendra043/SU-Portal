import React from "react";
import "./signin.css";
import Gogglesvg from "../../assets/images/Group52.svg";
import logo from "../../assets/images/Group 51.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Signin() {
  return (
    <div
      className="mainbox"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Link to="/">
        <img src={logo} alt="" width="300px" style={{ cursor: "pointer" }} />
      </Link>
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
      <div style={{ display: "flex", marginTop: "13vh" }}>
        <div
          className="leftblock"
          style={{
            color: "white",
            fontSize: "20vw",
            minWidth: "43%",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "4vw",
              fontWeight: "bold",
              marginLeft: "90px",
              marginTop: "10px",
            }}
          >
            Bits Pilani
          </h1>
          <h1
            style={{
              color: "white",
              fontSize: "4vw",
              fontWeight: "bold",
              marginLeft: "90px",
              marginTop: "15px",
            }}
          >
            Hyderabad
          </h1>
          <h1
            style={{
              color: "white",
              fontSize: "4vw",
              fontWeight: "bold",
              marginLeft: "90px",
              marginTop: "15px",
            }}
          >
            Students' Union
          </h1>
        </div>
        <div className="rightblock">
          <img
            src={Gogglesvg}
            alt=""
            srcset=""
            style={{
              width: "15vw",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
}
