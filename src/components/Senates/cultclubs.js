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

function Cultclubs() {
  const clubsList = [
    {
      id: 1,
      url: drama,
      club: "Dramatics Club",
    },
    {
      id: 2,
      url: music,
      club: "Music Club",
    },
    {
      id: 3,
      url: dance,
      club: "Dance Club",
    },
    {
      id: 4,
      url: shades,
      club: "Shades",
    },
    {
      id: 5,
      url: comedy,
      club: "Comedy Club",
    },
    {
      id: 6,
      url: fashion,
      club: "Fashion Club",
    },
    {
      id: 7,
      url: swar,
      club: "Swaranjali",
    },
    {
      id: 8,
      url: journal,
      club: "Journal Club",
    },
    {
      id: 9,
      url: photog,
      club: "Photog",
    },
    {
      id: 10,
      url: hindi,
      club: "Hindi Tarang",
    },
    {
      id: 11,
      url: quiz,
      club: "Quiz  Club",
    },
    {
      id: 12,
      url: vfx,
      club: "VFX  Club",
    },
    {
      id: 13,
      url: movie,
      club: "Movie  Club",
    },
    {
      id: 14,
      url: esp,
      club: "Esports  Club",
    },
    {
      id: 15,
      url: cook,
      club: "Cooking  Club",
    },
    {
      id: 16,
      url: da,
      club: "Designers Anonymous",
    },
    {
      id: 17,
      url: elas,
      club: "ELAS",
    },
    {
      id: 18,
      url: safl,
      club: "SAFL",
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

export default Cultclubs;
