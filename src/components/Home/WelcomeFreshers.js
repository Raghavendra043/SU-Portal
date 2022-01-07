import React from 'react';
import "./WelcomeFreshers.css";
import welfreshersbg from "../../assets/home/WelcomeFreshers/welfreshers.svg";
import welfreshers from "../../assets/home/WelcomeFreshers/welcome freshers.svg";
import { useHistory } from 'react-router';

export default function WelcomeFreshers() {
  const history = useHistory();
  return (
    <>
      <div className="welcome-freshers">
        <div className="welcome-freshers-container" style={{ position: "relative" }}>
          <img src={welfreshersbg} alt="freshers-bg" style={{ position: "absolute", top: "1vh", width: "99vw", margin: "5vh 1vw 0 0" }} />
          <p className="welcome-freshers-text">
            Congratulations! And once again, a warm welcome to the BITS family. We are very eager to meet you at the institute. We hope it will be a very remarkable place for you, where you will learn various subjects, activities and cherish every moment of your part of life here.
          </p>
          <button className="explore-btn" onClick={() => {
            history.push('/feg');
          }}>Explore</button>
          <img className="group_photo" src={welfreshers} alt="welfreshers_img" />
        </div>
      </div>
    </>
  )
}
