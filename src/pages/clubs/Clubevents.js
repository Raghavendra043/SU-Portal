import React, { useState } from 'react'
import "./clubevents.css"
import svg1 from"./images/clipart-smooth_zigzag.jpg"
import svg2 from"./images/clipart-sharp_zigzag.png"
export default function Clubevents() {
    return (
        <div id="events">
        <h1 id="events_heading">Our Events</h1>
        <div className="box">



            <div className="events_main" id="first"  onMouseOver={() => {

let left = document.getElementById(`events_main_left_first`); let right = document.getElementById(`events_main_right_first`)
    ; let right_button = document.getElementById(`events_button_first`)
    ; let right_para = right.lastElementChild;
console.log(right_para)
let right_heading = right.firstChild
right_para.style.display = "none"
right_button.style.display = "block"
right_heading.style.color = "white"
left.style.justifyContent = "center"
// right.style.clipPath="circle(140.5% at 0 0)"
right.style.animation = "back 1s forwards";
right.style.backgroundColor = "rgb(218,37,29)"

}} onMouseLeave={() => {

    let left = document.getElementById(`events_main_left_first`)
    let right = document.getElementById(`events_main_right_first`)
    let right_button = document.getElementById(`events_button_first`)
    let right_para = right.lastElementChild;
    let right_heading = right.firstChild
    right_para.style.display = "block"
    right_button.style.display = "none"
    right_heading.style.color = "#2D7DD2"
    right.style.backgroundColor = "white"
    right.style.animation = "none";
    left.style.justifyContent = "flex-start"
}} >
                <div className="events_left" id="events_main_left_first" >
                    <h1>22</h1>
                    <h4>August</h4>
                </div>
                <div className="events_right" id="events_main_right_first">
                    <h1>Campus Event Headline</h1>
                    <button className="event_button" id="events_button_first">
                        Notify me
                    </button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ipsa earum? Magni cumque quis ex minus, eveniet amet provident quas ratione cum aperiam, dolor velit impedit facere quisquam? Quos, error.</p>
                </div>
            </div>
            <div className="events_main" id="second" onMouseOver={() => {

let left = document.getElementById(`events_main_left_second`); let right = document.getElementById(`events_main_right_second`)
    ; let right_button = document.getElementById(`events_button_second`)
    ; let right_para = right.lastElementChild;
console.log(right_para)
let right_heading = right.firstChild
right_para.style.display = "none"
right_button.style.display = "block"
right_heading.style.color = "white"
left.style.justifyContent = "center"
// right.style.clipPath="circle(140.5% at 0 0)"
right.style.animation = "back 1s forwards";
right.style.backgroundColor = "#45B43B"

}}
onMouseLeave={() => {

    let left = document.getElementById(`events_main_left_second`)
    let right = document.getElementById(`events_main_right_second`)
    let right_button = document.getElementById(`events_button_second`)
    let right_para = right.lastElementChild;
    let right_heading = right.firstChild
    right_para.style.display = "block"
    right_button.style.display = "none"
    right_heading.style.color = "#2D7DD2"
    right.style.backgroundColor = "white"
    right.style.animation = "none";
    left.style.justifyContent = "flex-start"
}} >
                <div className="events_left"  id="events_main_left_second" >
                    <h1>22</h1>
                    <h4>August</h4>
                </div>
                <div className="events_right" id="events_main_right_second">
                    <h1>Campus Event Headline</h1>
                    <button className="event_button" id="events_button_second">
                        Notify me
                    </button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ipsa earum? Magni cumque quis ex minus, eveniet amet provident quas ratione cum aperiam</p>
                </div>
            </div>
            <div className="events_main" id="third" onMouseOver={() => {
                    let left = document.getElementById(`events_main_left_third`); let right = document.getElementById(`events_main_right_third`)
                        ; let right_button = document.getElementById(`events_button_third`)
                        ; let right_para = right.lastElementChild;
                    console.log(right_para)
                    let right_heading = right.firstChild
                    right_para.style.display = "none"
                    right_button.style.display = "block"
                    right_heading.style.color = "white"
                    left.style.justifyContent = "center"
                    // right.style.clipPath="circle(140.5% at 0 0)"
                    right.style.animation = "back 1s forwards";
                    right.style.backgroundColor = "#2D7DD2"
                }} onMouseLeave={() => {

                    let left = document.getElementById(`events_main_left_third`)
                    let right = document.getElementById(`events_main_right_third`)
                    let right_button = document.getElementById(`events_button_third`)
                    let right_para = right.lastElementChild;
                    let right_heading = right.firstChild
                    right_para.style.display = "block"
                    right_button.style.display = "none"
                    right_heading.style.color = "#2D7DD2"
                    right.style.backgroundColor = "white"
                    right.style.animation = "none";
                    left.style.justifyContent = "flex-start"
                }}>
                <div className="events_left" id="events_main_left_third" >
                    <h1>22</h1>
                    <h4>August</h4>
                </div>
                <div className="events_right" id="events_main_right_third">
                    <h1>Campus Event Headline</h1>
                    <button className="event_button" id="events_button_third">
                        Notify me
                    </button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ipsa earum? Magni cumque quis ex minus, eveniet amet provident quas ratione cum aperiam</p>
                </div>
            </div>
            <div className="events_main" id="fourth" onMouseOver={() => {
                    let left = document.getElementById(`events_main_left_fourth`); let right = document.getElementById(`events_main_right_fourth`)
                        ; let right_button = document.getElementById(`events_button_fourth`)
                        ; let right_para = right.lastElementChild;
                    console.log(right_para)
                    let right_heading = right.firstChild
                    right_para.style.display = "none"
                    right_button.style.display = "block"
                    right_heading.style.color = "white"
                    left.style.justifyContent = "center"
                    // right.style.clipPath="circle(140.5% at 0 0)"
                    right.style.animation = "back 1s forwards";
                    right.style.backgroundColor = "#FFC300"
                }} onMouseLeave={() => {
                    let left = document.getElementById(`events_main_left_fourth`)
                    let right = document.getElementById(`events_main_right_fourth`)
                    let right_button = document.getElementById(`events_button_fourth`)
                    let right_para = right.lastElementChild;
                    let right_heading = right.firstChild
                    right_para.style.display = "block"
                    right_button.style.display = "none"
                    right_heading.style.color = "#2D7DD2"
                    right.style.backgroundColor = "white"
                    right.style.animation = "none";
                    left.style.justifyContent = "flex-start"
                }}>
                <div className="events_left"  id="events_main_left_fourth" >
                    <h1>22</h1>
                    <h4>August</h4>
                </div>
                <div className="events_right" id="events_main_right_fourth">
                    <h1>Campus Event Headline</h1>
                    <button className="event_button" id="events_button_fourth">
                        Notify me
                    </button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ipsa earum? Magni cumque quis ex minus, eveniet amet provident quas ratione cum aperiam</p>
                </div>
            </div>
        </div>
            <img src={svg1} alt="" srcset="" id="svg1"/>
            <img src={svg2} alt="" srcset="" id="svg2"/>
            </div>
    )
}
