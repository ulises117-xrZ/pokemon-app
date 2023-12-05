import { IStoreInitial } from "../data/interfaces/IStore";

export const initialState: IStoreInitial ={
  profile: {
    photo: "",
    name: "",
    activities: [],
    birthDate: "",
    dui: "",
    minorityDoc: "",
    age: 0
  },

  pokemonList: []
}
