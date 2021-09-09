import React from "react";
import { Fade } from "react-awesome-reveal";
import changecss from "./ChangeContent.module.css";
import { Link } from "react-router-dom";
import { change } from "./ChangeData";

export default function Change() {
  const back = () => {
    window.history.go(-1);
  };

  return (
    <div className={changecss.changefont}>
      <div
        className={changecss.changesection}
        style={{
          display: `flex`,
          flexDirection: `column`,
          margin: `auto`,
          background: `url(${change.backimage}) no-repeat center center/cover`,
          position: `absolute`,
          top: `0px`,
          zIndex: -2,
          width: `100%`,
          minHeight: `100vh`,
          color: `white`,
        }}
      >
        <div className={changecss.changebackimage}></div>
        <div className={changecss.changemain}>
          <div className={changecss.changeback}>
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
          <div className={changecss.changecontent}>
            <div className={changecss.changeleft}>
              <Fade direction="left" delay={300} triggerOnce>
                <div className={changecss.changeleftheading}>
                  <h1>{change.leftheading}</h1>
                  <p style={{ marginTop: "3rem" }}>{change.leftpara}</p>
                </div>
              </Fade>
            </div>
            <div className={changecss.changeright}>
              <Fade direction="right" delay={300} triggerOnce>
                {change.rightheading.map(event => {
                  return (
                    <Link to="#" className={changecss.link}>
                      <h1>{event.heading}</h1>
                    </Link>
                  );
                })}
              </Fade>
            </div>
          </div>
          <div className={changecss.changebottomheading}>
            <h1>{change.bottomheading}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
