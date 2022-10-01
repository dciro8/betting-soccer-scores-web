import { Component, OnInit } from '@angular/core';
import { BettingSoccerDTO } from 'src/app/models/Product.model';
import { ResponseMessage } from 'src/app/models/ResponseMessage.model';
import { ProductAllService } from 'src/app/services/Product.service';
;
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productDto: BettingSoccerDTO = {};
  
  response: ResponseMessage={};
  BettingSoccerDTO?: BettingSoccerDTO[];

  submitted = false;
  constructor(private productAllService: ProductAllService) { }

  ngOnInit(): void {
  }

  getRegister(): void {
debugger;
    this.getProductAll();

    this.setCreteProduct();
  }

  setCreteProduct(): void {
    this.productAllService.setProduct(this.productDto)
      .subscribe(
        data => {
          this.response= data;

          if (this.response != undefined && this.response.result !=undefined && this.response.result>0 ) {
            this.submitted=true;
          }
          else {
         
            this.submitted=false;
         }
        },
        error => {
          console.log(error);
        });
  }

  
  getProductAll(): void {
    debugger;
    this.productAllService.getSoccerTeamAll()
      .subscribe(
        data => {
          this.BettingSoccerDTO = data;
          
        console.log('this.BettingSoccerDTO',this.BettingSoccerDTO);
        },
        error => {
          console.log(error);
        });
  }



}
