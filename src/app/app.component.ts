import { Component } from '@angular/core';
import { Pokemon } from './model/pokemon.model';
import { PokeServiceService } from './services/poke-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokebase';

  constructor(pokebase: PokeServiceService) {

  }


}
