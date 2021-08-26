import React from 'react'
import './ButtonHover.css';

const ButtonHover = () => {
    return (
        <>
            <button class="btn btn-border-pop">Border Pop</button>
            <button class="btn btn-background-slide">Background Slide</button>
            <button class="btn btn-background-circle">Background Circle</button>
            <button class="btn btn-border-underline">Border Underline</button>
        </>
    )
}

export default ButtonHover;