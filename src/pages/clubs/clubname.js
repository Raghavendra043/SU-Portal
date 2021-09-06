import React from "react";
import image from "./images/clubimage.png";
import "./clubname.css";
// import clublogo from "./images/Dota logo-01.png";
import { dota } from "./data";
export default function clubname() {
  return (
    <>
      <div>
        <img src={image} alt="" srcset="" className="image" />
      </div>
      <div>
        <img src={dota.Name.logo} alt="" srcset="" className="clublogo" />
      </div>
      <div className="clubname">{dota.Name.name}</div>
      <div className="club_aboutus">
        <h5>{dota.Name.aboutHeading}</h5>
        <p>{dota.Name.aboutPara}</p>
      </div>
    </>
  );
}
