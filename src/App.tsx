import MemoryGame from "./features/MemoryGame";
import { CardData } from "./data/CardData";
import { shuffle } from "./utils/Shuffle";
import reactIcon from "./assets/reactIcon.svg";
import typescriptIcon from "./assets/typescriptIcon.svg";
import tailwindIcon from "./assets/tailwindIcon.svg";

function App() {
  const shuffledCards = shuffle(CardData);
  const codeIcons = [reactIcon, typescriptIcon, tailwindIcon];
  return (
    <div className="App pt-5  max-w-7xl mx-auto my-0">
      <h1 className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
        Memory Game Built with
        <>
        {codeIcons.map((icon, key) => {
          return <img key={key} className="headline-icons" src={icon} />
        })}
        </>
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
