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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tenetur nemo ex quo a dolorum laboriosam vel quidem neque perferendis non harum aliquid velit provident modi sequi, eius alias porro temporibus magnam odio dignissimos cupiditate. Molestiae similique mollitia dignissimos earum dolores nostrum, vitae assumenda blanditiis architecto. Quo quam hic eligendi quos dolores vitae maxime modi iusto explicabo distinctio placeat, consequatur asperiores minus, accusamus saepe ipsa. Ipsam aut fugiat itaque ab unde modi natus cupiditate, doloribus vitae.
          </p>
          <button className="explore-btn" onClick={()=>{
            history.push('/feg');
          }}>Explore</button>
          <img className="group_photo" src={welfreshers} alt="welfreshers_img" />
        </div>
      </div>
    </>
  )
}
