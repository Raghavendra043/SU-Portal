/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Fest_comp from "../../components/Fests/Fest_comp";
import "./Fests.css";
import { fest_data } from "./fest_data";
import Footer from "../../components/Footer/Footer";
import footer from "../../assets/images/Footerdark.svg";
import svg1 from "../../assets/images/Fest page icons/Fests page icons - web/artificial-intelligence.svg"
import svg2 from "../../assets/images/Fest page icons/Fests page icons - web/brush.svg"
import svg3 from "../../assets/images/Fest page icons/Fests page icons - web/chemistry.svg"
import svg4 from "../../assets/images/Fest page icons/Fests page icons - web/cooking.svg"

export default function Fests() {
  return (
    <div>
      <div className="hero_fests">
        <div className="hero_content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          totam maxime nemo. Dignissimos necessitatibus molestiae officiis vitae
          repudiandae labore ullam, quo dolore minima maxime aspernatur error
          ipsum accusantium consequuntur, impedit voluptas aut qui cumque magni
          architecto at itaque. Delectus, ad quae. Odit in adipisci, quos soluta
          iste possimus rem dolores.
        </div>
      </div>
      <div className="lower_fests">
        <Fest_comp
          fest_name={fest_data.event1.name}
          fest_description={fest_data.event1.description}
          svg={fest_data.event1.svg}
          inverse="0"
        />
        <Fest_comp
          fest_name={fest_data.event2.name}
          fest_description={fest_data.event2.description}
          svg={fest_data.event2.svg}
          inverse="1"
        />
        <Fest_comp
          fest_name={fest_data.event3.name}
          fest_description={fest_data.event3.description}
          svg={fest_data.event3.svg}
          inverse="0"
        />
        <Fest_comp
          fest_name={fest_data.event4.name}
          fest_description={fest_data.event4.description}
          svg={fest_data.event4.svg}
          inverse="1"
        />
      </div>
      <div>
        <Footer background={footer} />
      </div>
    </div>
  );
}
