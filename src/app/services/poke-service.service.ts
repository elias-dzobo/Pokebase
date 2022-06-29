import { Injectable } from '@angular/core';
import { Pokemon } from '../model/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {
  shouldShowFighter: boolean = false;

  
  pokemon: Pokemon[] = [
    {
      name: "Pikachu",
      mainAbility: "Lightning",
      stats: [{
        hp: 100
      }]
    },
    {
      name: "Bulbasor",
      mainAbility: "Plants",
      stats: [{
        hp: 100
      }]
    },
    {
      name: "Squirtle",
      mainAbility: "Water",
      stats: [{
        hp: 100
      }]
    }
  ]

  constructor() { }

  toggleFighter() {
    this.shouldShowFighter = !this.shouldShowFighter;
  }

  getShouldShowFighter() {
    return this.shouldShowFighter;
  }

  getPokemonMock(id: number) {
    return this.pokemon[id]; 
  }
}
