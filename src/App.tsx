// components
import Footer from "./Components/Footer";
import Game from "./Components/Game";
import Header from "./Components/Header";
import { CardData } from "./Data/Data";
import { shuffle } from "./Utils/Shuffle";

// assets
import logo from "@/assets/logo.svg";

function App() {
  const shuffledCards = shuffle(CardData);

  return (
    <div className="App">
      <header className="bg-primary ">
        <Header
          logo={logo}
          title="Memory Game"
        />
      </header>
      <main className="pt-5 max-w-6xl mx-auto my-0">
        <Game cards={shuffledCards} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
