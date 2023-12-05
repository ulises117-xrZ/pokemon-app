import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConfigFormComponent } from './modules/configuration/config-form/config-form.component';
import { BodyComponent } from './layout/body/body/body.component';
import { PokemonListComponent } from './modules/configuration/pokemon-list/pokemon-list.component';
import { HomeProfileComponent } from './modules/home/home-profile/home-profile.component';

const routes: Routes = [
  {path: "", component: BodyComponent},
  {path: "poke-list", component: PokemonListComponent},
  {path: "profile", component: HomeProfileComponent},
  {path: "**", component: BodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
