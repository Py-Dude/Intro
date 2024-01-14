import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Intro from "./Components/Intro/Intro.js";
// import styles of this component
import styles from "./App.module.css";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material/styles";
import { LineChart } from "@mui/x-charts/LineChart";

// import other components to use
import MasonryLayout from "./Components/MasonryLayout/MasonryLayout";
import ContainerCard from "./Components/ContainerCard/ContainerCard";
import Dropdown from "./Components/Elements/Dropdown/Dropdown";
import Effect from "./Components/Effects.js";

import Grid from "@mui/material/Grid";

// import json files
import images from "./Jsons/Images.json";

// App component
const App = () => {
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const lineData = [
    97, 93, 89, 94, 85, 82, 78.7, 77.4, 76.5, 92, 79.6, 93.5, 59, 77, 76, 82,
    78, 79, 80, 100,
  ];

  // dropdown items
  const ddItems = [
    {
      id: 1,
      title: "All Images",
      active: true,
    },
    {
      id: 2,
      title: "Topic Images",
      active: false,
    },
    {
      id: 3,
      title: "Nature Images",
      active: false,
    },
    {
      id: 4,
      title: "NFT Images",
      active: false,
    },
    {
      id: 5,
      title: "Space Images",
      active: false,
    },
  ];

  const [categoryImage, setCategoryImage] = useState(images.categories.all);

  const takeDdTitle = (ddTitle) => {
    setCategoryImage(() => {
      let categoryChoose = Object.keys(images.categories).filter((item) => {
        const titleSplited = ddTitle.toLowerCase().split(" ")[0];
        return item.toLowerCase().includes(titleSplited);
      });
      return [...images.categories[categoryChoose]];
    });
  };

  return (
    <>
      <Intro />
      <div
        className="flex justify-content-center"
        style={{ marginTop: "50px", padding: "50px" }}
      >
        <ContainerCard>
          <div
            className={`${styles["gallery-setting"]} flex justify-content-between align-items-center`}
          >
            <h1>Hobbies</h1>
            <Dropdown
              title="All Images"
              items={ddItems}
              liftingDdTextUp={takeDdTitle}
            />
          </div>
          <MasonryLayout images={categoryImage} />
          &nbsp; &nbsp;
          <h1>Academics</h1>
          <LineChart
            margin={{ top: 40, right: 40 }}
            id="myLineChart"
            xAxis={[
              {
                data: data,
                tickNumber: 10,
                label: "Percentage",
                labelStyle: {
                  fontSize: "25px", // Set the font size of the axis labels
                  fill: "#ffb9b9", // Set the color of the axis labels
                },
              },
            ]}
            series={[{ data: lineData }]}
            yAxis={[
              {
                tickNumber: 10,
                label: "Standard",
                labelStyle: {
                  fontSize: "25px", // Set the font size of the axis labels
                  fill: "#ffb9b9", // Set the color of the axis labels
                },
              },
            ]}
            width={1500}
            height={800}
            sx={{
              "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                fontSize: "500px",
                fill: "#ffb9b9", // Change the color of y-axis labels
              },
              "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                fontSize: "500px", // Change the font size of x-axis labels
                fill: "#ffb9b9", // Change the color of y-axis labels
              },
              "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                stroke: "hotpink", // Change the color
                strokeWidth: 4, // Change the width
              },
              "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                stroke: "hotpink", // Change the color
                strokeWidth: 4, // Change the width
              },
            }}
          />
        </ContainerCard>
      </div>
      <div></div>
    </>
  );
};

export default App;
