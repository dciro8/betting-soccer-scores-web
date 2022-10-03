import { Component, OnInit } from '@angular/core';
import { BettingSoccerDTO } from 'src/app/Shared/models/BettingSoccer.model';
import { bettingSoccerService } from 'src/app/Shared/services/bettingSoccer.service';

@Component({
  selector: 'app-SoccerTeam-list',
  templateUrl: './SoccerTeam-list.component.html',
  styleUrls: ['./SoccerTeam-list.component.css']
})
export class GetSoccerTeamListComponent implements OnInit {
  listSoccerTeam?: BettingSoccerDTO[];

  constructor(private bettingSoccerSer: bettingSoccerService ) { }

  ngOnInit(): void {
    this.getSoccerTeamAll();
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
}
