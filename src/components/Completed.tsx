type TCompleteGame = {
  guesses: number;
};
export default function CompletedGame({ guesses }: TCompleteGame) {

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Congratulations!
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            You completed the game in {guesses} guesses.
          </p>
        </div>
      </div>
    </div>
  );
}
