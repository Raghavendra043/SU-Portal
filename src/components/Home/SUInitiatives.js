/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import React, { useState } from 'react'

export default function SU_Initiatives(props) {
  const { Event, index, temp} = props;
  const [Data, setData] = useState([]);
  if(Data.length === 0){
    for(let j=0;j<Event.length;j++){
      Data.push(Event[j].sub);
    }
  }
  function pull_up(i) {
    
    if(document.getElementById(i).style.height != "100%" ){
      var data = Data;
      data[i] = Event[i].sub1
      
      setData(data);
      document.getElementById(i).style.background = "rgba(59, 56, 56, 0.8)";
      document.getElementById(i).style.height = "100%";
      document.getElementById(i).style.borderRadius = "16px";
      document.getElementById(`text${i}`).style.fontSize = "15px";
      document.getElementById(`text${i}`).style.marginTop = "20px";
    }
    else{
      let data = [];
      for(let j=0;j<Event.length;j++){
        data[j] = Event[j].sub;
      }
      setData(data);
      document.getElementById(i).style.height = "36%";
      document.getElementById(i).style.borderTopLeftRadius = "0";
      document.getElementById(i).style.borderTopRightRadius = "0";
      document.getElementById(i).style.background = "rgba(59, 56, 56, 0.6)";
      document.getElementById(`text${i}`).style.fontSize = "13px";
      document.getElementById(`text${i}`).style.marginTop = "0px";
    }
  }

  return Event.map((element, i) => {
    if (index <= i && i < index + temp) {
      return (
        <div key={i}>
          <div className="image-card">
            <div className="bottom" id={i}>
              <h5 >{element.title} </h5>
              <p id={`text${i}`} style={{fontSize:"13px"}}>
                {Data[i]}
              </p>
              <button onClick={()=>pull_up(i)} className="btn">
                <i className="fa fa-arrow-right " aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )
    }
  });
}