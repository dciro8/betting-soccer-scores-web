import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BettingSoccerDTO } from '../models/Product.model';
import { ProductYearDto, SalesForYear } from '../models/ProductForYear';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Guid } from 'guid-typescript';
import { ResponseMessage } from '../models/ResponseMessage.model';

const baseUrl = 'https://localhost:7077';

@Injectable({
  providedIn: 'root'
})
export class ProductAllService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<BettingSoccerDTO[]> {
debugger;
    var url: string = "/api/SoccerTeam";

    return this.http.get<BettingSoccerDTO[]>(`${baseUrl}${url}`);
  }

  getProductForYear(model: ProductYearDto): Observable<SalesForYear[]> {

    let body = new URLSearchParams();
    let year = model.year?.toString();
    var url: string = "/api/v1/NextSale/GetSalesForYear?year=";
    return this.http.get<any>(`${baseUrl}${url}` + year);
  }

  setProduct(model: BettingSoccerDTO): Observable<ResponseMessage> {

    var url: string = "/api/v1/product/CreteProduct";

    model.id = Guid.create().toString();

    let bodyConvert = JSON.stringify(model);

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post<any>(`${baseUrl}${url}`, bodyConvert, httpOptions);
  }
}
