import { useEffect, useState } from "react";

type TCompleteGame = {
  guesses: number;
};
export default function CompletedGame({ guesses }: TCompleteGame) {
  const [refresh, setRefresh] = useState<Boolean>(false);

  useEffect(() => {
    if (refresh) {
      window.location.reload();
    }
  }, [refresh]);

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
        <button
          type="button"
          className="my-5 text-secondary bg-primary hover:bg-neutral focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:ring-primary dark:focus:ring-primary"
          onClick={() => setRefresh(true)}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
