/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import path1 from "../../assets/home/hero/path1.svg";
import path2 from "../../assets/images/video/Coverup.svg";
import heroImg from "../../assets/home/hero/heroImg.svg";
import dp from "../../assets/home/hero/a.jpg";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import bgvideo from '../../assets/images/video/movie.mp4'
import footer from "../../assets/images/footer.png";
import Footerdark from '../../assets/images/Footerdark.svg'

import dopy from '../../assets/home/hero/dopy.jpg'
import journal from '../../assets/home/hero/journal.jpg'

import Text from "./Text";

import overlay from '../../assets/images/video/Overlay.svg'

import CampusEvents from "../../components/Home/CampusEvents";
import WelcomeOnBoard from "../../components/Home/WelcomeOnBoard";
import SUInitiatives from "../../components/Home/SUInitiatives";
import "./Home.css";
import WelcomeFreshers from "../../components/Home/WelcomeFreshers";
import KnowYourSUC from "../../components/Home/KnowYourSUC";
import Typing1 from "../../assets/home/scroll";
import News from "../../assets/home/news";
import Media from "react-media";
import Navbar from "../../components/NavbarNew/Navbar";
import SU from '../../assets/home/hero/su.jpeg'
// import SU1 from '../../assets/home/hero/su1.jpeg'
// import SU2 from '../../assets/home/hero/su2.jpeg'
import { BarWave } from "react-cssfx-loading";
// Better way to reduce bundle size
import BarWave1 from "react-cssfx-loading/lib/FadingBalls";
import { useHistory } from "react-router-dom";

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
      title: "Inter Bhawan Sports",
      month: "January",
      day: "12",
      sub:"We are ecstatic to announce the first sports activity of the current academic year -INTER-BHAWAN SPORTS TOURNAMENT 2022. The registrations are now open for everyone, including HD & FD students. The schedule will be announced soon."
    },
    {
      title: "TechWeek 2022",
      month: "January",
      day: "20",
      sub:"We would also like to announce that due to the escalation in the number of COVID cases, the TechWeek will be organized completely online from 24th to 30th January.Stay healthy, stay safe"
    },
    {
      title: "Economics Association Inductions",
      month: "January",
      day: "14",
      sub:"We are ecstatic to announce the first sports activity of the current academic year -INTER-BHAWAN SPORTS TOURNAMENT 2022."
    },
    {
      title: "Campus Arrival",
      month: "January",
      day: "18",
      sub:"We are ecstatic to announce the first sports activity of the current academic year -INTER-BHAWAN SPORTS TOURNAMENT 2022."
    },
    {
      title: "Comedy Club Inductions",
      month: "January",
      day: "16",
      sub:"We are ecstatic to announce the first sports activity of the current academic year -INTER-BHAWAN SPORTS TOURNAMENT 2022."
    },
  ];

  const Initiatives = [
    {
      title: "Adobe Suit Access",
      sub:"The SU arranged and procured the Adobe premium license which will helps clubs edit videos...",
      sub1:"The SU arranged and procured the Adobe premium license which will helps clubs edit videos and designs with ease without needing to pay exorbitant amounts of money for Adobe premium."

    },
    {
      title: "GitHub",
      sub:"The SU has got the Github student packs for all BPHC students...",
      sub1:"The SU has got the Github student packs for all BPHC students. The benefits of this are multifold as the pack acts as a subscription making multiple acclaimed GitHub courses free for 6 months in various in-demand course topics and level up on the coding skills as well."
    },
    {
      title: "Campus Reopening",
      sub:"The SU has successfully reopened college for all batches (except the 2021 batch)....",
      sub1:"The SU has successfully reopened college for all batches (except the 2021 batch) through staggered slots of arrival. COVID protocols have been abided and all precautions have been taken for isolations if need be."
    },
    {
      title: "The heading and heading part1",
    },
    {
      title: "The heading and heading part2",
    },
    {
      title: "The heading and heading part3",
    },
  ];
  const history = useHistory();
  const [loading, setLoading] = useState(history.length <= 2);
  
  const setSpinner = (x) => {
    if (history.length > 1) {
      setLoading(false);
    } else {
      setLoading(x);
    }
  };

  useEffect(() => {
    setTimeout(() => setSpinner(false), 3000)
  }, []);

  return (
    <div>
      { !loading ? (
      <div>
      <Navbar />
                  <div
                    style={{ height: "10vh", width: "100%", background: "white" }}
                  ></div>
      <div style={{ position: "relative" }}>
        <video alt="path1" style={{ width: "100%", position:"absolute"}} autoPlay loop muted>
          <source src={bgvideo} type="video/mp4"/>
        </video>
        <img src={overlay} alt="path1" style={{ width: "100%", position:"absolute" }} />
        <object
          className="start-image"
          type="image/svg+xml"
          data={heroImg}
          style={{ position: "absolute", top: "45px", right: 20, width: "50vw", animation: "moveUpDown 2s forwards" }}
        >
          <param name="param1" value={dp} />
        </object>
        
        <div className="main-text" >
          <Text />
          <div
            className="student-text"
           
          >
            Students' Union
          </div>
          <Typing1 />
        </div>
      </div>
      {/* <News/> */}
      {/* Campus News */}
      <div style={{width:"100%", height:"38vh"}}></div>
      <h5 style={{ margin: "50px", marginTop: "30px", position:"absolute", marginBottom:"20vh" }}>
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
            {/* trial 2 */}
            {/* for the animation to work the content inside the following 2 divs must be same so just copy the same news twice  */}
            <div className="hitem">
              News1<span>Hyderabad Campus opening from 20th January. {"   "}</span>
              <span> Goa Branch Closed </span>
              <span> Pilani Branch Closed </span>
              <span> Hyderabad Campus opening from 20th January. </span>
              <span> Goa Branch Closed </span>
              <span> Pilani Branch Closed </span>
            </div>

            <div className="hitem">
              News1<span>Hyderabad Campus opening from 20th January. {"   "}</span>
              <span> Goa Branch Closed </span>
              <span> Pilani Branch Closed </span>
              <span> Hyderabad Campus opening from 20th January. </span>
              <span> Goa Branch Closed </span>
              <span> Pilani Branch Closed </span>
            </div>
          </div>
        </div>
      </h5>

      {/* Welcome On Board */}

      <div style={{marginTop:"100px"}}>
        <WelcomeOnBoard />
      </div>

      {/* Campus Events */}
      <div style={{marginTop:"100px"}}>
        <p className="header">Campus Events</p>
        <div className="container" >
          <button
            disabled={index <= 0 }
            className="mobile-left mobile-right-index-1"
            style={{ left: 0 }}
            onClick={() => {
              setIndex(index - 4);
            }}
          >
            <i className="fa fa-lg fa-chevron-left" aria-hidden="true"></i>
          </button>
          <Media query="(max-width: 1000px)">
            {(matches) => {
              return matches ? (
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginRight:"30px",marginLeft:"15px"}}>
                <button
                  disabled={index <=  0}
                  className="mobile-left"
                  style={{ left: 0 }}
                  onClick={() => {
                    setIndex(index - 1);
                  }}
                >
                  <i className="fa fa-lg fa-chevron-left" aria-hidden="true"></i>
                </button>
                <CampusEvents Event={Event} index={index} temp={[0, 1]} />
                {index < Event.length - 1 && 
                <button
                  disabled={index === Event.length-1 }
                  className="mobile-right  "
                  style={{ right: 0}}
                  onClick={() => {
                    setIndex(index + 1);
                  }}
                >
                  <i className="fa fa-lg fa-chevron-right" aria-hidden="true"></i>
                </button>
            }
              </div>
                
              ) : (
                <CampusEvents Event={Event} index={index} temp={[50, 4]} />
              );
            }}
          </Media>

          <button
            disabled={
              index >= Event.length - 4
            }
            className="mobile-right mobile-right-index-1"
            style={{ right: 0 }}
            onClick={() => {
              setIndex(index + 4);
            }}
          >
            <i className="fa fa-lg fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      {/* Welcome Freshers */}
 
      <div style={{marginTop:"100px"}}>
        <p className="header">Welcome Freshers</p>
        <WelcomeFreshers />
      </div>

      {/* SU Initiaves */}

      <div className="mt-3">
        <p
          className="header "
          style={{ marginTop: "-3vh", marginBottom: "4vh" }}
        >
          SU Initiatives
        </p>
        <div
          className="container"
          style={{ width: "100vw", flexDirection: "row "}}
        >
          <button
            disabled={count <= 0 ? true : false}
            className="mobile-left"
            style={{ left: 0 }}
            onClick={() => {
              setCount(count - 3);
            }}
          >
            <i className="fa fa-lg fa-chevron-left" aria-hidden="true"></i>
          </button>

          <Media query="(max-width: 1000px)">
            {(matches) => {
              return matches ? (
                <div style={{display:"flex",alignItems:"center"}}>
                   <button
                  disabled={count <= 0 ? true : false}
                  className="mobile-left"
                  style={{ left: 0 }}
                  onClick={() => {
                    setCount(count - 1);
                  }}
                >
                  <i className="fa fa-lg fa-chevron-left" aria-hidden="true"></i>
                </button>
                <SUInitiatives Event={Initiatives} index={count} temp={1} />
                <button
                  disabled={count === Initiatives.length - 1 ? true : false}
                  className="mobile-right"
                  style={{ right: 0 }}
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  <i className="fa fa-lg fa-chevron-right" aria-hidden="true"></i>
                </button>
                </div>
              ) : (
                <SUInitiatives Event={Initiatives} index={count} temp={3} />
              );
            }}
          </Media>
         

          <button
            disabled={
              count === 3 * (Math.ceil(Initiatives.length / 3) - 1)
                ? true
                : false
            }
            className="mobile-right mobile-right-index-1"
            style={{ right: 0}}
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
        <p className="header">Students Union Council 21-22</p>
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
          <div className="flex-container-contri">
            <div className="dot mb-5">
              <img src={SU} />
            </div>
            <div className="dot mb-5">
              <img src={SU} />
            </div>
            <div className="dot mb-5 mt-5">
              <img src={journal} />
            </div>
            <div className="dot mb-5 mt-5">
              <img src={dopy} />
            </div>
          </div>

          <button className="contri-btn">Contributors</button>
        </div>
      </div>
      <Footer background={Footerdark} />
      </div>
      ) : 
      (<div style={{height:"100vh", width:"100%", background:"black", position:"absolute"}}>
        <div style={{marginTop:"50vh", marginLeft:"47vw"}}><BarWave1 color="red" height="25px" width="25px" /></div>

      </div>)
        }
    </div>
  );
}

export default Home;
