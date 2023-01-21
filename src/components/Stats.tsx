import { IStats } from "@/Types/Types";
export default function Stats({
  totalPairs,
  totalCorrect,
  numberOfGuesses,
}: IStats) {
  return (
    <div>
      <dl className="mt-5 mx-2 flex gap-5 sm:grid-cols-2 my-10">
        <div className="overflow-hidden  bg-neutral text-secondary px-4 py-5  border-gray-200 border rounded-md  sm:p-6">
          <dt className="truncate text-sm font-medium">
            Total Correct Pairs / Total Number of Pairs
          </dt>
          <dd className="mt-1 text-6xl font-semibold tracking-tight">
            {totalCorrect} / {totalPairs}
          </dd>
        </div>
        <div className="overflow-hidden   bg-neutral text-secondary  px-4 py-5  border-gray-200 border rounded-lg sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">
            Total Number of Guesses
          </dt>
          <dd className="mt-1 text-6xl font-semibold tracking-tight text-gray-900">
            {numberOfGuesses}
          </dd>
        </div>
      </dl>

    </div>
  );
}
