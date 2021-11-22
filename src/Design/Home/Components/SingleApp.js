import React from "react";
import { clrs } from "../../../DataSheet";
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function SingleApp() {
  return (
    <div style={{ backgroundColor: clrs[1], width: "auto", display: "flex" }}>
      <AcUnitIcon/>
    </div>
  );
}
