import { IPokemonSpecy } from "./IPokemonG"

export interface IProfile {


  photo: string | ArrayBuffer,
  name: string,
  activities: [],
  birthDate: string,
  dui: string,
  minorityDoc: string,
  age: number
}



export interface IStoreInitial {
  profile: IProfile
  pokemonList: IPokemonSpecy[],
  edition: boolean
}
