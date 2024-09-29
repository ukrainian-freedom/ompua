---
título: OnActorStreamIn
descripción: Este callback se llama cuando un actor es cargado (se hace visible) por el cliente de un jugador.
tags: []
---

<VersionWarnES name='callback' version='SA-MP 0.3.7' />

## Descripción

Este callback se llama cuando un actor es cargado (se hace visible) por el cliente de un jugador.

| Nombre      | Descripción                                                   |
| ----------- | ------------------------------------------------------------- |
| actorid     | El ID del actor que está siendo transmitido por el jugador.   |
| forplayerid | El ID del jugador que está transmitiendo al actor.            |

## Devoluciones

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnActorStreamIn(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "El actor %d está siendo transmitido a tu jugador.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notas

<TipNPCCallbacksES />

## Funciones Relacionadas
Los siguientes callbacks pueden ser útiles, ya que están relacionados de alguna forma u otra con OnActorStreamIn:
- [OnActorStreamOut](OnActorStreamOut): Este callback es llamado cuando un actor deja de transmitirse (deja de ser visible) por el cliente de un jugador.
