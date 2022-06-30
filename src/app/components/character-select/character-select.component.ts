import { Component, Input, OnInit } from '@angular/core';
import { POKEMON } from 'src/app/mock-pokemon';
import { PokeServiceService } from 'src/app/services/poke-service.service';

@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.css']
})
export class CharacterSelectComponent implements OnInit {

  pokemon = POKEMON; 

  constructor(
    private pokeService: PokeServiceService
  ) { }

  ngOnInit(): void {
  }

  selectPokemon() {
    this.pokeService.toggleFighter();
  }

}
