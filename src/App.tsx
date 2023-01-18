// components
import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";
import { CardData } from "./data/Data";
import { shuffle } from "./utils/Shuffle";

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
      <main className="pt-5 max-w-7xl mx-auto my-0">
        <Game cards={shuffledCards} />
      </main>
      <footer className="max-w-7xl mx-auto my-0">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
