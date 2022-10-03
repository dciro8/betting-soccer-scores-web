import { Component, OnInit } from '@angular/core';
import { BettingSoccerDTO } from 'src/app/Shared/models/BettingSoccer.model';
import { bettingSoccerService } from 'src/app/Shared/services/bettingSoccer.service';

@Component({
  selector: 'app-SoccerGame-list',
  templateUrl: './SoccerGame-list.component.html',
  styleUrls: ['./SoccerGame-list.component.css']
})
export class SoccerGameListComponent implements OnInit {
  listSoccerTeam?: BettingSoccerDTO[];

  constructor(private bettingSoccerSer: bettingSoccerService ) { this.getSoccerTeamAll();
  }

  getSoccerTeamAll(): void {
    this.bettingSoccerSer.getAllSoccerTeam()
      .subscribe(
        data => {
          this.listSoccerTeam = data;
          console.log('this.ProductDto2',this.listSoccerTeam);
        },
        error => {
          console.log(error);
        });
  }
  selectedOption = 0;
  actions = [{ id: 0, name: 'Select Country' },
  { id: 1, name: 'Netherland' },
  { id: 2, name: 'England' },
  { id: 3, name: 'Scotland' },
  { id: 4, name: 'Germany' },
  { id: 5, name: 'Canada' },
  { id: 6, name: 'Mexico' },
  { id: 7, name: 'Spain' }]

  ngOnInit(): void {
    // this.getSoccerTeamAll();
  }
}
