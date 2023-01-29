import * as React from "react";
import {
  Box,
  Card,
  Container,
  Fab,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { Pokemon } from "../models/Models";
import {
  autoCapitalize,
  decimetersToMeters,
  hectogramsToKilos,
  removeMinusSign,
} from "../utils/utils";
import CardMedia from "@mui/material/CardMedia";
import { GiWeight } from "react-icons/gi";
import { MdHeight } from "react-icons/md";
import { BsFillShieldFill } from "react-icons/bs";
import { AiFillHeart, AiOutlineQuestionCircle } from "react-icons/ai";
import {
  GiFist,
  GiFireBreath,
  GiRunningShoe,
  GiShieldBash,
} from "react-icons/gi";
import TypeChip from "./TypeChip";
import { IoMdHeart } from "react-icons/io";
import { toggleFavoritePokemon } from "../utils/LocalStorageUtils";

function getIcon(str: string) {
  switch (str) {
    case "hp":
      return <AiFillHeart fontSize="large" color="red" />;
    case "attack":
      return <GiFist fontSize="large" color="brown" />;
    case "defense":
      return <BsFillShieldFill fontSize="large" color="blue" />;
    case "special-attack":
      return <GiFireBreath fontSize="large" color="orange" />;
    case "special-defense":
      return <GiShieldBash fontSize="large" color="green" />;
    case "speed":
      return <GiRunningShoe fontSize="large" color="purple" />;
    default:
      return <AiOutlineQuestionCircle fontSize="large" />;
  }
}

const DrawerItems: React.FC<Pokemon> = (pokemon) => {

  function favoritePokemon() {
    toggleFavoritePokemon(pokemon.id);
  }

  return (
    <Box
      sx={{
        width: { xs: "80vw", sm: "50vw", md: "40vw", lg: "30vw", xl: "20vw" },
        mt: 2,
      }}
    >
      <Container>
        <Typography align="center" variant="h4">
          {autoCapitalize(pokemon.name)}
        </Typography>
        {/* card media requires a card , set its elevation to 0 so it isn't visible*/}
        <Card elevation={0}>
          <CardMedia
            component="img"
            height="200"
            width="200"
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            image={pokemon.image}
          />
        </Card>
        {/* make a grid that its first column takes 80% where the types are show  
        and the 2nd 20% where the favorites fab is shown*/}
        <Grid container alignItems="center" justifyContent="center" spacing={1}>
          <Grid item xs={10}>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              spacing={1}
            >
              {pokemon.types.map((type) => (
                <Grid item key={type}>
                  <TypeChip type={type} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Fab size="medium" color="secondary" onClick={favoritePokemon}>
              <IoMdHeart fontSize="large" />
            </Fab>
          </Grid>
        </Grid>
        <TableContainer component={Paper} sx={{ my: 1 }}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  <MdHeight />
                  Height
                </TableCell>
                <TableCell align="right">
                  {decimetersToMeters(pokemon.height)} m
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <GiWeight />
                  Weight
                </TableCell>
                <TableCell align="right">
                  {hectogramsToKilos(pokemon.weight)} kg
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer component={Paper} sx={{ my: 1 }}>
          <Table aria-label="simple table">
            <TableBody>
              {pokemon.stats.map((pstat) => (
                <TableRow key={pstat[0]}>
                  <TableCell component="th" scope="row">
                    {getIcon(pstat[0])}{" "}
                    {removeMinusSign(autoCapitalize(pstat[0]))}
                  </TableCell>
                  <TableCell align="right">{pstat[1]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default DrawerItems;
