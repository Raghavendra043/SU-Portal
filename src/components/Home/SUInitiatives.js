/* eslint-disable array-callback-return */
import React from 'react'

export default function SU_Initiatives(props) {
  const { Event, index, temp} = props;
  return Event.map((element, i) => {
    if (index <= i && i < index + temp) {
      return (
        <div key={i}>
          <div className="image-card">
            <div className="bottom">
              <h5>{element.title}</h5>
              <p>
                Lorem ipsum dolor sit amet consecniti culpa magni quaerat vero
                laudantium natus et dolor. Nostrum, suscipit!
              </p>
              <button className="btn">
                <i className="fa fa-arrow-right " aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )
    }
  });
}