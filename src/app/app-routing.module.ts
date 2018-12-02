import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PlayersComponent } from './newgame/players/players.component';
import { NewgameComponent } from './newgame/newgame.component';
import { GameplayComponent } from './gameplay/gameplay.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'newgame', component: NewgameComponent},
  {path: 'newgame/players', component: PlayersComponent},
  {path: 'gameplay', component: GameplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
