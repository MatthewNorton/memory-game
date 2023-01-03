export interface ICards {
  cards: ICard[];
}

export interface ICard {
  cardId: string;
  imageUrl: string;
}

export interface ICardContainerComponent extends ICards {
  flippedCards: number[];
  matchedCardIds: string[];
  onClick: (index: number) => void;
  disabled: boolean;
}

export interface ICardComponent {
  card: ICard;
  onClick: () => void;
  flipped: boolean;
  matched: boolean;
  disabled: boolean;
}

export interface IStats {
  numberOfGuesses: number;
  totalPairs: number;
  totalCorrect: number;
}
