import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import { FaReact, FaJsSquare } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { DiDocker } from "react-icons/di";
import React from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { FcLinux } from "react-icons/fc";

export default function Skills() {
  return (
    <>
      <Grid container spacing={2} sx={{ margin: "2rem" }}>
        <Grid item xs={4}>
          <MuiAlert
            style={{ margin: "1rem" }}
            className="scaleEffectAnimation"
            icon={<FaReact />}
            severity="error"
            sx={{ bgcolor: "#61dafb", color: "hotpink", fontWeight: "bold" }}
          >
            REACT
          </MuiAlert>
          <MuiAlert
            style={{ margin: "1rem" }}
            className="scaleEffectAnimation"
            icon={<FaJsSquare />}
            severity="warning"
            sx={{ bgcolor: "#f7df1e", color: "hotpink", fontWeight: "bold" }}
          >
            JAVASCRIPT
          </MuiAlert>
        </Grid>
        <Grid item xs={4}>
          <MuiAlert
            style={{ margin: "1rem" }}
            className="scaleEffectAnimation"
            icon={<SiPython />}
            severity="info"
            sx={{ bgcolor: "skin", color: "hotpink", fontWeight: "bold" }}
          >
            PYTHON
          </MuiAlert>
          <MuiAlert
            style={{ margin: "1rem" }}
            className="scaleEffectAnimation"
            icon={<FcLinux />}
            severity="warning"
            sx={{ bgcolor: "orange", color: "hotpink", fontWeight: "bold" }}
          >
            LINUX
          </MuiAlert>
        </Grid>
        <Grid item xs={4}>
          <MuiAlert
            style={{ margin: "1rem" }}
            className="scaleEffectAnimation"
            icon={<DiDocker />}
            severity="success"
            sx={{ bgcolor: "white", color: "hotpink", fontWeight: "bold" }}
          >
            DOCKER
          </MuiAlert>
          <MuiAlert
            style={{ margin: "1rem" }}
            className="scaleEffectAnimation"
            icon={<BiLogoPostgresql />}
            severity="warning"
            sx={{ bgcolor: "blue", color: "hotpink", fontWeight: "bold" }}
          >
            POSTGRESQL
          </MuiAlert>
        </Grid>
      </Grid>
      <div></div>
    </>
  );
}
