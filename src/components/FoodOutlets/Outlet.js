import React from "react";
import "./outlet.css";

export default function Outlet(props) {
  return (
    <div>
      <div
        className="outletouterbox"
        style={{ backgroundColor: `${props.fooddata.backcolor}` }}
      >
        <div
          className="outletleftbox"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "200px",
          }}
        >
          <h1>{props.fooddata.name}</h1>
          <p style={{ width: "90%", fontSize: "10px" }}>
            {props.fooddata.content}
          </p>
        </div>
        <div className="outletrightbox">
          <img
            src={props.fooddata.svg}
            alt=""
            className="outletimg"
            id={props.id}
          />
        </div>
      </div>
    </div>
  );
}
