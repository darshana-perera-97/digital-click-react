import { Grid } from "@mui/material";
import React from "react";
import AppSet from "./Layouts/AppSet";
import FullClock from "./Layouts/FullClock";
import Weather from "./Layouts/Weather";
import Weather2 from "./Layouts/Weather2";

export default function Home() {
  return (
    <div>
      <FullClock />
      <Weather />
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <div
            style={{
              fontSize: "100px",
              textAlign: "center",
              marginRight: "auto",
              // backgroundColor: clrs[6],
              borderRadius: "25px",
              padding: "10px 20px",
            }}
          ></div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ display: "flex" }}>
            <AppSet txt="TE" link="https://www.accuweather.com/en/lk/colombo/311399/satellite/311399"/>
            <AppSet txt="SA" link="https://www.accuweather.com/en/lk/colombo/311399/satellite/311399" />
            <AppSet txt="FH" link="https://www.weather-forecast.com/maps/Sri-Lanka" />
            <AppSet txt="RE" link="https://www.weather-forecast.com/maps/Sri-Lanka" />
          </div>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              fontSize: "100px",
              textAlign: "center",
              marginRight: "auto",
              // backgroundColor: clrs[6],
              borderRadius: "25px",
              padding: "10px 20px",
            }}
          ></div>
        </Grid>
      </Grid>
      {/* <Weather2 /> */}
    </div>
  );
}
