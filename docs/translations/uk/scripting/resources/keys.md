---
title: «Ключі»
---

:::note

Тут ви можете знайти інформацію про константи введення клавіш, які використовуються функціями [GetPlayerKeys](../functions/GetPlayerKeys) та [OnPlayerKeyStateChange](../callbacks/OnPlayerKeyStateChange).

SA-MP використовує бітове маскування для визначення того, які клавіші натиснуто, а які ні. Ось стаття про бітмаскування: [http://en.wikipedia.org/wiki/Mask\_(обчислення)](<http://en.wikipedia.org/wiki/Mask_(обчислення)>)

:::

---

| Макрос | Значення | Код вбудовування (пішки) <sup>(6)</sup> | Код вбудовування (у транспортному засобі) <sup>(6)</sup> | Ключ за замовчуванням (пішки) | Ключ за замовчуванням (у транспортному засобі)
| ------------------------ | --------- | ---------------------------- | ------------------------------- | -------------------------------------------------------- | ------------------------ |
| KEY_ACTION | 1 | \~k~\~PED_ANSWER_PHONE~ | \~k~\~VEHICLE_FIREWEAPON_ALT~ | TAB | ALT GR / LCTRL / NUM0
| KEY_CROUCH | 2 | \~k~\~PED_DUCK~ | \~k~\~VEHICLE_HORN~ | C | H / CAPSLOCK |
KEY_FIRE | 4 | \~k~\~PED_FIREWEAPON~ | \~k~\~VEHICLE_FIREWEAPON~ | LCTRL / LMB (ліва кнопка миші) | LALT | LALT ¦ ¦k~\~VEHICLE_FIREWEAPON~ | KEY_PINT | 4 | \~k~\~PED_FIREWEAPON
KEY_SPRINT | 8 | \~k~\~PED_SPRINT~ | \~k~\~VEHICLE_ACCELERATE~ | SPACE | W| \~k~\~VEHICLE_ACCELERATE~ | SPACE | W| \~k~\~VEHICLE_ACCELERATE~ | SPACE | W
| KEY_SECONDARY_ATTACK | 16 | \~k~\~VEHICLE_ENTER_EXIT~ | \~k~\~VEHICLE_ENTER_EXIT~ | ENTER | ENTER
| KEY_JUMP | 32 | \~k~\~PED_JUMPING~ | \~k~\~VEHICLE_BRAKE~ | LSHIFT | S |
| KEY_LOOK_RIGHT | 64 | - | \~k~\~VEHICLE_LOOKRIGHT~ | - | E |
| KEY_HANDBRAKE/KEY_AIM<sup>(1)</sup> | 128 | \~k~\~PED_LOCK_TARGET~ | \~k~\~VEHICLE_HANDBRAKE~ | RMB (права кнопка миші) | пробіл

| KEY_LOOK_BEHIND | 512 | \~k~\~PED_LOOKBEHIND~ | \~k~\~VEHICLE_LOOKBEHIND~ | NUM1 / MMB (середня кнопка миші - клацніть коліщатко миші) | 2
| KEY_SUBMISSION | 512 | - | \~k~\~TOGGLE_SUBMISSIONS~ | NUM1 / MMB (середня кнопка миші - клацніть коліщатко миші) | 2 / NUMPAD + | ¦ ¦ ¦ ¦NUMPAD

| KEY_ANALOG_UP | 2048 | - | \~k~\~VEHICLE_TURRETUP~ | NUM8<sup>(5)</sup> | NUM8
| KEY_ANALOG_DOWN | 4096 | - | \~k~\~VEHICLE_TURRETDOWN~ | NUM2<sup>(5)</sup> | NUM2
| KEY_ANALOG_LEFT | 8192 | \~k~\~VEHICLE_LOOKLEFT~ | \~k~\~VEHICLE_TURRETLEFT~ | NUM4 | NUM4 ¦ ¦ ¦k~\~VEHICLE_TURRETLEFT~ | NUM4
KEY_ANALOG_RIGHT | 16384 | \~k~\~VEHICLE_LOOKRIGHT~ | \~k~\~VEHICLE_TURRETRIGHT~ | NUM6 | NUM6 ¦ ¦ ¦k~\~VEHICLE_TURRETRIGHT~ | NUM6 ¦ ¦ ¦k~\~VEHICLE_TURRETRIGHT~ | NUM6
| KEY_YES<sup>(2)</sup> | 65536 | \~k~\~CONVERSATION_YES~ | \~k~\~CONVERSATION_YES~ | Y | Y | Y
| KEY_NO<sup>(2)</sup> | 131072 | \~k~\~CONVERSATION_NO~ | \~k~\~CONVERSATION_NO~ | N | N | N
| KEY_CTRL_BACK<sup>(2)</sup> | 262144<sup>(4)</sup> | \~k~\~GROUP_CONTROL_BWD~ | \~k~\~GROUP_CONTROL_BWD~ | H | H | H
| UNDEFINED<sup>(3)</sup> | - | \~k~\~GROUP_CONTROL_FWD~ | \~k~\~GROUP_CONTROL_FWD~ | G | G | G
| Вперед! Вперед! Вперед! Вперед! Вперед!
KEY_DOWN | 128 | \~k~\~Go_BACK~ | \~k~\~VEHICLE_STEERDOWN~ | ВНИЗ | ВНИЗ | ВНИЗ |
| KEY_LEFT | -128 | \~k~\~GO_LEFT~ | \~k~\~VEHICLE_STEERLEFT~ | LEFT | ЛІВІШЕ | ЛІВІШЕ
KEY_RIGHT | 128 | \~k~\~GO_RIGHT~ | \~k~\~VEHICLE_STEERRIGHT~ | RIGHT | ПРАВОруч | ПРАВОруч |

---

**(1):** Включає клавішу, не визначену у SA:MP. Ви повинні

```c
#визначити KEY_AIM KEY_HANDBRAKE
```

або використати KEY_HANDBRAKE.

**(2):** Ця клавіша не може бути визначена, коли гравець перебуває у [режимі глядача](../functions/TogglePlayerSpectating).

**(3):** GROUP_CONTROL_FWD не може бути визначений у SA-MP, оскільки він використовується для входу в транспортні засоби як пасажир. Однак, визначення у геймтексті все ще існує.

**(4):** Якщо номер ключа «262144» не працює, просто використовуйте номер ключа «2».

**(5):** Виявляється лише тоді, коли для контролера вибрано конфігурацію «JOYPAD».

**(6)** Коди вбудовування працюють лише для [client messages](../functions/SendDeathMessage), [textdraws](../functions/TextDrawCreate) та [gametexts](../functions/GameTextForPlayer).


