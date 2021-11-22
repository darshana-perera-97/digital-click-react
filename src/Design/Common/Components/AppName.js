import React from "react";
import { appName, clrs } from "../../../DataSheet";

export default function AppName() {
  return (
    <div>
      <p style={{ fontFamily: "Praise", fontSize: "50px", margin: "-5px",padding:'0px 20px',color:clrs[4] }}>
        {appName}
      </p>
    </div>
  );
}
