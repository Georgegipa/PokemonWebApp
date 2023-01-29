import { useEffect, useState } from "react";
import { Pokemon } from "./models/Models";
import PokeCard from "./components/PokeCard";
import {
  AppBar,
  Container,
  Drawer,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import DrawerItems from "./components/DrawerItem";
import { fetchAllPokemon } from "./api/APIcalls";
import { getFavoritePokemon, initFavorites } from "./utils/LocalStorageUtils";

const Title: string = "Pokemon WebApp";

function App() {
  //use state to store the pokemon data in an array
  const [pokemons, setPokemon] = useState<Pokemon[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>(
    {} as Pokemon
  );

  useEffect(() => {
    document.title = Title;
    fetchAllPokemon().then(setPokemon);
    initFavorites();
  }, []);

  const handleClick = (pokemon: Pokemon) => {
    setOpen(true);
    setSelectedPokemon(pokemon);
  };

  function sortPokemon(getFavorites: boolean = false) {
    let favoriteIds = getFavoritePokemon();
    if (getFavorites) {
      return pokemons.filter((pokemon) => favoriteIds.includes(pokemon.id));
    } else {
      return pokemons.filter((pokemon) => !favoriteIds.includes(pokemon.id));
    }
  }

  function generateGrid(pokemons: Pokemon[]) {
    return pokemons.map((pokemon) => {
      return (
        <Grid
          item
          key={pokemon.id}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          onClick={() => handleClick(pokemon)}
        >
          <PokeCard {...pokemon} />
        </Grid>
      );
    });
  }

  return (
    //react fragment
    <>
      <AppBar position="relative">
        <Toolbar>
          <h1>{Title}</h1>
        </Toolbar>
      </AppBar>
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        <DrawerItems {...selectedPokemon} />
      </Drawer>
      <main>
        <div>
          {/* use container to horizontally center the content */}
          <Container maxWidth="lg">
            <Grid container spacing={4} my={1}>
              {generateGrid(sortPokemon(true))}
              {generateGrid(sortPokemon(false))}
            </Grid>
          </Container>
        </div>
      </main>
      <footer>
        <Typography variant="h6" align="center" gutterBottom>
          Developed by: <a href="https://github.com/Georgegipa">Georgegipa</a>
        </Typography>
      </footer>
    </>
  );
}

export default App;
