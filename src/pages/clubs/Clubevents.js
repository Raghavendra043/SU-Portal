import React, { useState } from 'react'
import "./clubevents.css"

export default function Clubevents() {
    let hover=(number)=>{
        let left=document.getElementById(`events_main_left_${number}`)
        // // console.log(right)
        let right=document.getElementById(`events_main_right_${number}`)
        let right_button=document.getElementById(`events_button_${number}`)
let right_para=right.lastElementChild;
console.log(right_para)

right_para.style.display="none"
right_button.style.display="block"
// right.style.clipPath="circle(140.5% at 0 0)"
right.style.animation="back 10s forwards";
right.style.backgroundColor="blue"





    }
    let hoverout=(number)=>{
        // let left=document.getElementById(`events_main_left_${number}`)
        // // console.log(right)
        // let right_first=document.getElementById(`events_main_right_${number}`)
        // let right_second=document.getElementById(`events_main_right_second_${number}`) 
    
        
        
        
        // right_second.style.clipPath="circle(0% at 0 0)"
       
        //        right_second.style.width="0px";
               
        //        right_first.style.display="flex"


           
    }
    const[EventNumber,seteventnumber]=useState("");
        return (
        <div className="events_main">
<div className="events_left" 
onMouseOver={
    ()=>{

        seteventnumber("first");
        hover(EventNumber);
    }
} id="events_main_left_first" onMouseLeave={
    ()=>{
        hoverout(EventNumber)
    }
}>
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
    )
}
