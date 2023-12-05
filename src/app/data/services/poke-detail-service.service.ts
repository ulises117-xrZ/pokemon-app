import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IPokemonSpecy } from '../interfaces/IPokemonG';

@Injectable({
  providedIn: 'root'
})
export class PokeDetailServiceService {
  urlPokemon: string= "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http: HttpClient) {}
  getPokemonDetails(pokemonList: IPokemonSpecy[]): Observable<any[]> {
    const requests: Observable<any>[] = pokemonList.map(pokemon =>
      this.http.get<any>(this.urlPokemon+pokemon.name)
    );

    return forkJoin(requests);
  }
}
