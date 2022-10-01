import { Component, OnInit } from '@angular/core';
import { BettingSoccerDTO } from 'src/app/models/Product.model';
import { ProductAllService } from 'src/app/services/Product.service';

@Component({
  selector: 'app-ProdcutAll-list',
  templateUrl: './ProdcutAll-list.component.html',
  styleUrls: ['./ProdcutAll-list.component.css']
})
export class GetAllProductListComponent implements OnInit {
  ProductDto?: BettingSoccerDTO[];

  constructor(private productAllService: ProductAllService ) { }

  ngOnInit(): void {
    this.getProductAll();
  }

  getProductAll(): void {
    this.productAllService.getSoccerTeamAll()
      .subscribe(
        data => { 
          this.ProductDto = data;
        },
        error => {
          console.log(error);
        });
  }

}
