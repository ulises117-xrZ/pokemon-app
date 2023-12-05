import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeGenerationService {
  private apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  getFirstGenerationPokemon(): Observable<any> {
    const url = `${this.apiUrl}generation/1`;
    return this.http.get(url);
  }
}
