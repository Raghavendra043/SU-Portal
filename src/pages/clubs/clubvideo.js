import React from 'react'
import "./clubvideo.css"
import svg3 from "./images/clipart.png"
import svg4 from "./images/clipart-sharp_zigzag.jpg"
export default function clubvideo() {
    return (
        <>
        <div id="clubvideodiv">
            <iframe  src="https://www.youtube.com/embed/qKLdItWnVQA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="clubvideo" ></iframe>
        </div>
        <img src={svg3} alt="" srcset="" id="svg3"/>
        <img src={svg4} alt="" srcset="" id="svg4"/>
        </>
    )
}
