import React from "react";
import styles from "./assocs.module.css";
import drama from "../../assets/images/LogosSenates/cultsenate/drama.png";
import music from "../../assets/images/LogosSenates/cultsenate/music.png";
import dance from "../../assets/images/LogosSenates/cultsenate/dance.png";
import shades from "../../assets/images/LogosSenates/cultsenate/shades.png";
import comedy from "../../assets/images/LogosSenates/cultsenate/comedy.png";
import fashion from "../../assets/images/LogosSenates/cultsenate/fashion.png";
import swar from "../../assets/images/LogosSenates/cultsenate/swar.png";
import journal from "../../assets/images/LogosSenates/cultsenate/journal.png";
import photog from "../../assets/images/LogosSenates/cultsenate/photog.png";
import hindi from "../../assets/images/LogosSenates/cultsenate/hindi.png";
import quiz from "../../assets/images/LogosSenates/cultsenate/quiz.png";
import vfx from "../../assets/images/LogosSenates/cultsenate/vfx.png";
import movie from "../../assets/images/LogosSenates/cultsenate/movie.png";
import esp from "../../assets/images/LogosSenates/cultsenate/esp.png";
import cook from "../../assets/images/LogosSenates/cultsenate/cook.png";
import da from "../../assets/images/LogosSenates/cultsenate/da.png";
import elas from "../../assets/images/LogosSenates/cultsenate/elas.png";
import safl from "../../assets/images/LogosSenates/cultsenate/safl.png";
import DisplayBox from "./DisplayBox";

function CultClubs() {
  const clubsList = [
    {
      id: 1,
      url: drama,
      name: "Dramatics Club",
    },
    {
      id: 2,
      url: music,
      name: "Music Club",
    },
    {
      id: 3,
      url: dance,
      name: "Dance Club",
    },
    {
      id: 4,
      url: shades,
      name: "Shades",
    },
    {
      id: 5,
      url: comedy,
      name: "Comedy Club",
    },
    {
      id: 6,
      url: fashion,
      name: "Fashion Club",
    },
    {
      id: 7,
      url: swar,
      name: "Swaranjali",
    },
    {
      id: 8,
      url: journal,
      name: "Journal Club",
    },
    {
      id: 9,
      url: photog,
      name: "Photog",
    },
    {
      id: 10,
      url: hindi,
      name: "Hindi Tarang",
    },
    {
      id: 11,
      url: quiz,
      name: "Quiz  Club",
    },
    {
      id: 12,
      url: vfx,
      name: "VFX  Club",
    },
    {
      id: 13,
      url: movie,
      name: "Movie  Club",
    },
    {
      id: 14,
      url: esp,
      name: "Esports  Club",
    },
    {
      id: 15,
      url: cook,
      name: "Cooking  Club",
    },
    {
      id: 16,
      url: da,
      name: "Designers Anonymous",
    },
    {
      id: 17,
      url: elas,
      name: "ELAS",
    },
    {
      id: 18,
      url: safl,
      name: "SAFL",
    },
  ];
  return (
    <div className={styles.outer}>
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

export default CultClubs;
