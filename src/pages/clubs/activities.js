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
        >
          <p
            style={{
              width: "90%",
              overflowY: "scroll",
              height: "200px",
              padding: "20px",
            }}
          >
            Birla Institute of Technology & Science, Pilani (BITS Pilani) is a
            private deemed university in Pilani, India.[12] It focuses primarily
            on higher education and research in engineering and sciences.[13]
            After expansion to a campus in Dubai, it has become the first
            international deemed university, spearheading in science,
            engineering and research with 4 established campuses and 15 academic
            departments.
          </p>
        </div>
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
        >
          <p
            style={{
              width: "90%",
              overflowY: "scroll",
              height: "200px",
              padding: "20px",
              WebkitOverflowScrolling: "none",
            }}
          >
            Birla Institute of Technology & Science, Pilani (BITS Pilani) is a
            private deemed university in Pilani, India.[12] It focuses primarily
            on higher education and research in engineering and sciences.[13]
            After expansion to a campus in Dubai, it has become the first
            international deemed university, spearheading in science,
            engineering and research with 4 established campuses and 15 academic
            departments.
          </p>
        </div>
        <img
          src={Svg1}
          alt="knowursucbg2"
          style={{ height: "250px", marginLeft: "-50px", marginTop: "-20px" }}
        />
      </div>
    </div>
  );
}
