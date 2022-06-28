import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  random!:number;
  constructor() {
    setInterval(() => this.random = Math.random(), 500);
   }

  ngOnInit(): void {
  }



}
