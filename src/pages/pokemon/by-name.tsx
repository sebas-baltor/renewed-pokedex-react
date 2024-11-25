import PokemonImage from "@/components/pokemon/pokemon-image";
import StatLine from "@/components/pokemon/stat-line";
import Title from "@/components/title";
import { ChevronLeft } from "lucide-react";
import { Link, useLoaderData } from "react-router-dom";
import { iconsForStats } from "@/constants/icons-for-stats";
import React from "react";
import Badge from "@/components/badge";

export default function PokemonByName() {
  const { pokemon } = useLoaderData() as { pokemon: any };
  return (
    <div className="min-h-screen flex flex-col gap-6  justify-center bg-gradient-to-r from-slate-900 to-purple-500 text-white">
      <div className="w-full max-w-5xl mx-auto px-12 mt-6">
        <Link
          to="/"
          className="text-lg font-bold text-white hover:text-gray-300 transition-colors duration-300 inline-flex justify-center items-center gap-2 "
        >
          <ChevronLeft className="inline-block" size={24} />
          Back
        </Link>
      </div>
      <div className="w-full max-w-5xl mx-auto px-12">
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 w-full">
          <div className="w-full max-w-lg mb-8 md:mb-0">
            <Title text={pokemon?.name} className="mb-3" />
            <PokemonImage pokemon={pokemon} />
          </div>
          <div className="w-full flex flex-col gap-3 md:gap-6 justify-between h-full">
            <div>
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                Stats
              </h2>
              <ul className="list-none p-0">
                {pokemon.stats.map((stat: any, i: number) => (
                  <StatLine
                    key={`stat-${i}`}
                    icon={React.createElement(iconsForStats[i].icon)}
                    bgColor={iconsForStats[i].bgColor}
                    color={iconsForStats[i].color}
                    stat={stat}
                  />
                ))}
              </ul>
            </div>
            <div className="flex flex-row gap-3 md:gap-6">
              <div className="bg-white bg-opacity-20 p-2 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                  Type
                </h2>
                <ul className="list-none p-0 flex gap-2">
                  {pokemon.types.map((type: any) => (
                    <li key={type.type.name}>
                      <Badge>{type.type.name}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white bg-opacity-20 p-2 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                  Abilities
                </h2>
                <ul className="list-none p-0 flex gap-2">
                  {pokemon.abilities.map((ability: any) => (
                    <li key={ability.ability.name}>
                      <Badge>{ability.ability.name}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
