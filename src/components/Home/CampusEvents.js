import React from 'react'

export default function Campus_Events(props) {
    return (
        <div className="card" style= {{width: props.width}}>
            <p
                style={{
                  lineHeight: "30px",
                  margin: "10px 30%",
                  fontWeight: "bold",
                  zIndex: "100",
                  width: "65%"
                }}
              >
                {props.title}
              </p>
              <p style={{ fontSize: "0.7rem" , margin:"0 30%", maxHeight: "50%", overflow: "hidden", width: "65%" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.ullam
                repellendus nobis rem nemo. Natus iste voluptas ab ratione
                cupiditate.Natus iste voluptas ab ratione
                cupiditate.Natus iste voluptas ab ratione
                cupiditate.
              </p>
            <div className="overlay">
              <div className="slide">
                  <button>Notify me</button>
              </div>
              <h2>{props.date}</h2>
              <p className="Date" style={{marginTop: "-15px", marginLeft: "3px"}}>{props.month}</p>
            </div>
          </div>
    )
}
