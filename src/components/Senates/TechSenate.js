import React from 'react'
import Page1 from './Page1'
import Assocs from './Assocs'
import Clubs from './Clubs'
import leftImage from '../../assets/images/SenateSvgs/Group\ 131.svg'
import rightImage from '../../assets/images/SenateSvgs/Group\ 199.svg'
import Footer from "./../../components/Footer/Footer"
import background from "../../assets/images/footer.png"
import techBg from '../../assets/images/Senates/deptsbg.svg'
import overlay from '../../assets/images/feg.svg'
import styles from './senatesvgs.module.css'
import { ReactComponent as HyperloopSvg } from "./../../assets/images/SenateSvgs/artificial-intelligence.svg"
import { ReactComponent as AeolusSvg } from "./../../assets/images/SenateSvgs/atom.svg"
import { ReactComponent as ChemicalSvg } from "./../../assets/images/SenateSvgs/chemistry.svg"
import { ReactComponent as AlchemySvg } from "./../../assets/images/SenateSvgs/dna.svg"
import { ReactComponent as AxiomSvg } from "./../../assets/images/SenateSvgs/tech.svg"
import { ReactComponent as BhcgSvg } from "./../../assets/images/SenateSvgs/statistics.svg"
import { ReactComponent as SedsSvg } from "./../../assets/images/SenateSvgs/project-management.svg"
import { ReactComponent as CivilSvg } from "./../../assets/images/SenateSvgs/industrial-robot.svg"
import { ReactComponent as CsaSvg } from "./../../assets/images/SenateSvgs/molecule.svg"
import { ReactComponent as CruxSvg } from "./../../assets/images/SenateSvgs/mouse.svg"
import { ReactComponent as ArcSvg } from "./../../assets/images/SenateSvgs/technological.svg"

function TechSenate() {
    return (
        <div style={{background:"rgb(245, 245, 245)"}}>
            <Page1
                bg={overlay}
                heading="Technical Senate"
                content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing"
                leftimg={leftImage}
                rightimg={rightImage}
            />
            <Assocs />
            <Clubs />
            <Footer background={background} />
            <HyperloopSvg className={styles.hyperloopsvg}/>
            <AeolusSvg className={styles.aeolussvg}/>
            <ChemicalSvg className={styles.chemicalsvg}/> 
            <AlchemySvg className={styles.alchemysvg}/> 
            <AxiomSvg className={styles.axiomsvg}/> 
            <BhcgSvg className={styles.bhcgsvg}/> 
            <SedsSvg className={styles.sedssvg}/> 
            <CivilSvg className={styles.civilsvg}/> 
            <CsaSvg className={styles.csasvg}/> 
            <CruxSvg className={styles.cruxsvg}/> 
            <ArcSvg className={styles.arcsvg}/> 
        </div>
    )
}

export default TechSenate
