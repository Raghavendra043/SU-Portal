/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Clubname from "./clubname";
import Clubevents from "./Clubevents";
import Testevents from './testevents'
import ClubPOR from "./ClubPOR";
import Activities from "./activities";
import Clubvideo from "./clubvideo";
import BarWave from "react-cssfx-loading/lib/FillingBottle";
import { getDocData, getData } from "../../functions/firestore";
import footer from '../../assets/images/footer.png'

import { useHistory, useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const num = ["first", "second", "third", "fourth"]
function Clubs() {
  const [Data, setData] = useState();
  const location = useLocation();
  let name = "";
  let type = "";
  if(location && location.state){
    console.log(location.state.name);
    type = location.state.type;
    name = location.state.name;
  }
  if(!Data){
    getDocData(type, name).then((data)=>{
      let data1 = data;
      for(let j =0;j<data1.events.length;j+=1){
        data1.events[j].id = num[j];
      }      
      setData(data);
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <>
    
      { Data ? (
      <>
      <Clubname {...{name:name, about:Data.about}}/>
      <Clubvideo {...{link:Data.link}}/>
      <Testevents {...{Event:Data.events}}/>
      <Activities {...{current:Data.current}}/>
      <ClubPOR {...{pors:Data.POR}}/>
      </>
      ) : (<>
        <div
          style={{marginTop:"35vh", marginLeft:"47vw"}}
        >
        <BarWave color="#FF0000" width="40px" height="40px" /></div>
      </>)}

      <Footer background={footer}/>
    </>
  );
}

export default Clubs