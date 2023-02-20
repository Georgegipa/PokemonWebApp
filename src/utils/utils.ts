export function autoCapitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function decimetersToMeters(decimeters: number) {
  return decimeters / 10;
}

export function hectogramsToKilos(meters: number) {
  return meters / 10;
}

export function removeMinusSign(str: string) {
  return str.replace("-", " ");
}
