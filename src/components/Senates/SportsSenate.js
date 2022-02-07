/* eslint-disable no-useless-escape */
import React from 'react'
import Page1 from './page1'
// import sportsclubs from './sportsclubs'
import leftImage from '../../assets/images/SenateSvgs/Group\ 198.svg'
// import { ReactComponent as ArcSvg } from "./../../assets/images/SenateSvgs/technological.svg"
import rightImage from '../../assets/images/SenateSvgs/Group\ 197.svg'
import Footer from "./../../components/Footer/Footer"
import background from "../../assets/images/footer.png"
import sportsBg from '../../assets/images/Senates/sports_bg.svg'
import Sports from './sports'
import styles from './senatesvgs.module.css'
import { ReactComponent as CricketSvg } from "./../../assets/images/SenateSvgs/cricket-stump.svg"
import { ReactComponent as FootballSvg } from "./../../assets/images/SenateSvgs/clay.svg"
import { ReactComponent as HockeySvg } from "./../../assets/images/SenateSvgs/tennis-racket.svg"
import { ReactComponent as SnookerSvg } from "./../../assets/images/SenateSvgs/soccer-player.svg"
import { ReactComponent as BodySvg } from "./../../assets/images/SenateSvgs/dumbbell-2.svg"
import { ReactComponent as ThrowSvg } from "./../../assets/images/SenateSvgs/roller-skate.svg"
import { ReactComponent as KhoSvg } from "./../../assets/images/SenateSvgs/table-tennis-2.svg"
import { ReactComponent as CarromSvg } from "./../../assets/images/SenateSvgs/snooker-2.svg"
import { ReactComponent as DlonSvg } from "./../../assets/images/SenateSvgs/running.svg"
import { ReactComponent as SkatingSvg } from "./../../assets/images/SenateSvgs/chess.svg"
function SportsSenate() {
    return (
        <div style={{background:"rgb(245, 245, 245)"}}>
            <Page1
                bg={sportsBg}
                heading="Sports Senate"
                content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing"
                leftimg={leftImage}
                rightimg={rightImage}
            />
            <Sports/>
            <Footer background={background} />
            <CricketSvg className={styles.cricketsvg}/> 
            <FootballSvg className={styles.footballsvg}/> 
            <HockeySvg className={styles.hockeysvg}/> 
            <SnookerSvg className={styles.snookersvg}/> 
            <BodySvg className={styles.bodysvg}/> 
            <ThrowSvg className={styles.throwsvg}/>
            <KhoSvg className={styles.khosvg}/> 
            <CarromSvg className={styles.carromsvg}/>
            <DlonSvg className={styles.dlonsvg}/> 
            <SkatingSvg className={styles.skatingsvg}/> 
        </div>
    )
}

export default SportsSenate
