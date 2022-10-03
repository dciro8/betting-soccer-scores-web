import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SoccerGameListComponent } from './components/SoccerGame/SoccerGame-list.component';
import { GetSoccerTeamListComponent } from './components/SoccerTeam-list/SoccerTeam-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'SoccerTeam', pathMatch: 'full' },
  { path: 'SoccerTeam', component: GetSoccerTeamListComponent },
  { path: 'SoccerTeam/:id', component: TutorialDetailsComponent }
,
{ path: 'AddSoccerGame', component: SoccerGameListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
