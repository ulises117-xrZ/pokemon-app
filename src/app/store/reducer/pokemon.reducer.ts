import { createReducer, on } from '@ngrx/store';
import { initialState } from '../pokemon.state';
import { saveConfigInfo, savePokemonList } from '../actions/pokemon.action';


export const pokemonReducer = createReducer(
  initialState,
  on(saveConfigInfo, (state, action) => ({ ...state, profile: action.data })),
  on(savePokemonList, (state, action) => ({ ...state, pokemonList: action.data }))
);
