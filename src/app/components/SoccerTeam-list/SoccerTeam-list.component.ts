import { Component, OnInit } from '@angular/core';
import { BettingSoccerDTO } from 'src/app/models/BettingSoccer.model';
import { bettingSoccerService } from 'src/app/services/bettingSoccer.service';

@Component({
  selector: 'app-SoccerTeam-list',
  templateUrl: './SoccerTeam-list.component.html',
  styleUrls: ['./SoccerTeam-list.component.css']
})
export class GetSoccerTeamListComponent implements OnInit {
  ProductDto?: BettingSoccerDTO[];

  constructor(private bettingSoccerSer: bettingSoccerService ) { }

  ngOnInit(): void {
    this.getProductAll();
  }

  getProductAll(): void {
    this.bettingSoccerSer.getAllSoccerTeam()
      .subscribe(
        data => {
          this.ProductDto = data;
          console.log('this.ProductDto2',this.ProductDto);
        },
        error => {
          console.log(error);
        });
  }
}
