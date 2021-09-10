import React from 'react';
import "./WelcomeOnBoard.css";
import bg1 from "../../assets/home/WelcomeOnBoard/bg1.svg";
import bg2 from "../../assets/home/WelcomeOnBoard/bg2.svg";


export default function WelcomeOnBoard() {
  return (
    <>
      <div className="welcome-first">
        <div className="welcome-container">
          <img src={bg2} alt="bg2" style={{ width: "100%" }} />
          <img src={bg1} alt="bg1" style={{ width: "100%", position: "absolute", top: "0.8vh" }} />
          <h1 className="welcome-title">Welcome On Board</h1>
          <h2 className="welcome-subtitle"><b>BITS, It's Magic !</b></h2>
          <img className="image1" alt="" />
          <img className="image2" alt="" />

          <p className="welcome-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tenetur nemo ex quo a dolorum laboriosam vel quidem neque perferendis non harum aliquid velit provident modi sequi, eius alias porro temporibus magnam odio dignissimos cupiditate. Molestiae similique mollitia dignissimos earum dolores nostrum, vitae assumenda blanditiis architecto. Quo quam hic eligendi quos dolores vitae maxime modi iusto explicabo distinctio placeat, consequatur asperiores minus, accusamus saepe ipsa. Ipsam aut fugiat itaque ab unde modi natus cupiditate, doloribus vitae. Eligendi, reiciendis iste porro deserunt suscipit autem accusamus, architecto atque nobis ipsam molestiae similique saepe ad consequatur et neque perferendis ipsum temporibus repellendus error!
          </p>
        </div>
      </div>
    </>
  )
}
