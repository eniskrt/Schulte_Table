import { useState } from "react";
import PlayGame from "./PlayGame";
import HomePage from "./HomePage";

function App() {

  const [showGame, setShowGame] = useState(true);


  return (
    <>
    {
      showGame ? <HomePage setShowGame={setShowGame}/> : <PlayGame setShowGame={setShowGame}/>
    }
    
    </>
  );
}

export default App;
