import React from 'react'
import styles from './assocs.module.css'
import csa from '../../assets/images/LogosSenates/techsenate/csa.png'
import phoenix from '../../assets/images/LogosSenates/techsenate/phoenix.png'
import mech from '../../assets/images/LogosSenates/techsenate/mech.png'
import civil from '../../assets/images/LogosSenates/techsenate/civil.png'
import chem from '../../assets/images/LogosSenates/techsenate/chem.png'
import synapsis from '../../assets/images/LogosSenates/techsenate/synapsis.png'
import panacea from '../../assets/images/LogosSenates/techsenate/panacea.png'
import axiom from '../../assets/images/LogosSenates/techsenate/axiom.png'
import alchemy from '../../assets/images/LogosSenates/techsenate/alchemy.png'
import spectrum from '../../assets/images/LogosSenates/techsenate/spectrum.png'
import eco from '../../assets/images/LogosSenates/techsenate/eco.png'
function Assocs() {
    const assocsList = [
        {
            id:1,
            url: csa,
            assoc: 'Computer Science Association'
        },
        {
            id:2,
            url: phoenix,
            assoc: 'Phoenix Association'
        },
        {
            id:3,
            url: mech,
            assoc: "Mechanical Engineer's Association"
        },
        {
            id:4,
            url: civil,
            assoc: "Civil Engineer's Association"
        },
        {
            id:5,
            url: chem,
            assoc: "Association of Chemical Engineers"
        },
        {
            id:6,
            url: synapsis,
            assoc: "Synapsis Association"
        },
        {
            id:7,
            url: panacea,
            assoc: "Panacea Association"
        },
        {
            id:8,
            url: axiom,
            assoc: "Axiom Association"
        },
        {
            id:9,
            url: alchemy,
            assoc: "Alchemy Association"
        },
        {
            id:10,
            url: spectrum,
            assoc: "Spectrum Association"
        },
        {
            id:11,
            url: eco,
            assoc: "Economics Association"
        },
    ]
    
    return (
        <div className={styles.outer}>
            <div className={styles.heading}>Associations</div>
            <div className={styles.assocs}>
                {assocsList.map(x => {
                    return (
                        <div className={styles.assoc}>
                            <div className={styles.logo}><img src={x.url} width={150} className={styles.logoimg}></img></div>
                            <h6 className={styles.assoc_title}>{x.assoc}</h6>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Assocs
