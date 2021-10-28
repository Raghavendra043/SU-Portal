/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import path1 from "../../assets/home/hero/path1.svg";
import heroImg from "../../assets/home/hero/heroImg.svg";
import { motion, AnimatePresence } from "framer-motion";

import Text from "./Text";

import CampusEvents from "../../components/Home/CampusEvents";
import WelcomeOnBoard from "../../components/Home/WelcomeOnBoard";
import SUInitiatives from "../../components/Home/SUInitiatives";
import "./Home.css";
import WelcomeFreshers from "../../components/Home/WelcomeFreshers";
import KnowYourSUC from "../../components/Home/KnowYourSUC";

function Home() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState("Innovate");
  const [counterText, setCounterText] = useState("Innovate");

  setTimeout(() => {
    if (counterText === "Innovate") {
      setCounterText("Achieve");
    } else if (counterText === "Achieve") {
      setCounterText("Lead");
    } else if (counterText === "Lead") {
      setCounterText("Innovate");
    }
  }, 4000);

  //animation
  const counterV = {
    state1: { y: 100, opacity: 0 },
    state2: { y: 0, opacity: 1 },
    transition: {
      delay: 100,
    },
  };

  const Event = [
    {
      title: "Campus Headlines",
      width: 350,
      month: "Sept",
      day: "23",
    },
    {
      title: "Campus Headlines",
      width: 430,
      month: "Sept",
      day: "03",
    },
    {
      title: "Campus Headlines",
      width: 430,
      month: "Aug",
      day: "19",
    },
    {
      title: "Campus Headlines",
      width: 350,
      month: "Aug",
      day: "20",
    },
    {
      title: "Campus Headlines",
      width: 350,
      month: "Aug",
      day: "20",
    },
  ];

  const Initiatives = [
    {
      title: "The heading and heading",
    },
    {
      title: "The heading and heading",
    },
    {
      title: "The heading and heading",
    },
    {
      title: "The heading and heading part2",
    },
    {
      title: "The heading and heading part2",
    },
    {
      title: "The heading and heading part2",
    },
  ];

  return (
    <div>
      <div style={{ position: "relative" }}>
        <img src={path1} alt="path1" style={{ width: "100%" }} />
        <img
          src={heroImg}
          alt=" heroimg"
          style={{ position: "absolute", top: 4, right: 20, width: "50vw" }}
        />

        <div style={{ position: "absolute", top: 100, paddingLeft: 30 }}>
          <Text />
          <div
            style={{
              height: "60px",
              textAlign: "left",
              font: "normal normal 800 30px/49px Montserrat",
              letterSpacing: "0px",
              color: "#FFFFFF",
              opacity: "1",
            }}
          >
            Students' Union
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                font: "normal normal 800 30px/49px Montserrat",
                letterSpacing: "0px",
                color: "#FFFFFF",
                opacity: "1",
                paddingRight: 10,
              }}
            >
              Let's
            </div>
            {/* {counter ? (
              <motion.div
                style={{
                  font: "normal normal 800 30px/49px Montserrat",
                  letterSpacing: "0.16px",
                  color: "#DF456A",
                  opacity: "1",
                  paddingRight: 10,
                }}
                variants={counterV}
                initial={"state1"}
                animate={"state2"}
                exit={{ y: -100 }}
              >
                Innovate
              </motion.div>
            ) : (
              <motion.div
                style={{
                  font: "normal normal 800 30px/49px Montserrat",
                  letterSpacing: "0.16px",
                  color: "#DF456A",
                  opacity: "1",
                  paddingRight: 10,
                }}
                variants={counterV}
                initial={"state1"}
                animate={"state2"}
              >
                Panda
              </motion.div>
            )} */}
            <motion.div
              style={{
                font: "normal normal 800 30px/49px Montserrat",
                letterSpacing: "0.16px",
                color: "#DF456A",
                opacity: "1",
                paddingRight: 10,
                width: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              variants={counterV}
              initial={"state1"}
              animate={"state2"}
            >
              {counterText}
              {/* <AnimatePresence>
                {counter ? (
                  <motion.span exit={{ y: -100 }}>Innovate</motion.span>
                ) : (
                  <motion.span>Achieve</motion.span>
                )}
                
              </AnimatePresence> */}
            </motion.div>
            <div
              style={{
                font: "normal normal 800 30px/49px Montserrat",
                letterSpacing: "0px",
                color: "#FFFFFF",
                opacity: "1",
              }}
            >
              together
            </div>
          </div>
        </div>
      </div>

      {/* Campus News */}

      <h5 style={{ margin: "50px", marginTop: "15px" }}>
        <b
          style={{
            position: "absolute",
            zIndex: "100",
            backgroundColor: "white",
            padding: "0 1px 0 8px",
          }}
        >
          Campus News:{" "}
        </b>
        <div className="hwrap">
          <div className="scroll-text">
            <div className="hitem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit........
            </div>
            <div className="hitem">
              Aliquam consequat varius consequat.......
            </div>
            <div className="hitem">
              Fusce dapibus turpis vel nisi malesuada sollicitudin.......
            </div>
            <div className="hitem">
              Pellentesque auctor molestie orci ut blandit.......
            </div>
            {/* can have many elements */}
          </div>
        </div>
      </h5>

      {/* Welcome On Board */}

      <div>
        <WelcomeOnBoard />
      </div>

      {/* Campus Events */}
      <div>
        <p className="header">Campus Events</p>
        <div className="container">
          <button
            disabled={index <= 0 ? true : false}
            className="more more-left"
            style={{ left: "5vw" }}
            onClick={() => {
              setIndex(index - 4);
            }}
          >
            <i className="fa fa-lg fa-chevron-left" aria-hidden="true"></i>
          </button>

          <CampusEvents Event={Event} index={index} />

          <button
            disabled={
              index === 4 * (Math.ceil(Event.length / 4) - 1) ? true : false
            }
            className="more"
            style={{ right: "5vw" }}
            onClick={() => {
              setIndex(index + 4);
            }}
          >
            <i className="fa fa-lg fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      {/* Welcome Freshers */}

      <div>
        <p className="header">Welcome Freshers</p>
        <WelcomeFreshers />
      </div>

      {/* SU Initiaves */}

      <div>
        <p
          className="header"
          style={{ marginTop: "-2vh", marginBottom: "4vh" }}
        >
          SU Initiatives
        </p>
        <div className="container" style={{ width: "100vw" }}>
          <button
            disabled={count <= 0 ? true : false}
            className="more more-left"
            style={{ left: "5vw" }}
            onClick={() => {
              setCount(count - 3);
            }}
          >
            <i className="fa fa-lg fa-chevron-left" aria-hidden="true"></i>
          </button>

          <SUInitiatives Event={Initiatives} index={count} />

          <button
            disabled={
              count === 3 * (Math.ceil(Initiatives.length / 3) - 1)
                ? true
                : false
            }
            className="more"
            style={{ right: "5vw" }}
            onClick={() => {
              setCount(count + 3);
            }}
          >
            <i className="fa fa-lg fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      {/* Know Your SUC */}

      <div>
        <p className="header">Know Your SUC</p>
        <KnowYourSUC />
      </div>

      {/* Built By */}

      <div>
        <p className="header">Built By</p>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <p>SUC LOGO</p>
          <button className="contri-btn">Contributors</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
