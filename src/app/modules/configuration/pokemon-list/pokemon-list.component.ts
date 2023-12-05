import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IPokemonGeneration, IPokemonSpecy } from 'src/app/data/interfaces/IPokemonG';
import { IStoreInitial } from 'src/app/data/interfaces/IStore';
import { PokeGenerationService } from 'src/app/data/services/poke-generation-api.service';
import { obtenerNumeroDesdeUrl } from 'src/app/shared/utils/obtenerNumerosUrl';
import { savePokemonList } from 'src/app/store/actions/pokemon.action';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonList: IPokemonGeneration = {
    pokemon_species: []
  };

  selectedPokemons: IPokemonSpecy[] = [];
  isLoading: boolean =false;

  constructor(private pokeGeneration: PokeGenerationService,
    private store: Store<{ pokemonState: IStoreInitial }>,
    private route: Router
  ) { }

  ngOnInit() {
    this.getPokemonList();
  }

  getPokemonList() {
    this.pokeGeneration.getFirstGenerationPokemon().subscribe({
      next: (data: any) => {
        this.pokemonList.pokemon_species = data.pokemon_species?.map((pokemon: IPokemonSpecy) => ({
          ...pokemon, status: "inactivo"
        }));
        console.log('pokemonList', this.pokemonList)
      },
      error: (error) => {
        console.error('Error al obtener datos de la PokeAPI:', error);
      },
      complete: () => {
        console.log('La solicitud ha finalizado.');
      },
    });
  }

  getImagesFromUrl(url: string): string {
    const number = obtenerNumeroDesdeUrl(url)
    const completeUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;
    return completeUrl;
  }

  getNumberPokemon(url: string): string {
    const number = obtenerNumeroDesdeUrl(url);
    let formated = "";
    if (number !== null) {
      if (number <= 10) {

        formated = `#00${number}`;
        return formated;
      }
      if (number <= 100) {
        formated = `#0${number}`;
        return formated;
      }
      if (number <= 1000) {
        formated = `#${number}`;

        return formated;
      }
    }
    return formated;
  }
  togglePokemonSelection(pokemon: IPokemonSpecy) {
    const index = this.selectedPokemons.findIndex(item => item.name === pokemon.name);

    // Si el Pokemon está en la lista, actualiza su estado
    if (index !== -1) {
      this.pokemonList.pokemon_species = this.pokemonList.pokemon_species.map(poke => pokemon.name === poke.name ? { ...poke, status: 'inactive' } : poke)

      //elimnar de la lista
      this.selectedPokemons = this.selectedPokemons.filter((item) => {
        return item.name === pokemon.name ? null : item
      });
    } else {

      // Validar que no haya más de 3 Pokemon seleccionados
      if (this.selectedPokemons.length < 3) {
        // Pokemon no seleccionado, agregar a la lista
        this.pokemonList.pokemon_species = this.pokemonList.pokemon_species.map(poke => pokemon.name === poke.name ? { ...poke, status: 'active' } : poke)
        this.selectedPokemons.push(pokemon);

      } else {
        // Ya hay 3 Pokemon seleccionados, muestra una alerta o realiza la lógica que prefieras
        console.warn('Solo puedes seleccionar hasta 3 Pokémon.');
      }
    }
  }

  shouldShowDisabled(pokemon: IPokemonSpecy): boolean {

    return this.selectedPokemons.length >= 3 && this.selectedPokemons.findIndex(item => item.name === pokemon.name) === -1;

  }

  handleProfile() {
    if (this.selectedPokemons.length >= 3) {
      this.store.dispatch(savePokemonList({ data: this.selectedPokemons }))
      this.isLoading = true;
    }
  }
}

