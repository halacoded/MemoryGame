import React from "react";
import { CardItem } from "./CardItem";
import cards from "../assest/data/cards";
export const CardList = () => {
  const duplicateCards = cards.reduce((array, card) => {
    array.push(card, card);
    return array;
  }, []);
  //shifle cards
  duplicateCards.sort(() => Math.random() - 0.5);

  const Displaylist = duplicateCards.map((card) => {
    return <CardItem card={card} />;
  });

  return <div className="cardscontainer">{Displaylist} </div>;
};
