---
title: SetPlayerArmour
description: Подешава панцир играча.
tags: ["player"]
---

## Опис

Подешава панцир играча.

| Име         | Опис                                                                                                                          |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| playerid     | ID играча коме се подешава панцир                                                                                                     |
| Float:armour | Количина панцира која се даје, у процентима (float). Вредности веће од 100 могу да се подесе, али се неће приказивати у HUD-у играча. |

## Враћа

**1** - Функција је успешно извршена.

**0** - : Функција није успешно извршена. То значи да ID играча који смо унели не постоји.

## Примери

```c
public OnPlayerSpawn(playerid)
{
    // даје играчу максималан панцир (100%) на спавну.
    SetPlayerArmour(playerid, 100.0);
    return 1;
}
```

## Белешке

:::tip

Име функције је armour, не armor (Амерички).

:::

:::warning

Панцир се добија заокрушено на integer: постави 50.15, али добијеш 50.0
:::

## Повезане функције

- [GetPlayerArmour](GetPlayerArmour.md): Добија се вредност панцира коју играч тренутно има.
- [SetPlayerHealth](SetPlayerHealth.md): Подешава животне поене играча.
- [GetPlayerHealth](GetPlayerHealth.md): Добија се вредност животних поена које играч тренутно има.