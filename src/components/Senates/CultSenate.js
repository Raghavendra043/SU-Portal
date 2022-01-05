import React from 'react'
import Page1 from './Page1'
import CultClubs from './CultClubs'
import leftImage from '../../assets/images/SenateSvgs/Group\ 184.svg'
import rightImage from '../../assets/images/SenateSvgs/Group\ 183.svg'
import Footer from "./../../components/Footer/Footer"
import background from "../../assets/images/footer.png"
import cultBg from '../../assets/images/Senates/cult_bg.svg'
import styles from './senatesvgs.module.css'
import { ReactComponent as DramaticsSvg } from "./../../assets/images/SenateSvgs/theater.svg"
import { ReactComponent as ShadesSvg } from "./../../assets/images/SenateSvgs/dancing.svg"
import { ReactComponent as ComedySvg } from "./../../assets/images/SenateSvgs/musical-note.svg"
import { ReactComponent as JournalSvg } from "./../../assets/images/SenateSvgs/brush.svg"
import { ReactComponent as PhotogSvg } from "./../../assets/images/SenateSvgs/quiz.svg"
import { ReactComponent as VfxSvg } from "./../../assets/images/SenateSvgs/video-game.svg"
import { ReactComponent as MovieSvg } from "./../../assets/images/SenateSvgs/translate.svg"
import { ReactComponent as DaSvg } from "./../../assets/images/SenateSvgs/camera-2.svg"
import { ReactComponent as SaflSvg } from "./../../assets/images/SenateSvgs/cooking.svg"
import { ReactComponent as ElasSvg } from "./../../assets/images/SenateSvgs/video-camera.svg"
function CultSenate() {
    return (
        <div style={{background:"rgb(245, 245, 245)"}}>
            <Page1
                bg={cultBg}
                heading="Cultural Senate"
                content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing"
                leftimg={leftImage}
                rightimg={rightImage}
            />
            <CultClubs/>
            <Footer background={background} />
            <DramaticsSvg className={styles.dramasvg}/> 
            <ShadesSvg className={styles.shadessvg}/> 
            <ComedySvg className={styles.comedysvg}/> 
            <JournalSvg className={styles.journalsvg}/> 
            <PhotogSvg className={styles.photogsvg}/> 
            <VfxSvg className={styles.vfxsvg}/>
            <MovieSvg className={styles.moviesvg}/> 
            <DaSvg className={styles.dasvg}/>
            <ElasSvg className={styles.elassvg}/> 
            <SaflSvg className={styles.saflsvg}/> 
        </div>
    )
}

export default CultSenate
