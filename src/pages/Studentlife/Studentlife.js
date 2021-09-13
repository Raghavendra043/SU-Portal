import React from "react";
import { Fade } from "react-awesome-reveal";
import studentlifecss from "./StudentlifeContent.module.css";
import { Link } from "react-router-dom";
import { studentlife } from "./StudentlifeData";

export default function Studentlife() {
  const back = () => {
    window.history.go(-1);
  };

  return (
    <div className={studentlifecss.studentlifefont}>
      <div
        className={studentlifecss.studentlifesection}
        style={{
          display: `flex`,
          flexDirection: `column`,
          margin: `auto`,
          background: `url(${studentlife.backimage}) no-repeat center center/cover`,
          position: `absolute`,
          top: `0px`,
          zIndex: -2,
          width: `100%`,
          minHeight: `100vh`,
          color: `white`,
        }}
      >
        <div className={studentlifecss.studentlifebackimage}></div>
        <div className={studentlifecss.studentlifemain}>
          <div className={studentlifecss.studentlifeback}>
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
          <div className={studentlifecss.studentlifecontent}>
            <div className={studentlifecss.studentlifeleft}>
              <Fade direction="left" delay={300} triggerOnce>
                <div className={studentlifecss.studentlifeleftheading}>
                  <h1>{studentlife.leftheading}</h1>
                  <p style={{ marginTop: "3rem" }}>{studentlife.leftpara}</p>
                </div>
              </Fade>
            </div>
            <div className={studentlifecss.studentliferight}>
              <Fade direction="right" delay={300} triggerOnce>
                {studentlife.rightheading.map(event => {
                  return (
                    <Link to="#" className={studentlifecss.link}>
                      <h1>{event.heading}</h1>
                    </Link>
                  );
                })}
              </Fade>
            </div>
          </div>
          <div className={studentlifecss.studentlifebottomheading}>
            <h1>{studentlife.bottomheading}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
