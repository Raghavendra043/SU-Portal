import React from "react";
import styles from "./assocs.module.css";
import csa from "../../assets/images/LogosSenates/techsenate/csa.png";
import phoenix from "../../assets/images/LogosSenates/techsenate/phoenix.png";
import mech from "../../assets/images/LogosSenates/techsenate/mech.png";
import civil from "../../assets/images/LogosSenates/techsenate/civil.png";
import chem from "../../assets/images/LogosSenates/techsenate/chem.png";
import synapsis from "../../assets/images/LogosSenates/techsenate/synapsis.png";
import panacea from "../../assets/images/LogosSenates/techsenate/panacea.png";
import axiom from "../../assets/images/LogosSenates/techsenate/axiom.png";
import alchemy from "../../assets/images/LogosSenates/techsenate/alchemy.png";
import spectrum from "../../assets/images/LogosSenates/techsenate/spectrum.png";
import eco from "../../assets/images/LogosSenates/techsenate/eco.png";
import DisplayBox from "./DisplayBox";
function Assocs() {
  const assocsList = [
    {
      id: 1,
      url: csa,
      name: "Computer Science Association",
    },
    {
      id: 2,
      url: phoenix,
      name: "Phoenix Association",
    },
    {
      id: 3,
      url: mech,
      name: "Mechanical Engineer's Association",
    },
    {
      id: 4,
      url: civil,
      name: "Civil Engineer's Association",
    },
    {
      id: 5,
      url: chem,
      name: "Association of Chemical Engineers",
    },
    {
      id: 6,
      url: synapsis,
      name: "Synapsis Association",
    },
    {
      id: 7,
      url: panacea,
      name: "Panacea Association",
    },
    {
      id: 8,
      url: axiom,
      name: "Axiom Association",
    },
    {
      id: 9,
      url: alchemy,
      name: "Alchemy Association",
    },
    {
      id: 10,
      url: spectrum,
      name: "Spectrum Association",
    },
    {
      id: 11,
      url: eco,
      name: "Economics Association",
    },
  ];

  return (
    <div className={styles.outer}>
      <div className={styles.heading}>Associations</div>
      <div className={styles.assocs}>
        {assocsList.map((x) => {
          return (
            <DisplayBox data={x} className={styles.dispbox}/>
            // <div className={styles.assoc}>
            //     <div className={styles.logo}><img src={x.url} width={150} className={styles.logoimg}></img></div>
            //     <h6 className={styles.assoc_title}>{x.assoc}</h6>
            // </div>
          );
        })}
      </div>
    </div>
  );
}

export default Assocs;
