import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { ConfigFormComponent } from './modules/configuration/config-form/config-form.component';
import { PokemonListComponent } from './modules/configuration/pokemon-list/pokemon-list.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header/header.component';
import { BodyComponent } from './layout/body/body/body.component';
import { DialogComponent } from './core/components/dialog/dialog/dialog.component';
import { DuiMaskDirective } from './shared/directives/duiMask.directive';
import { pokemonReducer } from './store/reducer/pokemon.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { HomeProfileComponent } from './modules/home/home-profile/home-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    ConfigFormComponent,
    PokemonListComponent,
    HomeProfileComponent,
    HeaderComponent,
    BodyComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      pokemonState: pokemonReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Máximo número de acciones para retener
    }),
    DuiMaskDirective,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
