/* eslint-disable array-callback-return */
import React from "react";

export default function Campus_Events(props) {
  const { Event, index } = props;
  return Event.map((element, i) => {
    if (index <= i && i < index + 4) {
      return <div className="card" key={i} style={{ width: element.width }}>
        <p
          style={{
            lineHeight: "30px",
            margin: "10px 30%",
            fontWeight: "bold",
            zIndex: "100",
            width: "65%",
          }}
        >
          {element.title}
        </p>
        <p
          style={{
            fontSize: "0.7rem",
            margin: "0 30%",
            maxHeight: "50%",
            overflow: "hidden",
            width: "65%",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.ullam
          repellendus nobis rem nemo. Natus iste voluptas ab ratione
          cupiditate.Natus iste voluptas ab ratione cupiditate.Natus iste
          voluptas ab ratione cupiditate.
        </p>
        <div className="overlay">
          <div className="slide">
            <button>Notify me</button>
          </div>
          <h2>{element.day}</h2>
          <p className="Date" style={{ marginTop: "-15px", marginLeft: "3px" }}>
            {element.month}
          </p>
        </div>
      </div>;
    }
  })
}
