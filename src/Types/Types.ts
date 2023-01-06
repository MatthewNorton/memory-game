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
export type HeaderProps= {
  logo: string;
  title: string;
};
export type IconProps = {
  [key: string]: string;
}

export type State = {
  guesses: number;
  flippedCards: number[];
  matchedCardIds: string[];
  disabled: boolean;
  gameOver: boolean;
};
