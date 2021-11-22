import React from "react";
import AppName from "../Components/AppName";
import Clock from "../Components/Clock";
import { clrs } from "../../../DataSheet";

export default function TopBar() {
  return (
    <div style={{display:"flex",padding:"10px 15px",backgroundColor:clrs[3]}}>
      <Clock />
      <AppName />
    </div>
  );
}
