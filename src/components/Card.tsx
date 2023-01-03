import { ICardComponent } from "../interfaces/Interfaces";

export default function Card({
  card,
  onClick,
  flipped,
  matched,
  disabled,
}: ICardComponent) {
  return (
    <button
      type="button"
      className={`card ${flipped || matched ? "flipped shadow-2xl" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      <img
        className="before:hidden rounded-lg h-full object-cover w-full"
        src={card.imageUrl}
        alt={card.cardId}
      />
    </button>
  );
}
