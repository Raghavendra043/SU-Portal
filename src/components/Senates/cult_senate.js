import React from 'react'
import Page1 from './page1'
import Cultclubs from './cultclubs'
import leftImage from '../../assets/images/Senates/cult_left.svg'
import rightImage from '../../assets/images/Senates/cult_right.svg'
import cultBg from '../../assets/images/Senates/cult_bg.svg'
function cult_senate() {
    return (
        <>
            <Page1
                bg={cultBg}
                heading="Cultural Senate"
                content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing"
                leftimg={leftImage}
                rightimg={rightImage}
            />
            <Cultclubs/>
        </>
    )
}

export default cult_senate
