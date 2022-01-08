/* eslint-disable array-callback-return */
import React from 'react'

export default function SU_Initiatives(props) {
  const { Event, index, temp} = props;
  
  function pull_up(i) {
    if(document.getElementById(i).style.height != "100%" ){
      document.getElementById(i).style.background = "rgba(59, 56, 56, 0.8)";
      document.getElementById(i).style.height = "100%";
      document.getElementById(i).style.borderRadius = "16px";
    }
    else{
      document.getElementById(i).style.height = "36%";
      document.getElementById(i).style.borderTopLeftRadius = "0";
      document.getElementById(i).style.borderTopRightRadius = "0";
      document.getElementById(i).style.background = "rgba(59, 56, 56, 0.6)";
    }
  }

  return Event.map((element, i) => {
    if (index <= i && i < index + temp) {
      return (
        <div key={i}>
          <div className="image-card">
            <div className="bottom" id={i}>
              <h5>{element.title}</h5>
              <p>
                Lorem ipsum dolor sit amet consecniti culpa magni quaerat vero
                laudantium natus et dolor. Nostrum, suscipit!
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