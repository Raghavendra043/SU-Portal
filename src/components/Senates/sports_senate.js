import React from 'react'
import Page1 from './page1'
// import sportsclubs from './sportsclubs'
import leftImage from '../../assets/images/Senates/sports_left.svg'
import rightImage from '../../assets/images/Senates/sports_right.svg'
import sportsBg from '../../assets/images/Senates/sports_bg.svg'
import Sports from './sports'
function sports_senate() {
    return (
        <>
            <Page1
                bg={sportsBg}
                heading="Sports Senate"
                content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing"
                leftimg={leftImage}
                rightimg={rightImage}
            />
            <Sports/>
        </>
    )
}

export default sports_senate
