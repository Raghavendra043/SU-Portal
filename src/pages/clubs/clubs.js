import React from "react";
import Clubname from "./clubname";
import Clubevents from "./Clubevents";
import ClubPOR from "./ClubPOR"

import Clubvideo from "./clubvideo";
export default function clubs() {
  return (
    <>
      <Clubname />
      <Clubvideo />
      <Clubevents />
	  <ClubPOR/>
    </>
  );
}
