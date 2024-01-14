import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Intro from "./Components/Intro/Intro.js";
// import styles of this component
import styles from "./App.module.css";
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material/styles';
import { LineChart } from '@mui/x-charts/LineChart';

// import other components to use
import MasonryLayout from "./Components/MasonryLayout/MasonryLayout";
import ContainerCard from "./Components/ContainerCard/ContainerCard";
import Dropdown from "./Components/Elements/Dropdown/Dropdown";
import Effect from "./Components/Effects.js";

// import json files
import images from "./Jsons/Images.json";

// App component
const App = () => {
  const data = [1, 2, 3, 5, 8, 10];
const lineData = [2, 5.5, 2, 8.5, 1.5, 5];

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
          <LineChart
 xAxis={[{ data: data }]}
 series={[{ data: lineData }]}
 width={500}
 height={300}
/>

        </ContainerCard>
      </div>
      <div>

      </div>
    </>
  );
};

export default App;
