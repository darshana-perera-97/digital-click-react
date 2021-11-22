import React from "react";
import clockFace from "./clock.svg";

export default function Clock() {
  return (
    <div>
      <img src={clockFace} className="App-logo" alt="clockFace" style={{height:"50px"}}/>
    </div>
  );
}
