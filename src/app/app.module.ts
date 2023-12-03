import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StoreModule } from '@ngrx/store';
import { ConfigFormComponent } from './modules/configuration/config-form/config-form.component';
import { PokemonListComponent } from './modules/configuration/pokemon-list/pokemon-list.component';
import { MaterialModule } from './shared/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header/header.component';
import { BodyComponent } from './layout/body/body/body.component';


@NgModule({
  declarations: [
    AppComponent,
    ConfigFormComponent,
    PokemonListComponent,
    HeaderComponent,
    BodyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
