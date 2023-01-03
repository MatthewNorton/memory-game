import { useState, useEffect } from "react";
import { ICards } from "../interfaces/Interfaces";
import CardGrid from "../components/CardContainer";
import Stats from "../components/Stats";

type State = {
	guesses: number;
	flippedCards: number[];
	matchedCardIds: string[];
	disabled: boolean;
	gameOver: boolean;
};

export default function MemoryGame({ cards }: ICards) {
	const [state, setState] = useState<State>({
		guesses: 0,
		flippedCards: [],
		matchedCardIds: [],
		disabled: false,
		gameOver: false
	});
	const totalPairs = cards.length / 2;

	useEffect(() => {
		if (state.flippedCards.length === 2) {
			setState({ ...state, disabled: true });
			setTimeout(() => {
				const [index1, index2] = state.flippedCards;
				const card1 = cards[index1];
				const card2 = cards[index2];
				if (card1.cardId === card2.cardId) {
					setState((prevState) => ({
						...prevState,
						matchedCardIds: [
							...prevState.matchedCardIds,
							card1.cardId
						],
						flippedCards: [],
						disabled: false
					}));
				} else {
					setState((prevState) => ({
						...prevState,
						guesses: prevState.guesses + 1,
						flippedCards: [],
						disabled: false
					}));
				}
			}, 1000);
		}
		if (state.matchedCardIds.length === totalPairs) {
			setState({ ...state, gameOver: true });
		}
	}, [state.flippedCards, cards]);

	const handleCardClick = (index: number) => {
		if (
			state.disabled ||
			state.flippedCards.includes(index) ||
			state.matchedCardIds.includes(cards[index].cardId)
		) {
			return;
		}
		setState((prevState) => ({
			...prevState,
			flippedCards: [...prevState.flippedCards, index]
		}));
	};

	return (
		<div className="memory-game">
			<Stats
				numberOfGuesses={state.guesses}
				totalPairs={totalPairs}
				totalCorrect={state.matchedCardIds.length}
			/>
			{state.gameOver ? (
				<div className="text-4xl my-12">Game Completed, Congratulations!</div>
			) : (
				<CardGrid
					cards={cards}
					flippedCards={state.flippedCards}
					matchedCardIds={state.matchedCardIds}
					onClick={handleCardClick}
					disabled={state.disabled}
				/>
			)}
		</div>
	);
}
