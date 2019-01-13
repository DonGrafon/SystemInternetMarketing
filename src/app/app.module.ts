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
import { ResultTableComponent } from './gameplay/result-table/result-table.component';
import { ScenariosComponent } from './newgame/scenarios/scenarios.component';
import { NewscenarioComponent } from './newgame/scenarios/newscenario/newscenario.component';
import { ScenarioinfoComponent } from './newgame/scenarios/scenarioinfo/scenarioinfo.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    PlayersComponent,
    NewgameComponent,
    GameplayComponent,
    ResultTableComponent,
    ScenariosComponent,
    NewscenarioComponent,
    ScenarioinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
