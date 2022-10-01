import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSoccerTeamListComponent } from './SoccerTeam-list.component';

describe('GetSoccerTeamListComponent', () => {
  let component: GetSoccerTeamListComponent;
  let fixture: ComponentFixture<GetSoccerTeamListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSoccerTeamListComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSoccerTeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
