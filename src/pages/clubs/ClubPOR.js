import Svg from "./svg";
import { PorHolders } from "./data";
import "../Feg/Feg.css";
import { useEffect } from "react";

export default function ClubPOR() {
  useEffect(() => {
    const accordion = document.getElementsByClassName("context-box");
    for (var i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener("click", function (e) {
        this.classList.toggle("active");
      });
    }
  }, []);
  return (
    <>
      <h1 id="events_heading" className="mt-4">
        POR Holders
      </h1>
      <div style={{ width: "65%", margin: "auto" }}>
        <Svg PorHolders={PorHolders.first} />

        <Svg PorHolders={PorHolders.second} />
        <Svg PorHolders={PorHolders.third} />
      </div>
      <div>
        <div className="accordion">
          <div
            id="events_heading"
            style={{
              width: "70%",
              margin: "auto",
            }}
          >
            FAQS
          </div>
          <div
            className="context-box "
            style={{ width: "70%", margin: "auto", marginTop: "20px" }}
          >
            <div className="accordion-label">What does SU do?</div>
            <div className="accordion-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet,
            </div>
          </div>
          <div
            className="context-box"
            style={{ width: "70%", margin: "auto", marginTop: "20px" }}
          >
            <div className="accordion-label">
              How do I contribute to the tech?
            </div>
            <div className="accordion-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet,
            </div>
          </div>
          <div
            className="context-box"
            style={{ width: "70%", margin: "auto", marginTop: "20px" }}
          >
            <div className="accordion-label">
              What are the pre-requisites to contest in SU elections?
            </div>
            <div className="accordion-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet,
            </div>
          </div>
          <div
            className="context-box"
            style={{ width: "70%", margin: "auto", marginTop: "20px" }}
          >
            <div className="accordion-label">
              How to get the customised merch?
            </div>
            <div className="accordion-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet,
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
