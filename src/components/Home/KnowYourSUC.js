import React from "react";
import "./KnowYourSUC.css";
import knowursucbg1 from "../../assets/home/KnowYourSUC/knowursuc1.svg";
import knowursucbg2 from "../../assets/home/KnowYourSUC/knowursuc2.svg";
import SVG from "./svg";
import { knowyoursucimage } from "./data";
export default function KnowYourSUC() {
  return (
    <>
      <div className="knowursuc-first">
        <div className="knowursuc-container">
          <img
            src={knowursucbg2}
            alt="knowursucbg2"
            style={{ width: "100%" }}
          />
          <div className="knowyoursuc_images">
            <div className="row1">
              <SVG knowyoursucimage={knowyoursucimage.first} />
              <SVG knowyoursucimage={knowyoursucimage.second} />
            </div>
            <div className="row2">
              <SVG knowyoursucimage={knowyoursucimage.third} />
              <SVG knowyoursucimage={knowyoursucimage.fourth} />
              <SVG knowyoursucimage={knowyoursucimage.fifth} />
              <SVG knowyoursucimage={knowyoursucimage.sixth} />
            </div>
          </div>

          <img
            src={knowursucbg1}
            alt="knowursucbg1"
            style={{
              width: "100%",
              position: "absolute",
              top: "-0.5vh",
              left: "0",
            }}
          />
        </div>
      </div>
    </>
  );
}
