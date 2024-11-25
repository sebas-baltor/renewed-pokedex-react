import { Params } from "react-router-dom";
import { getPokemonByName } from "@/lib/utils";

export const pokemonByNameLoader = async ({params}:{params:Params}) => {
  const { name } = params as { name: string };
  let pokemon = await getPokemonByName(name);
  return {pokemon};
};