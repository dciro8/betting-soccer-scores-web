import { Component, OnInit } from '@angular/core';
import { ProductDto } from 'src/app/models/Product.model';
import { ProductAllService } from 'src/app/services/Product.service';

@Component({
  selector: 'app-SoccerTeam-list',
  templateUrl: './SoccerTeam-list.component.html',
  styleUrls: ['./SoccerTeam-list.component.css']
})
export class GetSoccerTeamListComponent implements OnInit {
  ProductDto?: ProductDto[];

  constructor(private productAllService: ProductAllService ) { }

  ngOnInit(): void {
    this.getProductAll();
  }

  getProductAll(): void {
    this.productAllService.getAll()
      .subscribe(
        data => {
          this.ProductDto = data;
          console.log('this.ProductDto2',this.ProductDto);
        },
        error => {
          console.log(error);
        });
  }
  lista:string[]=["hola","que","tal", "estas"];
  
  seleccionados:string[]=[];
}