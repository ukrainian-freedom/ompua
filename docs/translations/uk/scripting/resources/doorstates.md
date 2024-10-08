---
заголовок: Дверні стани
description: Інформація про розмір байта та відповідні йому біти станів дверей.
---

:::примітка

Стани дверей використовуються нативними функціями, такими як [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus) та [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus).

:::

:::примітка

Стани 2 задніх дверей не можуть бути оброблені функціями [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus) та [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus).

:::

## Який біт що зберігає?

Пошкодження кожної двері (зауважте, що капот і багажник також є дверима) буде збережено в 1 байт (тобто 8 біт). Ви можете змінювати стан лише одного біта для кожної двері в кожен момент часу, тому вам доведеться викликати функцію двічі, якщо ви хочете, щоб двері були пошкоджені та відчинені одночасно.

- Перший біт** зберігає, чи двері відчинено (значення 1)** або не відчинено (значення 0)**. Якщо двері відчинено, вони все одно заблокуються (і змінять перший біт на 0), якщо їх просто відчинено.
- Другий біт** зберігає, чи є двері **пошкодженими (значення 1)** або **непошкодженими (значення 0)**. Якщо ви хочете, щоб пошкоджені двері повернулися до нормального стану, вам потрібно зняти і знову прикріпити їх неушкодженими.
- Третій біт** зберігає, чи двері **вилучено (значення 1)** або **не вилучено (значення 0)**.
- Решта бітів порожні.

Здається, що немає біта, який зберігає, зачиняться двері чи ні.

Зверніть увагу, що біти рахуються ззаду, тому перший біт є крайнім правим.

---
  
## Який байт що зберігає?

- У **першому байті** зберігається стан **власність**.
- У **другому байті** зберігається стан **стовбура**.
- Третій байт** зберігає стан **дверцят водія**.
- Четвертий байт зберігає стан дверей другого водія.

Зверніть увагу, що байти рахуються ззаду, тому перший байт є крайнім правим.

---
  
## Приклад

Наступний код повідомляє, що капот знято, передні ліві двері пошкоджено, передні праві двері відчинено, а багажник пошкоджено та відчинено:

`00000001 00000010 00000011 00000100`

Однак SA-MP повертає десяткове число, тому вам доведеться спочатку перетворити його у двійкове, щоб отримати результат, як показано вище. У наведеному вище прикладі SA-MP поверне наступне число:

`16909060`

---
  
## Інформаційна таблиця

**Легенда:**

```
Статичні двері Капот / багажник

° - легкі | - здорові, зачинені -- - здорові, зачинені
              -- - здорові, відчинені [] - здорові, відчинені
               § - пошкоджені, закриті ~~ - пошкоджені, закриті
              ww - пошкоджені, відкриті {} - пошкоджені, відкриті
                 - missing - відсутній
```

**Перший байт (шапка):**

```
0 (000) 1 (001) 2 (010) 3 (011) 4 (100) 5 (101) 6 (110) 7 (111)
  °--° °[]° °~~° °{}° ° ° ° ° ° ° ° °
  | | | | | | | | | | | | | | | |
  °--° °--° °--° °--° °--° °--° °--° °--°
```

**Другий байт (магістраль):**

```
0 (000) 1 (001) 2 (010) 3 (011) 4 (100) 5 (101) 6 (110) 7 (111)
  °--° °--° °--° °--° °--° °--° °--° °--°
  | | | | | | | | | | | | | | | |
  °--° °[]° °--° °{}° ° ° ° ° ° ° ° °
```

**Третій байт (водійські двері):**

```
0 (000) 1 (001) 2 (010) 3 (011) 4 (100) 5 (101) 6 (110) 7 (111)
  °--° °--° °--° °--° °--° °--° °--° °--°
  | Я не хочу, щоб ви знали, що я тут.
  °--° °--° °--° °--° °--° °--° °--° °--°
```

**Четвертий байт (двері другого водія):**

```
0 (000) 1 (001) 2 (010) 3 (011) 4 (100) 5 (101) 6 (110) 7 (111)
  °--° °--° °--° °--° °--° °--° °--° °--°
  | Я не хочу, щоб ви знали, що я тут.
  °--° °--° °--° °--° °--° °--° °--° °--°
```

---
  
## Обгортка

Корисний невеличкий фрагмент, щоб уникнути надмірної роботи з бітами та байтами.

```c
enum Двері
{
    DOOR_HOOD,
    DOOR_TRUNK,
    DOOR_DRIVER,
    DOOR_PASSENGER
}

enum DoorState(<<= 1)
{
    IS_OPENED = 1,
    IS_DAMAGED,
    IS_REMOVED
}

stock GetDoorState(doorStates, Door:door, DoorState:doorState)
{
    return (doorStates >>> (8 * door)) & doorState;
}
```

---
  
## Приклад використання

```c
новий 
	VEHICLE_PANEL_STATUS:панелі,
	VEHICLE_DOOR_STATUS:двері,
	VEHICLE_LIGHT_STATUS:фари,
	VEHICLE_TIRE_STATUS:шини;

GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);

// Одиничний стан
if (GetDoorState(_:doors, DOOR_DRIVER, IS_DAMAGED))
{
    SendClientMessage(playerid, -1, «Водійські двері вашого автомобіля пошкоджено!»);
}

// Комбінований стан
if (GetDoorState(_:doors, DOOR_HOOD, IS_OPENED | IS_DAMAGED))
{
    SendClientMessage(playerid, -1, «Капот вашого транспортного засобу відкрито та пошкоджено!»)
}
```

## Дивіться також

- [Статус дверей автомобіля](../resources/vehicle-door-status)


