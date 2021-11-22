import { Grid } from "@mui/material";
import React from "react";
import { clrs } from "../../../DataSheet";
import SingleApp from "../Components/SingleApp";

export default function AppSet(prop) {
  return (
    <div style={{ display: "flex" }}>
      <Grid container spacing={2}>
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
        <Grid item xs={4}>
          <div
            style={{
              fontSize: "100px",
              textAlign: "center",
              marginRight: "auto",

              borderRadius: "25px",
              padding: "0px 10px",
              marginTop: "40px",
            }}
          >
            <a
              href={prop.link}
              style={{
                textDecoration: "none",
                backgroundColor: clrs[7],
                padding: "0px 15px",
                borderRadius:"25px",
                border:"red solid 5px"

              }}
            >
              {prop.txt}
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
