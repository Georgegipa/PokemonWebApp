export interface Pokemon {
    id: number;
    name: string;
    image: string;
    weight: number;
    height: number;
    types: string[];
    stats: [string,number][];
}