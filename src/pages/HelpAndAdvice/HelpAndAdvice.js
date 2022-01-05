import React from "react";
import { Fade } from "react-awesome-reveal";
import helpcss from "./HelpContent.module.css";
import { Link } from "react-router-dom";
import { help } from "./Help";

export default function HelpAndAdvice() {
  const back = () => {
    window.history.go(-1);
  };

  return (
    <div className={helpcss.helpfont}>
      <div
        className={helpcss.helpsection}
        style={{
          display: `flex`,
          flexDirection: `column`,
          margin: `auto`,
          background: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url(${help.backimage}) no-repeat center center/cover`,
          backgroundSize: "cover",
          position: `absolute`,
          top: `0px`,
          zIndex: -2,
          width: `100%`,
          minHeight: `100vh`,
          color: `white`,
        }}
      >
        <div className={helpcss.helpbackimage}></div>
        <div className={helpcss.helpmain}>
          <div className={helpcss.helpback}>
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
          <div className={helpcss.helpcontent}>
            <div className={helpcss.helpleft}>
              <Fade direction="left" delay={300} triggerOnce>
                <div className={helpcss.helpleftheading}>
                  <h1>{help.leftheading}</h1>
                  <p style={{ marginTop: "3rem" }}>{help.leftpara}</p>
                </div>
              </Fade>
            </div>
            <div className={helpcss.helpright}>
              <Fade direction="right" delay={300} triggerOnce>
                {help.rightheading.map(event => {
                  return (
                    <Link to="#" className={helpcss.link}>
                      <h1>{event.heading}</h1>
                    </Link>
                  );
                })}
              </Fade>
            </div>
          </div>
          <div className={helpcss.helpbottomheading}>
            <h1>{help.bottomheading}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
