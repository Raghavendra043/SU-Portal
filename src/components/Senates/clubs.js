import React from "react";
import styles from "./assocs.module.css";
import aeolus from "../../assets/images/LogosSenates/techsenate/aeolus.png";
import adastra from "../../assets/images/LogosSenates/techsenate/adastra.png";
import sae from "../../assets/images/LogosSenates/techsenate/sae.png";
import arc from "../../assets/images/LogosSenates/techsenate/arc.png";
import crux from "../../assets/images/LogosSenates/techsenate/crux.png";
import wsc from "../../assets/images/LogosSenates/techsenate/wsc.png";
import ieee from "../../assets/images/LogosSenates/techsenate/ieee.png";
import hyperloop from "../../assets/images/LogosSenates/techsenate/hyperloop.png";
import seds from "../../assets/images/LogosSenates/techsenate/seds.png";
import acm from "../../assets/images/LogosSenates/techsenate/acm.png";
import bhcg from "../../assets/images/LogosSenates/techsenate/bhcg.png";
import DisplayBox from "./DisplayBox";

function Clubs() {
  const clubsList = [
    {
      id: 1,
      url: aeolus,
      name: "Aeolous",
    },
    {
      id: 2,
      url: adastra,
      name: "Ad Astra",
    },
    {
      id: 3,
      url: sae,
      name: "SAE",
    },
    {
      id: 4,
      url: arc,
      name: "ARC",
    },
    {
      id: 5,
      url: crux,
      name: "Crux",
    },
    {
      id: 6,
      url: wsc,
      name: "Wall Street Club",
    },
    {
      id: 7,
      url: ieee,
      name: "IEEE",
    },
    {
      id: 8,
      url: hyperloop,
      name: "Hyperloop",
    },
    {
      id: 9,
      url: seds,
      name: "SEDS",
    },
    {
      id: 10,
      url: acm,
      name: "ACM",
    },
    {
      id: 11,
      url: bhcg,
      name: "BHCG",
    },
  ];
  return (
    <div className={styles.outer}>
      <div className={styles.heading}>Clubs</div>
      <div className={styles.assocs}>
        {clubsList.map((x) => {
          return (
            <DisplayBox data={x} />
            // <div className={styles.assoc}>
            //     <div className={styles.logo}><img src={x.url} width={150} className={styles.logoimg}></img></div>
            //     <h6 className={styles.assoc_title}>{x.club}</h6>
            // </div>
          );
        })}
      </div>
    </div>
  );
}

export default Clubs;
