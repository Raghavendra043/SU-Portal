import React from "react";
import Svg1 from "./clubactivites.svg";
export default function activities() {
  return (
    <div>
      <h1
        id="events_heading"
        style={{
          fontFamily: "Fredericka the Great",
          width: "70%",
          margin: "auto",
          marginTop: "50px",
        }}
      >
        Current Activities
      </h1>
      <div
        style={{
          display: "flex",
          marginLeft: "20vw",
          width: "70%",
        }}
      >
        <div
          style={{
            width: "80%",
            boxShadow: "3px 6px 20px #00000029",
            height: "200px",
            borderRadius: "20px",
          }}
        ></div>
        <img
          src={Svg1}
          alt="knowursucbg2"
          style={{ height: "250px", marginLeft: "-50px", marginTop: "-20px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          marginLeft: "50px",
          width: "70%",
          marginLeft: "20vw",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            width: "90%",
            boxShadow: "3px 6px 20px #00000029",
            height: "200px",
            borderRadius: "20px",
          }}
        ></div>
        <img
          src={Svg1}
          alt="knowursucbg2"
          style={{ height: "250px", marginLeft: "-50px", marginTop: "-20px" }}
        />
      </div>
    </div>
  );
}
