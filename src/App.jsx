import { useState } from "react";

import ImagesDisplay from "./components/ImagesDisplay";
import Score from "./components/Score";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <ImagesDisplay
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
      <Score score={score} highScore={highScore} />
    </>
  );
}

export default App;
