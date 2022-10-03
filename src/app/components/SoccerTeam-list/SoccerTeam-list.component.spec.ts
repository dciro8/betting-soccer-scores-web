import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { bettingSoccerService } from 'src/app/Shared/services/bettingSoccer.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { GetSoccerTeamListComponent } from './SoccerTeam-list.component';
import { BettingSoccerDTO } from 'src/app/Shared/models/BettingSoccer.model';
import { of } from 'rxjs';

const listSoccerTeam: BettingSoccerDTO[] = [
 {
   id: '4AEEF036-DE64-4A14-A23E-1B95047E0B2F',
   teamCode: 'ARG',
   teamName: 'Vigil'
  }
];

describe('GetSoccerTeamListComponent', () => {

    //Instancia del componente
  let component: GetSoccerTeamListComponent;

  //Como vamos a acceder a
let fixture: ComponentFixture<GetSoccerTeamListComponent>;

  //Instancia del servicio
  let service: bettingSoccerService;

  //se ejecuta Antes de cada test
  //Pide un método  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
   
 imports: [

        //Permite realizar mock del consumo de un servicio, consumo falso del protocolo
        HttpClientTestingModule
        ,RouterTestingModule 
        ],        
        declarations: [GetSoccerTeamListComponent],
        providers: [        
        //Servicio a testear en este segmento de pruebas        
        bettingSoccerService
        ],        
         //Suprime errores que lanza la app al probar
         schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });  

  //Ejecución de la prueba, con el llamado de las instancias de servicios y componentes
  beforeEach(() => {
  //Instancia y consumo de componente
  fixture = TestBed.createComponent(GetSoccerTeamListComponent);
  //Instancia del componente, gracias a fixture (Consumo de TestBed) 
  component = fixture.componentInstance;
  //Consumo de servicio para acceso a metodos privados
  service =fixture.debugElement.injector.get(bettingSoccerService);     
  //Esto permite ingresar por el "ngOnInit" (Realiza lo que tiene que hacer en el método)
  fixture.detectChanges();
   });
   
    //Implemntación de pruebas con subscribe
    it('GetAllSoccerTeam Sin Datos', () => {
   const soccerTeam = fixture.debugElement.injector.get(bettingSoccerService);
   const list:BettingSoccerDTO[]=[];
   const spy1 = spyOn(soccerTeam, 'getAllSoccerTeam').and.returnValue(of(list));
   //Ejecución de la prueba 
   component.getSoccerTeamAll();
   expect(spy1).toHaveBeenCalled();
   expect(component.listSoccerTeam?.length).toBe(0);
    });
    
 it('GetAllSoocerTeam con Datos', () => {
  const soccerTeamRegister = fixture.debugElement.injector.get(bettingSoccerService);
  const spy1 = spyOn( soccerTeamRegister,'getAllSoccerTeam').and.returnValue(of(listSoccerTeam));   
   component.getSoccerTeamAll();
  expect(spy1).toHaveBeenCalled();
  console.log(' component.GetEstadoPacienteIngreso.length12', component.listSoccerTeam?.length);
  expect(component.listSoccerTeam?.length).toBe(1);  
  }); 

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
