import React from 'react'
import styles from './assocs.module.css'
import aeolus from '../../assets/images/LogosSenates/techsenate/aeolus.png'
import adastra from '../../assets/images/LogosSenates/techsenate/adastra.png'
import sae from '../../assets/images/LogosSenates/techsenate/sae.png'
import arc from '../../assets/images/LogosSenates/techsenate/arc.png'
import crux from '../../assets/images/LogosSenates/techsenate/crux.png'
import wsc from '../../assets/images/LogosSenates/techsenate/wsc.png'
import ieee from '../../assets/images/LogosSenates/techsenate/ieee.png'
import hyperloop from '../../assets/images/LogosSenates/techsenate/hyperloop.png'
import seds from '../../assets/images/LogosSenates/techsenate/seds.png'
import acm from '../../assets/images/LogosSenates/techsenate/acm.png'
import bhcg from '../../assets/images/LogosSenates/techsenate/bhcg.png'
function Clubs() {
    const clubsList = [
        {
            id:1,
            url: aeolus,
            club: 'Aeolous'
        },
        {
            id:2,
            url: adastra,
            club: 'Ad Astra'
        },
        {
            id:3,
            url: sae,
            club: "SAE"
        },
        {
            id:4,
            url: arc,
            club: "ARC"
        },
        {
            id:5,
            url: crux,
            club: "Crux"
        },
        {
            id:6,
            url: wsc,
            club: "Wall Street Club"
        },
        {
            id:7,
            url: ieee,
            club: "IEEE"
        },
        {
            id:8,
            url: hyperloop,
            club: "Hyperloop"
        },
        {
            id:9,
            url: seds,
            club: "SEDS"
        },
        {
            id:10,
            url: acm,
            club: "ACM"
        },
        {
            id:11,
            url: bhcg,
            club: "BHCG"
        },
    ]
    return (
        <div className={styles.outer}>
            <div className={styles.heading}>Clubs</div>
            <div className={styles.assocs}>
                {clubsList.map(x => {
                    return (
                        <div className={styles.assoc}>
                            <div className={styles.logo}><img src={x.url} width={150} className={styles.logoimg}></img></div>
                            <h6 className={styles.assoc_title}>{x.club}</h6>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Clubs
