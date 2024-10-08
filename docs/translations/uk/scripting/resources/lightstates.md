---
заголовок: Light States
description: Інформація про розмір байта та відповідні йому біти світлових станів.
---

:::примітка

Світлові стани використовуються нативними функціями, такими як [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus) та [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus).

:::

:::примітка

На транспортних засобах з 2-ма колесами (і, відповідно, 2-ма ліхтарями) не можна змінювати підсвічування.

:::

:::примітка

Обидва задні ліхтарі транспортного засобу не можуть бути змінені окремо.

:::

## Який біт що зберігає?

Пошкодження всіх ліхтарів зберігаються разом в 1 байт (8 біт). Кожен біт зберігає, чи є відповідна фара **пошкодженою (значення 1)** або **непошкодженою (значення 0)**.

- Перший біт** зберігає стан **переднього лівого** ліхтаря.
- Третій біт** зберігає стан **переднього правого** ліхтаря.
- У **сьомому біті** зберігається стан **заднього** ліхтаря.
- Решта бітів порожні.

Зверніть увагу, що біти рахуються ззаду, тому перший біт є крайнім правим.

---
  
## Приклад

Наступний код повідомляє, що обидва передніх ліхтаря несправні, а задні - ні:

`0000 0101`

Однак, SA-MP повертає десяткове число, тому вам доведеться спочатку перетворити його у двійкове, щоб отримати результат, як показано вище. У наведеному вище прикладі SA-MP поверне наступне число:

`5`

---
  
## Інформаційна таблиця

Ось візуальне представлення станів світла. Транспортний засіб розглядається з перспективи зверху вниз, де верхні значення - це передня частина транспортного засобу, а нижні - задня частина.

**Легенда:**

```
o - увімкнене світло
x - вимкнене світло
```

0: (0000 0000)

```c
    o-o
    | |
    o-o
```

1: (0000 0001)

```c
    x-o
    | |
    o-o
```

4: (0000 0100)

```c
    o-x
    | |
    o-o
```

5: (0000 0101)

```c
    x-x
    | |
    o-o
```

64: (0100 0000)

```c
    o-o
    | |
    x-x
```

65: (0100 0001)

```c
    x-o
    | |
    x-x
```

68: (0100 0100)

```c
    o-x
    | |
    x-x
```

69: (0100 0101)

```c
    x-x
    | |
    x-x
```

Інші значення, не перелічені тут, можуть змінювати колір, але вони просто повторюють інші значення (наприклад, 15 має той самий результат, що і 5). Після 255 значення будуть повторюватися, 256 буде встановлено як 0, 257 як 1 і так далі.

---
  
## Приклад використання

Вимкнути два задніх ліхтаря автомобіля, залишивши передні без змін:

```c
новий 
	VEHICLE_PANEL_STATUS:панелі,
	VEHICLE_DOOR_STATUS:двері,
	VEHICLE_LIGHT_STATUS:фари,
	VEHICLE_TIRE_STATUS:шини;

GetVehicleDamageStatus(vehicleid, панелі, двері, фари, шини);
UpdateVehicleDamageStatus(vehicleid, panels, doors, (lights | VEHICLE_LIGHT_STATUS:0b01000000), tires); // Частина '0b' означає, що наступне число є двійковим. Так само, як '0x' вказує на шістнадцяткове число.
```

## Дивіться також

- [Статус світла автомобіля](../resources/vehicle-light-status)


