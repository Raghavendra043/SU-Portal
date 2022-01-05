import React from 'react'
import "./FegHeader.css"

// import Footer from './Footer/Footer'
// import background from "../../assets/images/footer.png"
function FegHeader() {
    return (
        <div>
            <div className="feg-div1">
                <h1 className="feg-welcome">Welcome Freshers!</h1>
                <div className="event-countdown">
                    <div className="count-dots"></div>
                    <div className="feg-event">
                        <div className="count-row1">Event Countdown</div>
                        <div className="count-row2">
                            <div className="row2-col1"> Fervour 21' in </div>
                            <div className="row2-col2">
                                <div className="col2-box">
                                    <div className="col2-heading">Days</div>
                                    <div className="col2-boxes">
                                        <div className="boxes-box1">0</div>
                                        <div className="boxes-box2">0</div>
                                    </div>
                                </div>
                                <div className="col2-box">
                                    <div className="col2-heading">Hours</div>
                                    <div className="col2-boxes">
                                        <div className="boxes-box1">0</div>
                                        <div className="boxes-box2">0</div>
                                    </div>
                                </div>
                                <div className="col2-box">
                                    <div className="col2-heading">Minutes</div>
                                    <div className="col2-boxes">
                                        <div className="boxes-box1">0</div>
                                        <div className="boxes-box2">0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* <Footer background={background}/> */}
        </div>
    )
}

export default FegHeader
