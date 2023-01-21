import { ICardComponent } from "@/Types/Types";

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
      className={
        `card ${
          flipped ?
          "flipped" : ""
        }
        ${
          matched ?
          "flipped grayscale matched cursor-none" : ""
        }
      `}
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
