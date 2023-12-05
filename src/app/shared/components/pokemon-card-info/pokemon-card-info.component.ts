import { Component, Input } from '@angular/core';
import { IPokemonInfo } from 'src/app/data/interfaces/IPokemonInfo';

@Component({
  selector: 'app-pokemon-card-info',
  templateUrl: './pokemon-card-info.component.html',
  styleUrls: ['./pokemon-card-info.component.scss']
})
export class PokemonCardInfoComponent {

  @Input() pokemonDetails: IPokemonInfo = {
    base_experience: 0,
    height: 0,
    id: 0,
    name: '',
    species: {
      name: '',
      url: ''
    },
    sprites: {
      front_default: ''
    },
    stats: [],
    types: [],
    weight: 0
  };
  statNames = ['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed'];

  constructor() {
    this.pokemonDetails = {

      base_experience: 0,
      height: 0,
      id: 0,
      name: '',
      species: {
        name: '',
        url: ''
      },
      sprites: {
        front_default: ''
      },
      stats: [],
      types: [],
      weight: 0
    };

  }

  getStatPercentage(statName: string): number {
    const statValue = this.pokemonDetails.stats.find((stat: any) => stat.stat.name === statName)?.base_stat ?? 0;

    const maxStatValue = this.getMaxStatValue(statName);
    return (statValue / maxStatValue) * 100;
  }

  getMaxStatValue(statName: string): number {
    // Define el valor máximo para cada estadística
    const maxStatValues: { [key: string]: number } = {
      'hp': 255,
      'attack': 190,
      'defense': 230,
      'special-attack': 194,
      'special-defense': 230,
      'speed': 180,
    };
    return maxStatValues[statName] || 100; // Valor predeterminado de 100 si no se encuentra la estadística
  }
}
