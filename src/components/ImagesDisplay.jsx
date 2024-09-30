import { useState } from "react";
import Image from "./Image";
import { pokemonList } from "../pokemon";

export default function ImagesDisplay() {
  const startingList = shuffleArray(pokemonList);
  const [list, setList] = useState(startingList.slice(0, 10));

  // The Fisher-Yates algorithm
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  function selectImage() {
    const shuffledList = shuffleArray([...list]);
    setList(shuffledList);
  }
  return (
    <div className="w-9/12 mx-auto my-auto">
      <ul
        className="flex gap-16 flex-wrap justify-between"
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
