import { useState } from "react";

export default function Image({ pokemon }) {
  return (
    <li>
      <img
        id={pokemon.id}
        src={pokemon.image}
        alt={pokemon.name}
        className="w-72 h-72 p-4 m-2 hover:border-orange-500 hover:border transition-all duration-300 cursor-pointer"
      />
    </li>
  );
}
