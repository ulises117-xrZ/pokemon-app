import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IStoreInitial } from 'src/app/data/interfaces/IStore';
import { edit } from 'src/app/store/actions/pokemon.action';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @Input() direction: string = "";
  @Input() text: string = "";
  constructor(
    private route: Router,
    private store: Store<{ pokemonState: IStoreInitial }>
  ) {

  }
  ngOnInit(): void {
    setTimeout(() => {
      this.store.dispatch(edit({ data: false }));
      this.route.navigate([this.direction])
    }, 1000);
  }

}
