import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CharacterSelectComponent } from './components/character-select/character-select.component';
import { CharacterFightComponent } from './components/character-fight/character-fight.component';
import { StageComponent } from './components/stage/stage.component';
import { PokeServiceService } from './services/poke-service.service';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharacterSelectComponent,
    CharacterFightComponent,
    StageComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PokeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
