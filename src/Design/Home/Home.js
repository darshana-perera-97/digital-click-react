import React from "react";
import FullClock from "./Layouts/FullClock";
import Weather from "./Layouts/Weather";
import Weather2 from "./Layouts/Weather2";

export default function Home() {
  return (
    <div>
      <FullClock />
      <Weather />
      {/* <Weather2 /> */}
    </div>
  );
}
