import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProfile, IStoreInitial } from 'src/app/data/interfaces/IStore';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.scss']
})
export class CardProfileComponent {
imagenSeleccionada: string | ArrayBuffer = "";
profile: IProfile = {
  photo: '',
  name: '',
  activities: [],
  birthDate: '',
  dui: '',
  minorityDoc: '',
  age: 0
};

constructor(private store: Store<{ pokemonState: IStoreInitial }>){
 this.store.select('pokemonState').subscribe(state => {
    this.profile = state.profile;
    });
}
}
