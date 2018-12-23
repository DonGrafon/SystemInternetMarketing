import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PlayersComponent } from './newgame/players/players.component';
import { NewgameComponent } from './newgame/newgame.component';
import { GameplayComponent } from './gameplay/gameplay.component';
import { ResultTableComponent } from './gameplay/result-table/result-table.component';
import { ScenariosComponent } from './newgame/scenarios/scenarios.component';
import { NewscenarioComponent } from './newgame/scenarios/newscenario/newscenario.component';
import { ScenarioinfoComponent } from './newgame/scenarios/scenarioinfo/scenarioinfo.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'newgame', component: NewgameComponent},
  {path: 'newgame/players', component: PlayersComponent},
  {path: 'newgame/scenarios', component: ScenariosComponent},
  {path: 'newgame/scenarios/newscenario', component: NewscenarioComponent},
  {path: 'newgame/scenarios/scenarioinfo', component: ScenarioinfoComponent},
  {path: 'gameplay', component: GameplayComponent},
  {path: 'gameplay/resultTable', component: ResultTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
