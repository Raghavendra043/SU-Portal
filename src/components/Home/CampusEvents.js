/* eslint-disable array-callback-return */
import React from "react";

export default function Campus_Events(props) {
  const { Event, index, temp } = props;
  const length = Event.length - index;
  let card_width = 400;
  return Event.map((element, i) => {
    if (index <= i && i < index + temp[1]) {
      i == index || i == index + 3 ? card_width = 400 + temp[0] : (length === 3 && i === index + 2 ? card_width = 600 : card_width = 400);
      return <div className="card" key={i} style={{ width: card_width}}>
        <p
          style={{
            lineHeight: "30px",
            margin: "10px 30%",
            fontWeight: "bold",
            zIndex: "100",
            width: "50%",
          }}
        >
          {element.title}
        </p>
        <p
          style={{
            fontSize: "0.7rem",
            margin: "0 30%",
            maxHeight: "70%",
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
