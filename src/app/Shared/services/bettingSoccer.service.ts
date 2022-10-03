import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BettingSoccerDTO } from '../models/BettingSoccer.model';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Guid } from 'guid-typescript';
import { ResponseMessage } from '../models/ResponseMessage.model';

const baseUrl = 'https://localhost:7077';

@Injectable({
  providedIn: 'root'
})
export class bettingSoccerService {

  constructor(private http: HttpClient) { }

  getAllSoccerTeam(): Observable<BettingSoccerDTO[]> {
debugger;
    var url: string = "/SoccerTeam";

    return this.http.get<BettingSoccerDTO[]>(`${baseUrl}${url}`);
  }
}
