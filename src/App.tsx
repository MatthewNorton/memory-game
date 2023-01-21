// components
import Footer from "@/components/Footer";
import Game from "@/components/Game";
import Header from "@/components/Header";
import { CardData } from "@/Data/Data";
import { Shuffle } from "@/Utils/Shuffle";

// assets
import logo from "@/assets/logo.svg";

function App() {
  const shuffledCards = Shuffle(CardData);

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
