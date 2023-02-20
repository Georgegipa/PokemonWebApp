import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Pokemon } from "../models/Models";
import CardMedia from "@mui/material/CardMedia";
import { Box, CardActionArea } from "@mui/material";
import { autoCapitalize } from "../utils/utils";
import { isFavoritePokemon } from "../utils/LocalStorageUtils";
import { AiFillHeart } from "react-icons/ai";

const PokeCard: React.FC<Pokemon> = (pokemon) => {
  function isFavorite() {
    if (isFavoritePokemon(pokemon.id)) {
      return <AiFillHeart fontSize="large" color="red" />;
    }
  }

  return (
    <Card sx={{ elevation: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          width="200"
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          image={pokemon.image}
        />
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography align="center" variant="h5">
            {isFavorite()}
            {autoCapitalize(pokemon.name)}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default PokeCard;
