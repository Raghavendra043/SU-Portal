import React from "react";
import "./outlet.css";

export default function revoutlet(props) {
  return (
    <div>
      <div
        className="revoutletouterbox"
        style={{ backgroundColor: `${props.fooddata.backcolor}` }}
      >
        <div
          className="revoutletleftbox"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "200px",
            alignItems: "flex-end",
          }}
        >
          <h1>{props.fooddata.name}</h1>
          <p style={{ width: "90%", fontSize: "10px" }}>
            {props.fooddata.content}
          </p>
        </div>
        <div className="revoutletrightbox">
          <img src={props.fooddata.svg} alt="" className="revoutletimg" />
        </div>
      </div>
    </div>
  );
}
