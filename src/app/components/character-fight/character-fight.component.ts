import { Component, OnInit } from '@angular/core';
import { PokeServiceService } from 'src/app/services/poke-service.service';

@Component({
  selector: 'app-character-fight',
  templateUrl: './character-fight.component.html',
  styleUrls: ['./character-fight.component.css']
})
export class CharacterFightComponent implements OnInit {
  constructor(
    public pokeService: PokeServiceService
  ) { }

  ngOnInit(): void {

  }

}
