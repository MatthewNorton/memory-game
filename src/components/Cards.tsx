import React from "react";
import Card from "./Card";
import { ICardContainerComponent } from "../Types/Types";

export default function CardContainer({
  cards,
  flippedCards,
  matchedCardIds,
  onClick,
  disabled,
}: ICardContainerComponent) {
  return (
    <>
      <ul
        role="list"
        className="lg:max-w-full mx-auto grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6"
      >
        {cards.map((card, index) => (
          <li className="m-2 lg:m-4" key={index}>
            <Card
              card={card}
              onClick={() => onClick(index)}
              flipped={flippedCards.includes(index)}
              matched={matchedCardIds.includes(card.cardId)}
              disabled={disabled}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
