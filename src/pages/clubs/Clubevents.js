import React, { useState } from "react";
import "./clubevents.css";
import svg1 from "./images/clipart-smooth_zigzag.jpg";
import svg2 from "./images/clipart-sharp_zigzag.png";
import { dota } from "./data";
export default function Clubevents() {
  const [index, setIndex] = useState(0);
  return (
    <div id="events">
      <h1 id="events_heading">Our Events</h1>
      <div className="box">
        {dota.events.map(event => {
          const leftEvent = `events_main_left_${event.id}`;
          const rightevent = `events_main_right_${event.id}`;
          const rightbutton = `events_button_${event.id}`;
          return (
            <div
              className="events_main"
              id={event.id}
              onMouseOver={() => {
                let left = document.getElementById(
                  `events_main_left_${event.id}`
                );
                let right = document.getElementById(
                  `events_main_right_${event.id}`
                );
                let right_button = document.getElementById(
                  `events_button_${event.id}`
                );
                let right_para = right.lastElementChild;
                console.log(right_para);
                let right_heading = right.firstChild;
                right_para.style.display = "none";
                right_button.style.display = "block";
                right_heading.style.color = "white";
                left.style.justifyContent = "center";
                // right.style.clipPath="circle(140.5% at 0 0)"
                right.style.animation = "back 1s forwards";
                right.style.backgroundColor = `${event.color}`;
              }}
              onMouseLeave={() => {
                let left = document.getElementById(
                  `events_main_left_${event.id}`
                );
                let right = document.getElementById(
                  `events_main_right_${event.id}`
                );
                let right_button = document.getElementById(
                  `events_button_${event.id}`
                );
                let right_para = right.lastElementChild;
                let right_heading = right.firstChild;
                right_para.style.display = "block";
                right_button.style.display = "none";
                right_heading.style.color = "#2D7DD2";
                right.style.backgroundColor = "white";
                right.style.animation = "none";
                left.style.justifyContent = "flex-start";
              }}
            >
              <div className="events_left" id={leftEvent}>
                <h1>{event.date}</h1>
                <h4>{event.month}</h4>
              </div>
              <div className="events_right" id={rightevent}>
                <h1>{event.heading}</h1>
                <button className="event_button" id={rightbutton}>
                  Notify me
                </button>
                <p>{event.para}</p>
              </div>
            </div>
          );
        })}
      </div>
      <img src={svg1} alt="" srcset="" id="svg1" />
      <img src={svg2} alt="" srcset="" id="svg2" />
    </div>
  );
}
