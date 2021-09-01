import React from 'react'
import image from "./images/clubimage.png"
import "./clubname.css"
import clublogo from "./images/Dota logo-01.png"
export default function clubname () {
    return (
        <>
        <div>
<img src={image} alt="" srcset="" className="image" />
        </div>
        <div>
            <img src={clublogo} alt="" srcset="" className="clublogo" />
           
        </div>
        <div className="clubname">
             Department of Technical Art
        </div>
        <div className="club_aboutus">
<h5>About us</h5>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ullam, sunt ea quibusdam quisquam eveniet, reprehenderit laboriosam corporis in ipsam tenetur aut saepe iste, illum rerum voluptates facere temporibus nihil doloribus mollitia dicta nulla quae commodi. Blanditiis recusandae, non atque autem temporibus beatae, iure dignissimos suscipit, itaque quas architecto nemo?</p>
        </div>

        </>
    )
}
