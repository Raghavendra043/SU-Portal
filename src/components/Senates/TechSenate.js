/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
import React from 'react'
import Page1 from './page1'
import Assocs from './assocs'
import Clubs from './clubs'
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
            <HyperloopSvg className={`${styles.hyperloopsvg} ${styles.svgg}`}/>
            <AeolusSvg className={`${styles.aeolussvg} ${styles.svgg}`}/>
            <ChemicalSvg className={`${styles.chemicalsvg} ${styles.svgg}`}/> 
            <AlchemySvg className={`${styles.alchemysvg} ${styles.svgg}`}/> 
            <AxiomSvg className={`${styles.axiomsvg} ${styles.svgg}`}/> 
            <BhcgSvg className={`${styles.bhcgsvg} ${styles.svgg}`}/> 
            <SedsSvg className={`${styles.sedssvg} ${styles.svgg}`}/> 
            <CivilSvg className={`${styles.civilsvg} ${styles.svgg}`}/> 
            <CsaSvg className={`${styles.csasvg} ${styles.svgg}`}/> 
            <CruxSvg className={`${styles.cruxsvg} ${styles.svgg}`}/> 
            <ArcSvg className={`${styles.arcsvg} ${styles.svgg}`}/> 
        </div>
    )
}

export default TechSenate
