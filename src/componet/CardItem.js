import "../assest/CSS/style.css";
import React, { useState } from "react";
import { Howl } from "howler";
export const CardItem = ({ card }) => {
  const [image, setImage] = useState(card.imageCover);
  const [nextImage, setNextimage] = useState(true);
  //   const [selectedCards, setSelectedCards] = useState([]);
  const HandelFlipCaed = () => {
    if (nextImage) {
      setImage(card.image);
    } else {
      setImage(card.imageCover);
    }
    setNextimage(!nextImage);
  };

  //   const RestCard = () => {
  //     if (selectedCards[0].id != selectedCards[1].id) {
  //       HandelFlipCaed();
  //     } else if (selectedCards[0]) {
  //       <h1>GOod job</h1>;
  //     }
  //   };
  const CardClickSound = new Howl({
    src: [require("../assest/sounds/click-21156.mp3")],
  });

  return (
    <img
      onClick={() => {
        HandelFlipCaed();
        CardClickSound.play();
      }}
      className="cardsimagesetting"
      src={image}
      alt="card "
    />
  );
};
