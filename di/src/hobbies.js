import React, { useEffect, useCallback, useState } from "react";
import "./hobbies.css";
import baby from "./assets/Mother.jpg";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-react-card-carousel-component
 */

const cardItems = [
  {
    id: 1,
    title: "Stacked Card Carousel",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla. Etiam sed interdum est.",
  },
  {
    id: 2,
    title: "Second Item",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "A Third Card",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla.",
  },
  {
    id: 4,
    title: "Fourth",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function determineClasses(indexes, cardIndex) {
  if (indexes.currentIndex === cardIndex) {
    return "active";
  } else if (indexes.nextIndex === cardIndex) {
    return "next";
  } else if (indexes.previousIndex === cardIndex) {
    return "prev";
  }
  return "inactive";
}

const CardCarousel = () => {
  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1,
  });

  const handleCardTransition = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex >= cardItems.length - 1) {
      setIndexes({
        previousIndex: cardItems.length - 1,
        currentIndex: 0,
        nextIndex: 1,
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === cardItems.length
            ? 0
            : prevState.currentIndex + 2,
      }));
    }
  }, [indexes.currentIndex]);
  const handlePreviousCardTransition = useCallback(() => {
    if (indexes.currentIndex <= 0) {
      setIndexes({
        previousIndex: cardItems.length - 1,
        currentIndex: cardItems.length - 1,
        nextIndex: 0,
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex:
          prevState.currentIndex - 2 === -1
            ? cardItems.length - 1
            : prevState.currentIndex - 2,
        currentIndex: prevState.currentIndex - 1,
        nextIndex: prevState.currentIndex,
      }));
    }
  }, [indexes.currentIndex]);

  //   useEffect(() => {
  //     const transitionInterval = setInterval(() => {
  //       handleCardTransition();
  //     }, 4000);

  //     return () => clearInterval(transitionInterval);
  //   }, [handleCardTransition, indexes]);

  //   return (
  //     <div className="container">
  //       <ul className="card-carousel">
  //         {cardItems.map((card, index) => (
  //           <li
  //             key={card.id}
  //             className={`card ${determineClasses(indexes, index)}`}
  //           >
  //             <h2>{card.title}</h2>
  //             <img src={baby} alt="not found" width="200px" height={"200px"}/>
  //             <p>{card.copy}</p>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  return (
    <div className="container">
      <div className="button-container">
        <button onClick={handlePreviousCardTransition}>&#8593;</button>

        <button onClick={handleCardTransition}>&#8595;</button>
      </div>

      <ul className="card-carousel">
        {cardItems.map((card, index) => (
          <li
            key={card.id}
            className={`card ${determineClasses(indexes, index)}`}
          >
            <h2>{card.title}</h2>
            <img src={baby} alt="not found" width="200px" height={"200px"} />
            <p>{card.copy}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardCarousel;
