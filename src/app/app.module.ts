import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CharacterSelectComponent } from './components/character-select/character-select.component';
import { CharacterFightComponent } from './components/character-fight/character-fight.component';
import { StageComponent } from './components/stage/stage.component';
import { PokeServiceService } from './services/poke-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharacterSelectComponent,
    CharacterFightComponent,
    StageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PokeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
