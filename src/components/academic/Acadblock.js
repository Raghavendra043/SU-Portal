/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./acadblock.css";
import img1 from "./MaskGroup35.png";
import img2 from "./MaskGroup34.png";
export default function () {
  return (
    <div className="acadouterbox">
      <div className="acadinnerbox">
        <div
          className="acadinnerleftbox"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "85px",
          }}
        >
          <h1 className="acadinnerleftboxh1">The Academic Block</h1>
          <p className="acadinnerleftboxp">
            Situated in the backdrop of the famous Rock Garden, this site is
            divided into two parts: the Old Academic Blocks and the New Academic
            Blocks. The Old Academic Blocks, consisting of 7 beige and
            umber-bricked structures named from Block A to G, have been the
            refuge for tutelage since the foundation of our college in 2008. On
            following the path of the Marine Drive from the main gate, the sides
            of Block A would be visible, and on trekking the mini-uphill, you
            are greeted with the beautiful entrance of Block C that is enveloped
            by green patches of grass, symmetrically dividing the A and B Blocks
            on it’s right and the D and E Blocks to its left. A and B blocks are
            home to the Biology and Chemistry laboratories respectively while D
            and E blocks have the entrepreneurship Incubator and Sandbox where
            innovative ideas can be honed and tinkered. The Mechanical
            Department also operates in the E Block.
            <br />
            <br />
            The central C Block serves as the administrative block
          </p>
        </div>
        <div className="acadinnerrightbox">
          <img src={img2} alt="" id="acadblockimg1" />
        </div>
      </div>
      <img
        src={img1}
        alt=""
        style={{ marginTop: "-70px" }}
        id="acadblockimg2"
      />
    </div>
  );
}
