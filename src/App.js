import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Intro from "./Components/Intro/Intro.js";
// import styles of this component
import styles from "./App.module.css";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material/styles";
import { LineChart } from "@mui/x-charts/LineChart";
import { HiArrowNarrowRight } from "react-icons/hi";

// import other components to use
import MasonryLayout from "./Components/MasonryLayout/MasonryLayout";
import ContainerCard from "./Components/ContainerCard/ContainerCard";
import Dropdown from "./Components/Elements/Dropdown/Dropdown";
import Effect from "./Components/Effects.js";
import logo from "./assets/Ooty.jpg";
import { Link } from "react-scroll";
import Skills from "./Components/Skills/Skills.js";
import Experience from "./Components/Experience/Experience.js";

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
      title: "Family Images",
      active: true,
    },
    {
      id: 2,
      title: "Second Life",
      active: false,
    },
    {
      id: 3,
      title: "Football Images",
      active: false,
    },
    {
      id: 4,
      title: "Travel Images",
      active: false,
    },
    {
      id: 5,
      title: "NFT Images",
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
        className="about"
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "2rem",
          justifyContent: "center",
          marginTop: "3rem",
          alignItems: "center",
          marginLeft: "2rem",
          marginBottom: "2rem",
        }}
      >
        <Link
          to="about"
          smooth
          duration={500}
          //  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
        >
          About Me
          <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight size={25} className="ml-3" />
          </span>
        </Link>
      </div>

      <div
        style={{ margin: "2rem" }}
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <br />
          <br />
          <p
            className="text-gray-500 py-4 max-w-md"
            style={{ marginRight: "3rem" }}
          >
            <span style={{ color: "teal", fontWeight: "bold" }}>
              {" "}
              🚀 Source: Jhansi
            </span>
            <br />
            <br />I was born in Jhansi, a historic city in Uttar Pradesh that is
            famous for its role in the Indian Rebellion of 1857.
            <br />
            <br />
            <br />I spent my childhood in Tehri Garhwal, a beautiful district in
            Uttarakhand that is known for its natural beauty and cultural
            heritage.
            <br />
            <br />
            <br />I moved to Lucknow, the capital of Uttar Pradesh, for my high
            school education. Lucknow is a city of nawabs and kebabs, where I
            learned to appreciate the art, cuisine, and architecture of the
            Mughal era. I
            <br />
            <br />
            <br />I then went to Chennai, the cultural capital of South India,
            for my college studies. Chennai is a vibrant and cosmopolitan city
            that exposed me to different languages, religions, and traditions
            for four years. I graduated from VIT Chennai with a degree in
            Computer Science.
            <br />
            <br />
            <br />I currently work in Kochi, a coastal city in Kerala that is a
            hub of trade and tourism. Kochi is a blend of colonial and modern
            influences, where I enjoy the scenic views and the friendly people.
          </p>
        </div>
        <div style={{ float: "left" }}>
          <img
            style={{ border: "5px solid hotpink" }}
            src={logo}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
      <div>
        <h1
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "2rem",
            justifyContent: "center",
            marginTop: "3rem",
            alignItems: "center",
            marginLeft: "2rem",
            marginBottom: "2rem",
          }}
        >
          Skills
        </h1>

        <Skills />
      </div>
      <div>
        <h1
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "2rem",
            justifyContent: "center",
            marginTop: "3rem",
            alignItems: "center",
            marginLeft: "2rem",
            marginBottom: "2rem",
          }}
        >
          Experience
        </h1>
        <Experience />
      </div>
      <h1
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "2rem",
          justifyContent: "center",
          marginTop: "3rem",
          alignItems: "center",
          marginLeft: "2rem",
          marginBottom: "2rem",
        }}
      >
        Academic Record
      </h1>

      <LineChart
        id="myLineChart"
        xAxis={[
          {
            data: data,
            tickNumber: 10,
            label: "Percentage",
            labelStyle: {
              fontSize: "20px", // Set the font size of the axis labels
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
              fontSize: "20px", // Set the font size of the axis labels
              fill: "#ffb9b9", // Set the color of the axis labels
              transform: "translateX(-180px)",
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

      <div
        className="flex justify-content-center"
        style={{ marginTop: "50px", padding: "50px" }}
      >
        <ContainerCard>
          <div
            className={`${styles["gallery-setting"]} flex justify-content-between align-items-center`}
          >
            <h1>Memories</h1>
            <Dropdown
              title="All images"
              items={ddItems}
              liftingDdTextUp={takeDdTitle}
            />
          </div>
          <MasonryLayout images={categoryImage} />
        </ContainerCard>
      </div>
    </>
  );
};

export default App;
