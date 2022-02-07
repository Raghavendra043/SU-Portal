import React from "react";

function Fest_comp(props) {
  const { fest_name, fest_description, svg, inverse } = props;
  if(inverse == "0"){
  return(
    <div style={{width : "90%", margin : "auto"}}>
      <div
        style={{ display: "flex", justifyContent: "center", height: "500px", margin: "5vh 0" }}
      >
        <div>
          <p className="header" style={{ marginTop: "5vh", margin: "5vh 8vw" }}>
            {fest_name}
          </p>
          <div className="fest_desc">
            {fest_description}
            <div>
              <button className="fest_btn">Know More</button>
            </div>
          </div>
        </div>
        <div className="fest_svg">
          <img src={svg} alt="this is image" />
        </div>
      </div>
    </div>
  )}
  else {
    return(
    <div style={{width : "90%", margin : "auto"}}>
    <div
      style={{ display: "flex", justifyContent: "center", height: "500px" }}
    >
      <div className="fest_svg">
        <img src={svg} alt="this is image" />
      </div>
      <div>
        <p className="header" style={{ marginTop: "5vh", margin: "5vh 8vw" }}>
          {fest_name}
        </p>
        <div className="fest_desc">
          {fest_description}
          <div>
            <button className="fest_btn">Know More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
};

export default Fest_comp;
