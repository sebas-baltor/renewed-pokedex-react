import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, previousPage } from "@/features/pagination/paginationSlice";
import { RootState } from "@/lib/store";
import { axiosInstance, getPokemonByName } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import PokemonImage from "@/components/pokemon/pokemon-image";
import { ButtonGhost } from "@/components/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageIndicator from "@/components/pagination/page-indicator";
import Title from "@/components/title";

export default function Home() {
  const page = useSelector((state: RootState) => state.pagination.page);
  const limit = useSelector((state: RootState) => state.pagination.limit);
  const offset = useSelector((state: RootState) => state.pagination.offset);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState<any>(null);
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    const { data } = await axiosInstance.get(`/pokemon?limit=${limit}`);
    setPokemons(data.results);
  };
  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    let slicedPokemons = pokemons.slice((page - 1) * 20, offset);
    setSelectedPokemons(slicedPokemons);
  }, [page, pokemons]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-slate-900 to-purple-500 text-white">
      <div className="text-center">
        <img
          src="./pokemon-logo.webp"
          alt="pokemon"
          className="object-contain max-w-sm"
        />
      </div>
      <div className="-translate-y-16 w-full max-w-5xl flex flex-col md:flex-row justify-evenly items-center mx-auto px-12">
        <div className="w-full max-w-lg mb-8 md:mb-0">
          {pokemon && (
            <Title text={pokemon.name} className="mb-3"/>
          )}
          <PokemonImage pokemon={pokemon} />
        </div>
        <div className="md:min-w-[50%] flex flex-col justify-between gap-6 min-w-72">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {selectedPokemons.map((pokemon: any) => (
              <div
                key={pokemon.name}
                onClick={async (e) => {
                  switch (e.detail) {
                    case 1:
                      const data = await getPokemonByName(pokemon.name);
                      setPokemon(data);
                      break;
                    case 2:
                      navigate(`/pokemon/${pokemon.name}`);
                      break;
                    default:
                      break;
                  }
                }}
                className="bg-white font-bold text-center bg-opacity-20 py-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                {pokemon.name}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 items-center gap-3">
            {page > 1 && (
              <ButtonGhost
                className="justify-self-start"
                onClick={() => dispatch(previousPage())}
              >
                <ChevronLeft />
              </ButtonGhost>
            )}
            <PageIndicator
              className="justify-self-center"
              isActive={true}
              page={page}
            />
            {page < 8 && (
              <ButtonGhost
                className="col-start-3 justify-self-end"
                onClick={() => dispatch(nextPage())}
              >
                <ChevronRight />
              </ButtonGhost>
            )}
          </div>
        </div>
      </div>
    </div>

    
  );
}
