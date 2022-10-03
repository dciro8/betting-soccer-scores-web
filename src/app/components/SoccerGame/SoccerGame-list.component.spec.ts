import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { bettingSoccerService } from 'src/app/Shared/services/bettingSoccer.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SoccerGameListComponent } from './SoccerGame-list.component';
import { BettingSoccerDTO } from 'src/app/Shared/models/BettingSoccer.model';
import { of } from 'rxjs';

const listSoccerTeam: BettingSoccerDTO[] = [
 {
   id: '4AEEF036-DE64-4A14-A23E-1B95047E0B2F',
   teamCode: 'ARG',
   teamName: 'Vigil'
  }
];
