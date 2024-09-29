---
назва: Режими перегляду
description: Режими перегляду, що використовуються функціями PlayerSpectatePlayer та PlayerSpectateVehicle.
теги: []
мітка_бічної_панелі: Режими перегляду
---

:::info

Режими перегляду, що використовуються функціями [PlayerSpectatePlayer](../functions/PlayerSpectatePlayer) та [PlayerSpectateVehicle](../functions/PlayerSpectateVehicle).

:::

| Тип | Ефект |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SPECTATE_MODE_NORMAL | Звичайний режим видовища (точка зору від третьої особи). Камеру не можна змінити.
| SPECTATE_MODE_FIXED | Використовуйте [SetPlayerCameraPos](../functions/SetPlayerCameraPos) після цього, щоб розташувати камеру гравця, і вона відстежуватиме гравця/транспортний засіб за допомогою [PlayerSpectatePlayer](../functions/PlayerSpectatePlayer)/[PlayerSpectateVehicle](./functions/PlayerSpectateVehicle)
| SPECTATE_MODE_SIDE | Камера буде прикріплена збоку від гравця/транспортного засобу (наприклад, коли ви перебуваєте в камері від першої особи на велосипеді і робите wheelie)


