//a key with name favoritePokemon is created in local storage and the value is an empty array
//the value array is saved as a json string in local storage and is parsed back to an array when needed

const favoritePokemonKey = "favoritePokemon";

export function initFavorites() {
  if (!localStorage.getItem(favoritePokemonKey)) {
    localStorage.setItem(favoritePokemonKey, JSON.stringify([]));
  }
}

export function getFavoritePokemon(): number[] {
  const favoritePokemon = localStorage.getItem(favoritePokemonKey);
  if (favoritePokemon) {
    return JSON.parse(favoritePokemon);
  }
  return [];
}

export function isFavoritePokemon(pokemonId: number): boolean {
  const favoritePokemon = getFavoritePokemon();
  return favoritePokemon.includes(pokemonId);
}

function addFavoritePokemon(pokemonId: number) {
  const favoritePokemon = getFavoritePokemon();
  if (!favoritePokemon.includes(pokemonId)) {
    favoritePokemon.push(pokemonId);
    localStorage.setItem(favoritePokemonKey, JSON.stringify(favoritePokemon));
  }
}

function removeFavoritePokemon(pokemonId: number) {
  const favoritePokemon = getFavoritePokemon();
  const index = favoritePokemon.indexOf(pokemonId);
  if (index > -1) {
    favoritePokemon.splice(index, 1);
    localStorage.setItem(favoritePokemonKey, JSON.stringify(favoritePokemon));
  }
}

export function toggleFavoritePokemon(pokemonId: number) {
  if (isFavoritePokemon(pokemonId)) {
    removeFavoritePokemon(pokemonId);
  } else {
    addFavoritePokemon(pokemonId);
  }
}
