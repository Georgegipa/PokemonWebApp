import * as React from "react";
import { Chip } from "@mui/material";

const getColorForType = (color: string) => {
  //convert to string if not already and remove quotes
  if (typeof color !== "string") {
    color = String(color);
    color = color.replace(/['"]+/g, "");
  }

  switch (color) {
    case "normal":
      return "grey";
    case "fire":
      return "red";
    case "water":
      return "blue";
    case "grass":
      return "green";
    case "electric":
      return "yellow";
    case "ice":
      return "lightblue";
    case "fighting":
      return "brown";
    case "poison":
      return "purple";
    case "ground":
      return "orange";
    case "flying":
      return "lightgreen";
    case "psychic":
      return "pink";
    case "bug":
      return "darkgreen";
    case "rock":
      return "darkgrey";
    case "ghost":
      return "black";
    case "dragon":
      return "darkred";
    case "dark":
      return "darkbrown";
    case "steel":
      return "lightgrey";
    case "fairy":
      return "lightpink";
    default:
      console.log("color not found" + color);
      return "lightgrey";
  }
};

const TypeChip: React.FC<{ type: string }> = ({ type }) => (
  <Chip label={type} sx={{ bgcolor: getColorForType(type) }} />
);

export default TypeChip;
