import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PlayersComponent } from './newgame/players/players.component';
import { NewgameComponent } from './newgame/newgame.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GameplayComponent } from './gameplay/gameplay.component';
import { DataService } from './shared/services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    PlayersComponent,
    NewgameComponent,
    GameplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
