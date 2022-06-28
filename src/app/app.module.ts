import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CharacterSelectComponent } from './components/character-select/character-select.component';
import { CharacterFightComponent } from './components/character-fight/character-fight.component';
import { StageComponent } from './components/stage/stage.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
