import React from 'react'
import footerData from './footer-data'
import "./Footer.css"
function Footer(props) {
    return (
        <div className="footer-container" style={{
            backgroundImage: `url(${props.background})`
        }}>
            <div className="footer-outer">
                {footerData.map(x => {
                    return (
                        <div className="footer-col">
                            <div className="footer-heading">
                                {x.heading}</div>
                            <div className="footer-desc">
                                <div className="footer-subcol">
                                    {x.col1.map(y => {
                                        return (<div className="footer-subsubcol1">
                                            {y.content}</div>)
                                    })}
                                </div>
                                <div className="footer-subcol">
                                    {x.col2.map(y => {
                                        return (<div className="footer-subsubcol2">
                                            {y.content}</div>)
                                    })}
                                </div>
                            </div>
                        </div>)
                })}
            </div>
        </div>
    )
}

export default Footer
