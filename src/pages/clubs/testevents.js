import React from "react";
import { useState } from "react";
import Media from "react-media";
import Events from "./Events";


// const Event = [
//     {
//       title: "Inter Bhawan Sports",
//       month: "January",
//       day: "12",
//       sub:"We are ecstatic to announce the first sports activity of the current academic year -INTER-BHAWAN SPORTS TOURNAMENT 2022. The registrations are now open for everyone, including HD & FD students. The schedule will be announced soon."
//     },
//     {
//       title: "TechWeek 2022",
//       month: "January",
//       day: "20",
//       sub:"We would also like to announce that due to the escalation in the number of COVID cases, the TechWeek will be organized completely online from 24th to 30th January.Stay healthy, stay safe"
//     },
//     {
//       title: "Economics Association Inductions",
//       month: "January",
//       day: "14",
//       sub:"We are ecstatic to announce the first sports activity of the current academic year -INTER-BHAWAN SPORTS TOURNAMENT 2022."
//     },
//     {
//       title: "Campus Arrival",
//       month: "January",
//       day: "18",
//       sub:"We are ecstatic to announce the first sports activity of the current academic year -INTER-BHAWAN SPORTS TOURNAMENT 2022."
//     },
//     {
//       title: "Comedy Club Inductions",
//       month: "January",
//       day: "16",
//       sub:"We are ecstatic to announce the first sports activity of the current academic year -INTER-BHAWAN SPORTS TOURNAMENT 2022."
//     },
//   ];
  
export default function Testevents ({Event}){
    const [index, setIndex] = useState(0);
    return(<div>
        <p className="header">Our Events</p>
        <div className="container">
          <button
            disabled={index <= 0 ? true : false}
            className="more more-left"
            style={{ left: "5vw" }}
            onClick={() => {
              setIndex(index - 4);
            }}
          >
            <i className="fa fa-lg fa-chevron-left" aria-hidden="true"></i>
          </button>
          <Media query="(max-width: 1000px)">
            {(matches) => {
              return matches ? (
                <Events Event={Event} index={index} temp={[0, 1]} />
              ) : (
                <Events Event={Event} index={index} temp={[50, 4]} />
              );
            }}
          </Media>

          <button
            disabled={
              index === 4 * (Math.ceil(Event.length / 4) - 1) ? true : false
            }
            className="more"
            style={{ right: "5vw" }}
            onClick={() => {
              setIndex(index + 4);
            }}
          >
            <i className="fa fa-lg fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>)
}