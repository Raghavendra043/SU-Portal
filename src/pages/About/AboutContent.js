import React from "react";
import { Fade } from "react-awesome-reveal";
import aboutcss from "./AboutContent.module.css";
import { Link } from "react-router-dom";
import { about } from "./data";
export default function () {
  const back = () => {
    window.history.go(-1);
  };
  return (
    <div className={aboutcss.aboutfont}>
      <div
        className={aboutcss.aboutsection}
        style={{
          display: `flex`,
          flexDirection: `column`,
          margin: `auto`,
          background: `url(${about.backimage}) no-repeat center center/cover`,
          position: `absolute`,
          top: `0px`,
          zIndex: -2,
          width: `100%`,
          minHeight: `100vh`,
          color: `white`,
        }}
      >
        <div className={aboutcss.aboutbackimage}></div>
        <div className={aboutcss.aboutmain}>
          <div className={aboutcss.aboutback}>
            <i
              className="fa fa-chevron-left"
              style={{ fontSize: "2em" }}
              aria-hidden="true"
              onClick={back}
            ></i>
            <h4
              style={{ marginBottom: "0px", marginLeft: "10px" }}
              onClick={back}
            >
              Back
            </h4>
          </div>
          <div className={aboutcss.aboutcontent}>
            <div className={aboutcss.aboutleft}>
              <Fade direction="left" delay={300} triggerOnce>
                <div className={aboutcss.aboutleftheading}>
                  <h1>{about.leftheading}</h1>
                  <p>{about.leftpara}</p>
                </div>
              </Fade>
            </div>
            <div className={aboutcss.aboutright}>
              <Fade direction="right" delay={300} triggerOnce>
                {about.rightheading.map(event => {
                  return (
                    <Link to="#" className={aboutcss.link}>
                      <h1>{event.heading}</h1>
                    </Link>
                  );
                })}
              </Fade>
            </div>
          </div>
          <div className={aboutcss.aboutbottomheading}>
            <h1>{about.bottomheading}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
