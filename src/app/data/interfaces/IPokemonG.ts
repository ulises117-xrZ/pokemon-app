export interface IPokemonGeneration {
  pokemon_species: IPokemonSpecy[];
}

export interface IPokemonSpecy {
  name: string;
  url:  string;
  status: string;
}
