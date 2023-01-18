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
        className="lg:max-w-full mx-auto grid grid-cols-2 sm:grid-cols-4 md:gap-x-2 lg:gap-x-1 lg:gap-y-1 xl:grid-cols-6"
      >
        {cards.map((card, index) => (
          <li className="m-6" key={index}>
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
