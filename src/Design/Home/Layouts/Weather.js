import { Grid } from "@mui/material";
import React from "react";
import RainIcn from "../Components/RainIcn";

export default function Weather() {
  const d = new Date();
  let yr = d.getFullYear();
  let mm = d.getMonth();
  let dd = d.getDate();
  let d2 = d.getDay();
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        backgroundColor: "white",
        width: "40%",
      }}
    >
      <p style={{ margin: "5px", fontSize: "25px",color:"#28A0DD",fontWeight:"bold" }}>Weather Alert</p>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          padding: "8px",
          paddingTop: "0px",
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={8}>
            <div
              style={{
                backgroundColor: "#47BDFF",
                borderRadius: "20px 0px 0px 20px",
                padding: "30px 40px",
                textAlign: "left",
                color: "white",
              }}
            >
              <p style={{ margin: "0px", fontSize: "50px" }}>Colombo</p>
              <p style={{ margin: "0px", fontSize: "25px" }}>
                {yr}-{mm}-{dd}
              </p>
              <hr />
              <p
                style={{ margin: "0px", fontSize: "55px", fontWeight: "bold" }}
              >
                30 C
              </p>
              <p style={{ margin: "0px" }}>27 / 17 C</p>
              <p style={{ margin: "0px", fontSize: "25px" }}>
                Moderate or Heavy rain shower
              </p>
              <hr />
              <p style={{ margin: "0px", fontSize: "20px" }}>Wind : 7 km/h</p>
              <p style={{ margin: "0px", fontSize: "20px" }}>Humidity : 77 %</p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div
              style={{
                backgroundColor: "#28A0DD",
                borderRadius: "0px 20px 20px 0px",
                height: "100%",
              }}
            >
              <RainIcn />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
