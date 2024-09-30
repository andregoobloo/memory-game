import { useEffect, useState } from "react";
import Image from "./Image";
import { pokemonList } from "../pokemon";
import shuffleArray from "../helpers/shuffleArray";

export default function ImagesDisplay({
  setScore,
  score,
  highScore,
  setHighScore,
}) {
  const startingList = shuffleArray(pokemonList);
  const [list, setList] = useState(startingList.slice(0, 10));
  const [currentImage, setCurrentImage] = useState("");

  function gameOver() {
    if (score > highScore) setHighScore(score);
    setCurrentImage("");
    setScore(0);
  }

  // Check if user has won the game
  useEffect(() => {
    if (score === list.length) {
      gameOver();
      alert("You win!");
    }
  }, [score]);

  // Checking if user's selection is correct
  function selectImage(e) {
    if (e.target.classList.contains(".ignore")) return;

    const selectedImage = e.target.id;

    if (currentImage === "") {
      setCurrentImage(selectedImage);
    } else if (currentImage !== selectedImage) {
      gameOver();
      alert("game over");
    }

    if (currentImage === selectedImage) {
      setScore(score + 1);
      setCurrentImage("");
    }

    const shuffledList = shuffleArray([...list]);
    setList(shuffledList);
  }

  return (
    <div className="w-9/12 mx-auto my-auto">
      <ul
        className="flex gap-16 flex-wrap justify-between .ignore"
        onClick={selectImage}
      >
        {list
          // Todo : add ability for user to adjust array size
          .map((pokemon) => (
            <Image pokemon={pokemon} key={pokemon.id} />
          ))}
      </ul>
    </div>
  );
}
