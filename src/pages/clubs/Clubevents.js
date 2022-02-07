import { React, useState } from "react";
import Clubeventsbox from "./clubeventsbox";
import { dota } from "./data";
export default function Clubevents({events}) {
  const [clubindex, setclubIndex] = useState(0);
  return (
    <>
      <h1 id="events_heading">Our Events</h1>
      <div>
        <div
          className="clubevents"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            disabled={clubindex <= 0 ? true : false}
            className="more more-left"
            style={{ left: "5vw", marginTop: "-96px" }}
            onClick={() => {
              console.log(clubindex);
              setclubIndex(clubindex - 4);
              console.log(clubindex);
            }}
          >
            <i className="fa fa-lg fa-chevron-left" aria-hidden="true"></i>
          </button>

          <Clubeventsbox {...{clubindex, events}} />

          <button
            disabled={
              clubindex === 4 * (Math.ceil(dota.events.length / 4) - 1)
                ? true
                : false
            }
            className="more"
            style={{ right: "5vw", marginTop: "-96px" }}
            onClick={() => {
              console.log(clubindex);
              setclubIndex(clubindex + 4);
            }}
          >
            <i className="fa fa-lg fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </>
  );
}
