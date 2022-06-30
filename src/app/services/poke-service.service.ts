import { Injectable } from '@angular/core';
import { Pokemon } from '../model/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {
  shouldShowFighter: boolean = false;

  constructor() { }

  toggleFighter() {
    this.shouldShowFighter = !this.shouldShowFighter;
  }

  getShouldShowFighter() {
    return this.shouldShowFighter;
  }

}
