import { Pokemon } from "../models/Models";

const API: string = "https://pokeapi.co/api/v2/pokemon?limit=30";

async function fetchPokemon(): Promise<string[]> {
  const response = await fetch(API);
  const data = await response.json();
  return data.results.map((pokemon: any) => {
    return pokemon.url;
  });
}

async function fetchPokemonData(pokeURL: string): Promise<Pokemon> {
  const response = await fetch(pokeURL);
  const data = await response.json();
  return {
    id: data.id,
    name: data.name,
    image: data.sprites.other.dream_world.front_default,
    weight: data.weight,
    height: data.height,
    types: data.types.map((type: any) => {
      return type.type.name;
    }),
    stats: data.stats.map((stat: any) => {
      return [stat.stat.name,stat.base_stat];
    })
  };
}

export async function fetchAllPokemon(): Promise<Pokemon[]> {
  const pokemon = await fetchPokemon();
  const pokemonData = await Promise.all(
    pokemon.map((pokemon) => fetchPokemonData(pokemon))
  );
  return pokemonData;
}