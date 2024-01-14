import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Family from "./family";

const BackgroundWithScrollingText = () => {
  const { scrollYProgress } = useScroll();
  // const translateY = useTransform(scrollYProgress, [0, 1], ['100vh', '-50vh']);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Transform scrollYProgress to translateY value for the text
  const translateY = useTransform(scrollYProgress, [0, 1], ["100vh", "100vh"]);

  // Transform scrollYProgress to opacity value for the background
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <>
      <div
        style={{
          position: "relative",
          height: "200vh", // Ensure the container is tall enough to allow for scrolling
        }}
      >
        <div
          style={{
            backgroundImage: "url(/Logo1.gif)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100%",
            opacity: 1 - scrollPosition / 500, // Adjust the divisor to control the speed of the fade
            transition: "opacity 0.5s ease-out",

            position: "fixed", // Use fixed to keep the image in place on scroll
          }}
        />
        <motion.div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            height: "100vh",
            display: "flex",
            alignItems: "flex-end", // Start with text at the bottom
            justifyContent: "center",
            color: "pink",
            fontSize: "5rem",

            translateY: translateY, // This will animate the text from bottom to top
          }}
        >
          SHIVA BAJPAI
        </motion.div>
      </div>
      <div>
      </div>
    </>
  );
};

export default BackgroundWithScrollingText;
