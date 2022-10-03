# Prueba Técnica Apuestas en Línea Campeonato Mundial

## Historias de Usuario
- US1: Carga de partidos - Implementada
- US2: Registro de sesión - No implementada
- US3: Registro de apuestas - No implementada
- US4: Resultado de apuestas - No implementada

### 1. Carga de partidos

Se necesitan 2 tablas para esta US, una para los equipos precargados y otra que es el maestro de los partidos de futbol que se programan para el día

#### Tablas
Tabla de Equipos
```
SoccerTeam
Id: guid
Code: string
Name: string
```

Tabla de almacenamiento 
```
SoccerGame
GameDate: DateTime
TeamAId: Guid
TeamAScore: : byte --> ej. 2
TeamBId: Guid
TeamBScore: byte   --> ej. 1
Status: Enum           --> ej. Programado / Parcial / Final
```

### DTOs
-----------------
Mensaje de entrada para el registro de un partido
```
BettingSoccerDTO
GameDate: DateTime
TeamAId: Guid
TeamBId: Guid
```
3. Registro de sesión
4. Registro de apuestas
5. Resultado de apuestas 

# 1. Implementación de prueba initarias con Framework jasmin y Karma para verificación de calidad en metodos con datos simulados Mocks
 * Verifiar Proyecto # betting.soccer.scores.Tests   
 * Componente SoccerTeam-list.component.spec
 * Se generan 2 tipos de pruebas para consulta de registos, ambas con resultado positivo que no tiene información y la el mock con información 
 # * Objetivo de la prueba:
 * Ejecuión rápida
 * Rápida programación
 * No depende de otros elementos
 * Verificar Covertura de código
