import { useState } from "react";

import ImagesDisplay from "./components/ImagesDisplay";
import Score from "./components/Score";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <ImagesDisplay />
      <Score score={score} highScore={highScore} />
    </>
  );
}

export default App;
