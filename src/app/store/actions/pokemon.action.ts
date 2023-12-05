

import { createAction, props } from '@ngrx/store';
import { IPokemonGeneration, IPokemonSpecy } from 'src/app/data/interfaces/IPokemonG';
import { IProfile, IStoreInitial } from 'src/app/data/interfaces/IStore';

export const saveConfigInfo = createAction(
  '[Save config profile] Configuration',
  props<{ data: IProfile }>()
);

export const savePokemonList = createAction(
  '[Save pokemon list] Configuration',
  props<{ data: IPokemonSpecy[] }>()
)

export const edit = createAction(
  '[Profile] Edit profile',
  props<{data: boolean}>()
)
