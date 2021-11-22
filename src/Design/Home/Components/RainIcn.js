import React from "react";
import rain from "./rain2.png";

export default function RainIcn() {
  return (
    <div style={{height:"100%"}}>
      <img
        src={rain}
        alt="clockFace"
        style={{ height: "120px",marginTop:"60%" }}
      />
    </div>
  );
}
