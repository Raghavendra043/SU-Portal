import React from "react";
import { Fade } from "react-awesome-reveal";
import placescss from "./PlacesContent.module.css";
import { Link } from "react-router-dom";
import { places } from "./PlacesData";

export default function Places() {
  const back = () => {
    window.history.go(-1);
  };

  return (
    <div className={placescss.placesfont}>
      <div
        className={placescss.placessection}
        style={{
          display: `flex`,
          flexDirection: `column`,
          margin: `auto`,
          background: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url(${places.backimage}) no-repeat center center/cover`,
          backgroundSize: "cover",
          position: `absolute`,
          top: `0px`,
          zIndex: -2,
          width: `100%`,
          minHeight: `100vh`,
          color: `white`,
        }}
      >
        <div className={placescss.placesbackimage}></div>
        <div className={placescss.placesmain}>
          <div className={placescss.placesback}>
            <i
              className="fa fa-chevron-left"
              style={{ fontSize: "2em" }}
              aria-hidden="true"
              onClick={back}
            ></i>
            <h6
              style={{ marginBottom: "0px", marginLeft: "10px" }}
              onClick={back}
            >
              Back
            </h6>
          </div>
          <div className={placescss.placescontent}>
            <div className={placescss.placesleft}>
              <Fade direction="left" delay={300} triggerOnce>
                <div className={placescss.placesleftheading}>
                  <h1>{places.leftheading}</h1>
                  <p style={{ marginTop: "3rem" }}>{places.leftpara}</p>
                </div>
              </Fade>
            </div>
            <div className={placescss.placesright}>
              <Fade direction="right" delay={300} triggerOnce>
                {places.rightheading.map(event => {
                  return (
                    <Link to="#" className={placescss.link}>
                      <h1>{event.heading}</h1>
                    </Link>
                  );
                })}
              </Fade>
            </div>
          </div>
          <div className={placescss.placesbottomheading}>
            <h1>{places.bottomheading}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
