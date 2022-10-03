import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import {GetSoccerTeamListComponent} from './components/SoccerTeam-list/SoccerTeam-list.component';
import { SoccerGameListComponent } from './components/SoccerGame/SoccerGame-list.component';
@NgModule({
  declarations: [
    AppComponent,
    TutorialDetailsComponent,
    GetSoccerTeamListComponent,
    SoccerGameListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
