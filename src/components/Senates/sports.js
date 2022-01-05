import React from "react";
import styles from "./assocs.module.css";
import cricket from "../../assets/images/LogosSenates/sportssenate/cricket.png";
import basketball from "../../assets/images/LogosSenates/sportssenate/basketball.png";
import volleyball from "../../assets/images/LogosSenates/sportssenate/volleyball.png";
import football from "../../assets/images/LogosSenates/sportssenate/football.png";
import hockey from "../../assets/images/LogosSenates/sportssenate/hockey.png";
import frisbee from "../../assets/images/LogosSenates/sportssenate/frisbee.png";
import snooker from "../../assets/images/LogosSenates/sportssenate/snooker.png";
import badminton from "../../assets/images/LogosSenates/sportssenate/badminton.png";
import lawn from "../../assets/images/LogosSenates/sportssenate/lawn.png";
import squash from "../../assets/images/LogosSenates/sportssenate/squash.png";
import table from "../../assets/images/LogosSenates/sportssenate/table.png";
import body from "../../assets/images/LogosSenates/sportssenate/body.png";
import power from "../../assets/images/LogosSenates/sportssenate/power.png";
import throwball from "../../assets/images/LogosSenates/sportssenate/throwball.png";
import khokho from "../../assets/images/LogosSenates/sportssenate/khokho.png";
import kabaddi from "../../assets/images/LogosSenates/sportssenate/kabaddi.png";
import chess from "../../assets/images/LogosSenates/sportssenate/chess.png";
import carrom from "../../assets/images/LogosSenates/sportssenate/carrom.png";
import duathlon from "../../assets/images/LogosSenates/sportssenate/duathlon.png";
import athletics from "../../assets/images/LogosSenates/sportssenate/athletics.png";
import skating from "../../assets/images/LogosSenates/sportssenate/skating.png";
import DisplayBox from "./DisplayBox";

function Sports() {
  const sportsList1 = [
    {
      id: 1,
      url: cricket,
      name: "Cricket",
    },
    {
      id: 2,
      url: basketball,
      name: "Basketball",
    },
    {
      id: 3,
      url: volleyball,
      name: "Volleyball",
    },
    {
      id: 4,
      url: football,
      name: "Football",
    },
    {
      id: 5,
      url: hockey,
      name: "Hockey",
    },
    {
      id: 6,
      url: frisbee,
      name: "Frisbee",
    },
    {
      id: 7,
      url: snooker,
      name: "Snooker",
    },
  ];
  const sportsList2 = [
    {
      id: 1,
      url: badminton,
      name: "Badminton ",
    },
    {
      id: 2,
      url: lawn,
      name: "Lawn Tennis",
    },
    {
      id: 3,
      url: squash,
      name: "Squash",
    },
    {
      id: 4,
      url: table,
      name: "Table Tennis",
    },
    {
      id: 5,
      url: body,
      name: "Bodybuilding",
    },
    {
      id: 6,
      url: power,
      name: "Powerlifting",
    },
    {
      id: 7,
      url: throwball,
      name: "Throwball",
    },
  ];
  const sportsList3 = [
    {
      id: 1,
      url: khokho,
      name: "Kho Kho",
    },
    {
      id: 2,
      url: kabaddi,
      name: "Kabaddi",
    },
    {
      id: 3,
      url: chess,
      name: "Chess",
    },
    {
      id: 4,
      url: carrom,
      name: "Carrom",
    },
    {
      id: 5,
      url: duathlon,
      name: "Duathlon",
    },
    {
      id: 6,
      url: athletics,
      name: "Athletics",
    },
    {
      id: 7,
      url: skating,
      name: "Skating",
    },
  ];
  return (
    <div className={styles.outer}>
      <div className={styles.assocs}>
        {sportsList1.map((x) => {
          return (
            <DisplayBox data={x} />
            // <div className={styles.assoc}>
            //   <div className={styles.logo}>
            //     <img src={x.url} width={150} className={styles.logoimg}></img>
            //   </div>
            //   <h6 className={styles.assoc_title}>{x.sport}</h6>
            // </div>
          );
        })}
      </div>
      <div className={styles.assocs}>
        {sportsList2.map((x) => {
          return (
            <DisplayBox data={x} />
            // <div className={styles.assoc}>
            //   <div className={styles.logo}>
            //     <img src={x.url} width={150} className={styles.logoimg}></img>
            //   </div>
            //   <h6 className={styles.assoc_title}>{x.sport}</h6>
            // </div>
          );
        })}
      </div>
      <div className={styles.assocs}>
        {sportsList3.map((x) => {
          return (
            <DisplayBox data={x} />
            // <div className={styles.assoc}>
            //   <div className={styles.logo}>
            //     <img src={x.url} width={150} className={styles.logoimg}></img>
            //   </div>
            //   <h6 className={styles.assoc_title}>{x.sport}</h6>
            // </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sports;
