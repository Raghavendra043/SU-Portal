import React from 'react'
import Page1 from './page1'
import Assocs from './assocs'
import Clubs from './clubs'
import leftImage from '../../assets/images/Senates/techsec_left.svg'
import rightImage from '../../assets/images/Senates/techsec_right.svg'
import techBg from '../../assets/images/Senates/deptsbg.svg'
import overlay from '../../assets/images/feg.svg'
function tech_senate() {
    return (
        <>
            <Page1
                bg={overlay}
                heading="Technical Senate"
                content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing"
                leftimg={leftImage}
                rightimg={rightImage}
            />
            <Assocs />
            <Clubs />
        </>
    )
}

export default tech_senate
