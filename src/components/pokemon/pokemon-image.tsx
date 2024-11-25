import React from "react";

interface PokemonImageProps {
  pokemon: any;
}

const PokemonImage: React.FC<PokemonImageProps> = ({ pokemon }) => {
  return (
    <>
      {pokemon == null ? (
        <img
          className="w-full object-contain max-h-40 md:max-h-80"
          src={"./pokeball-pokemon.webp"}
          alt={"pokeball"}
        />
      ) : pokemon != null && pokemon.sprites.other.dream_world.front_default ? (
        <img
          className="w-full object-contain max-h-40 md:max-h-80"
          src={pokemon ? pokemon.sprites.other.dream_world.front_default : ""}
          alt={pokemon ? pokemon.name : ""}
        />
      ) : (
        <img
          className="w-full object-contain max-h-80"
          src={pokemon ? pokemon.sprites.front_default : ""}
          alt={pokemon ? pokemon.name : ""}
        />
      )}
    </>
  );
};

export default PokemonImage;
