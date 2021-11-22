import { Grid } from "@mui/material";
import React from "react";
import Clock from "react-digital-clock";
import { clrs } from "../../../DataSheet";

export default function FullClock() {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  let yr = d.getFullYear();
  let mm = d.getMonth();
  let dd = d.getDate();
  let d2 = d.getDay();
  return (
    <div
      className="App"
      style={{
        // backgroundColor: clrs[5],
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "60px 20px",
        display: "flex",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={3}>
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
        <Grid item xs={6}>
          <div
            style={{
              fontSize: "100px",
              textAlign: "center",
              marginRight: "auto",
              backgroundColor: clrs[6],
              borderRadius: "25px",
              padding: "10px 20px",
            }}
          >
            <Clock format={"ss"} />
            <p style={{ fontSize: "20px", margin: "0px", color: clrs[1] }}>
              {days[d2]}, {dd} <sup>th</sup> of {months[mm]} in {yr}
            </p>
          </div>
        </Grid>
        <Grid item xs={3}>
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
    </div>
  );
}
