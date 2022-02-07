/* eslint-disable no-lone-blocks */
import React from "react";
import { useState } from "react";
import image from "./images/clubimage.png";
import "./clubname.css";
import { dota } from "./data";
export default function Clubname({name, about}) {

  const [subscribe, setSubscribe] = useState(false);
  {
    var display2 = subscribe ? "block" : "none";
  }
  {
    var display1 = subscribe ? "none" : "block";
  }
  const subscribefun = () => {
    setSubscribe(true);
  };
  const notsubscribefun = () => {
    setSubscribe(false);
  };
  return (
    <>
      <div>
        <img src={image} alt="" srcset="" className="image" />
      </div>
      <div className="mobile">
        <div>
          <img src={dota.Name.logo} alt="" srcset="" className="clublogo" />
        </div>
        <div className="clubname" style={{ display: "flex" }}>
          <div>{name}</div>
          <i
            class="fa fa-bell-o bell"
            aria-hidden="true"
            style={{
              marginLeft: "30px",
              display: `${display1}`,
              cursor: "pointer",
            }}
            onClick={subscribefun}
          ></i>
          <i
            class="fa fa-bell bell"
            aria-hidden="true"
            style={{
              marginLeft: "30px",
              display: `${display2}`,

              cursor: "pointer",
            }}
            onClick={notsubscribefun}
          ></i>
        </div>
      </div>
      <div className="club_aboutus">
        <h5>About us</h5>
        <p>{about}</p>
      </div>
    </>
  );
}
