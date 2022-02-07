import React from "react";
import Svg1 from "./clubactivites.svg";
export default function activities({current}) {
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
        className="activitydiv"
        style={{
          display: "flex",
        }}
      >
        <div
          className="activityparadiv"
          style={{
            width: "80%",
            boxShadow: "3px 6px 20px #00000029",

            borderRadius: "20px",
          }}
        >
          <p
            className="activitypara"
            style={{
              width: "90%",
              overflowY: "scroll",
              fontSize:"1.35vw",
              padding: "20px",
            }}
          >
            {current[0]}
          </p>
        </div>
        <img
          className="activityimage"
          src={Svg1}
          alt="knowursucbg2"
          style={{ marginLeft: "-50px", marginTop: "-20px" }}
        />
      </div>
      <div
        className="activitydiv"
        style={{
          display: "flex",

          marginTop: "50px",
        }}
      >
        <div
          className="activityparadiv"
          style={{
            width: "90%",
            boxShadow: "3px 6px 20px #00000029",

            borderRadius: "20px",
          }}
        >
          <p
            className="activitypara"
            style={{
              width: "90%",
              overflowY: "scroll",
              fontSize:"1.35vw",
              padding: "20px",
              WebkitOverflowScrolling: "none",
            }}
          >
            {current[1]}
          </p>
        </div>
        <img
          className="activityimage"
          src={Svg1}
          alt="knowursucbg2"
          style={{ marginLeft: "-50px", marginTop: "-20px" }}
        />
      </div>
    </div>
  );
}
