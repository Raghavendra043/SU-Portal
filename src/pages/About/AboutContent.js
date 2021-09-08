import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fade } from "react-awesome-reveal";
import aboutcss from "./AboutContent.module.css";
import image from "./bitscampus.jpeg";
import { Link } from "react-router-dom";

export default function () {
  const back = () => {
    window.history.go(-1);
  };
  return (
    <div className={aboutcss.aboutfont}>
      <div className={aboutcss.aboutsection}>
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
                  <h1>About us</h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptates quibusdam, nulla voluptate officiis eum
                    reiciendis quia quo aliquid consequatur quidem ea dolorum
                    tempore! Esse cum magni nesciunt. Culpa voluptatum officia
                    repellat assumenda in harum officiis veritatis et nobis iste
                    magnam, placeat blanditiis rem perferendis molestiae
                    mollitia sit accusantium optio enim. Dolorem nisi aut non
                    obcaecati, voluptas modi magnam autem at amet animi.
                    Repudiandae, magni neque unde accusamus ipsa animi ipsum?
                  </p>
                </div>
              </Fade>
            </div>
            <div className={aboutcss.aboutright}>
              <Fade direction="right" delay={300} triggerOnce>
                <Link to="#" className={aboutcss.link}>
                  <h1>The SUC </h1>
                </Link>
                <Link to="#" className={aboutcss.link}>
                  <h1 id={aboutcss.padding}>Our Vision </h1>
                </Link>
                <Link to="#" className={aboutcss.link}>
                  <h1 id={aboutcss.padding}>Our Responsiblities </h1>
                </Link>
                <Link to="#" className={aboutcss.link}>
                  <h1 id={aboutcss.padding}>SU Team </h1>
                </Link>
                <Link to="#" className={aboutcss.link}>
                  <h1 id={aboutcss.padding}>Batch Reps/Hostel Reps</h1>
                </Link>
                <Link to="#" className={aboutcss.link}>
                  <h1 id={aboutcss.padding}>Contact us</h1>
                </Link>
              </Fade>
            </div>
          </div>
          <div className={aboutcss.aboutbottomheading}>
            <h1>About</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
