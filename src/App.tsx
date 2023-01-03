import MemoryGame from "./features/MemoryGame";
import { CardData } from "./data/CardData";
import { shuffle } from "./utils/Shuffle";
import reactIcon from "./assets/reactIcon.svg";
import typescriptIcon from "./assets/typescriptIcon.svg";
import tailwindIcon from "./assets/tailwindIcon.svg";

function App() {
  const shuffledCards = shuffle(CardData);
  return (
    <div className="App pt-5  max-w-7xl mx-auto my-0">
      <h1 className="text-center text-4xl font-medium leading-2 text-gray-900">
        Memory Game Built with
        <img className="headline-icons" src={reactIcon} />
        <img className="headline-icons" src={typescriptIcon} />
        <img className="headline-icons" src={tailwindIcon} />
      </h1>
      <div className="mx-auto px-4 text-center sm:px-6 lg:px-8">
        <MemoryGame cards={shuffledCards} />
      </div>
      <div className="block max-w-6xl  px-12 py-10">
        <p className="">
          Icons created by
          <a href="https://illlustrations.co" target="_blank">
            vijay verma
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
