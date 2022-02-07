import React, { useState } from "react";
import "./clubevents.css";
import svg1 from "./images/clipart-smooth_zigzag.jpg";
import svg2 from "./images/clipart-sharp_zigzag.png";
import { dota } from "./data";

const color = ["rgb(218, 37, 29)",
"#45b43b",
" #2d7dd2",
"#ffc300",
"#2d7dd2",
"#ffc300",
"rgb(218, 37, 29)",
"#45b43b",
"#45b43b",
"rgb(218, 37, 29)",
"rgb(218, 37, 29)",]
export default function Campus_Events({clubindex, events}) {
  const index  = clubindex;
  console.log(index);
  return (
    <div id="events">
      <div className="box">
        {events.map((event, i) => {
          const leftEvent = `events_main_left_${event.id}`;
          const rightevent = `events_main_right_${event.id}`;
          const rightbutton = `events_button_${event.id}`;
          if (index <= i && i < index + 4) {
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

                  let right_heading = right.firstChild;
                  right_para.style.display = "none";
                  right_button.style.display = "block";
                  right_heading.style.color = "white";
                  left.style.justifyContent = "center";

                  right.style.animation = "back 1s forwards";
                  right.style.backgroundColor = `${color[i]}`;
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
                <div
                  className="events_left"
                  id={leftEvent}
                  style={{ backgroundColor: `${color[i]}` }}
                >
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
          } 
        })}
      </div>
      <img src={svg1} alt="" srcset="" id="svg1" />
      <img src={svg2} alt="" srcset="" id="svg2" />
    </div>
  );
}
