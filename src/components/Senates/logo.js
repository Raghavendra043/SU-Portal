import React from 'react'
import senatescss from '../../pages/Senates/Senates.module.css'

export default function logo(props) {
    return (
        <div className= {senatescss.main}>
            <div className={senatescss.background} style={{background: `url(${props.logo}) no-repeat center center/cover`}}>
            </div>
            <div className={senatescss.name}>
                {props.name}
            </div>
        </div>
    )
}
