interface Stats {
  numberOfGuesses: number;
  totalPairs: number;
  totalCorrect: number;
}

export default function Stats({
  totalPairs,
  totalCorrect,
  numberOfGuesses,
}: Stats) {
  return (
    <div>
      <dl className="mt-5 mx-5 grid grid-cols-1 gap-5 sm:grid-cols-2  my-10">
        <div className="overflow-hidden  bg-gray-100 px-4 py-5  border-gray-200 border rounded-md  sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">
            Total Correct Pairs / Total Number of Pairs
          </dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {totalCorrect} / {totalPairs}
          </dd>
        </div>
        <div className="overflow-hidden   bg-gray-100  px-4 py-5  border-gray-200 border rounded-lg sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">
            Total Number of Guesses
          </dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {numberOfGuesses}
          </dd>
        </div>
      </dl>
    </div>
  );
}
