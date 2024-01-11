import { motion, useAnimation, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Father from "./assets/Father.jpg";
import Mother from "./assets/Mother.jpg";
import Brother from "./assets/Brother.jpg";
import "./family.css";

const data = [
  {
    id: 1,
    text: "Father",
    description: "          Civil Engineer",
    url: Father,
  },
  {
    id: 2,
    text: "Mother",
    description: "          Homemaker",
    url: Mother,
  },
  {
    id: 3,
    text: "Brother",
    description: "          Professor",
    url: Brother,
  },
];

// function Images({ text, url }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll();
//   const imageScale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
//   const textOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
//   const textY = useTransform(scrollYProgress, [0.5, 1], [100, 0]);

//   return (
//     <section ref={ref}>
//       <motion.div style={{ scale: imageScale }}>
//         <img src={url} alt={text} />
//       </motion.div>
//       <motion.h2 style={{ opacity: textOpacity, y: textY }}>{text}</motion.h2>
//     </section>
//   );
// }

function Images({ text, url, description }) {
  const ref = useRef(null);
  // Define variants for the image and text animations
  const imageVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };
  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="family">
      <motion.div
        ref={ref}
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
      >
        <img src={url} alt={text} />
      </motion.div>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 5, delay: 5 }}
      >
        {text}
        <p>{description}</p>
      </motion.h2>
    </section>
  );
}

export default function App() {
  return (
    <div className="App">
      {data.map((img) => (
        <Images
          key={img.id}
          text={img.text}
          url={img.url}
          description={img.description}
        />
      ))}
    </div>
  );
}
