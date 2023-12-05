import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IPokemonSpecy } from 'src/app/data/interfaces/IPokemonG';
import { IPokemonInfo } from 'src/app/data/interfaces/IPokemonInfo';
import { IProfile, IStoreInitial } from 'src/app/data/interfaces/IStore';
import { PokeDetailServiceService } from 'src/app/data/services/poke-detail-service.service';
import { edit } from 'src/app/store/actions/pokemon.action';

@Component({
  selector: 'app-home-profile',
  templateUrl: './home-profile.component.html',
  styleUrls: ['./home-profile.component.scss']
})
export class HomeProfileComponent implements OnInit {
  profile: IProfile = {
    photo: '',
    name: '',
    activities: [],
    birthDate: '',
    dui: '',
    minorityDoc: '',
    age: 0
  };
  pokemonList: IPokemonSpecy[] = [

  ];
  pokemonDetail: IPokemonInfo[] = [];
  constructor(
    private store: Store<{ pokemonState: IStoreInitial }>,
    private route: Router,
    private pokemonService: PokeDetailServiceService,
  ) {
    this.store.select('pokemonState').subscribe((state) => {
      this.profile = state.profile;
      this.pokemonList = state.pokemonList;
      this.obtenerDetallesPokemon();
    })
  }

  ngOnInit(): void {
  }

  editProfile() {
    this.store.dispatch(edit({ data: true }))
    this.route.navigate(["/"]);
  }

  editPokemonList() {
    this.store.dispatch(edit({ data: true }))
    this.route.navigate(["/poke-list"]);
  }

  obtenerDetallesPokemon() {
    this.pokemonService.getPokemonDetails(this.pokemonList)
      .subscribe((detalles: IPokemonInfo[]) => {
        this.pokemonDetail = detalles;
        // `detalles` ahora contiene la información de cada Pokémon
        console.log('Detalles de Pokémon:', detalles);
        // Puedes hacer algo con los detalles, como asignarlos a una variable de componente
      });
  }
}
