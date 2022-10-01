# Prueba Técnica Apuestas en Línea Campeonato Mundial

## Historias de Usuario

1. Carga de partidos

```
SoccerTeam -> Equipos
+ Id: GUID
+ TeamCode: string e.g. COL, BRA, ARG
+ TeamName: string e.g. COLOMBIA, BRASIL, ARGETINA

SoccerGame -> Partido
+ TeamAId: GUID
+ TeamBId: GUID
+ DateGame: DateTime
+ ScoreTeamA: byte
+ ScoreTeamB: byte
```

2. Registro de sesión
3. Registro de apuestas
4. Resultado de apuestas 
