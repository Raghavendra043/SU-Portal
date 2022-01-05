import React from "react";
import Clubname from "./Clubname";
import Clubevents from "./Clubevents";
import ClubPOR from "./ClubPOR";
import Activities from "./activities";
import Clubvideo from "./clubvideo";
export default function clubs() {
  return (
    <>
      <Clubname />
      <Clubvideo />
      <Clubevents />
      <Activities />
      <ClubPOR />
    </>
  );
}
