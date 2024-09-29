---
назва: Типи інформації про транспортний засіб
description: Константи типу інформації про транспортний засіб.
---

:::info

Список типів інформації про транспортний засіб, які використовує [GetVehicleModelInfo](../functions/GetVehicleModelInfo), можна знайти тут.

:::

| Тип інформації про транспортний засіб | Опис
| ------------------------------------- | ----------------------------------------------------------------- |
| `VEHICLE_MODEL_INFO_SIZE` | Розмір транспортного засобу
| `VEHICLE_MODEL_INFO_FRONTSEAT` | Положення переднього сидіння \* | *.
| `VEHICLE_MODEL_INFO_REARSEAT` | Положення заднього сидіння \* | * - позиція заднього сидіння



| `VEHICLE_MODEL_INFO_WHEELSMID` | Положення середніх коліс (застосовується до транспортних засобів, які мають більше 4-х коліс) \* | | *.
| `VEHICLE_MODEL_INFO_FRONT_BUMPER_Z` | Висота переднього бампера. [GetVehicleModelInfo](../functions/GetVehicleModelInfo) поверне значення Z лише тоді, коли буде використано |* | | `VEICLE_MODEL_INFO'
| `VEHICLE_MODEL_INFO_REAR_BUMPER_Z` | Висота заднього бампера. [GetVehicleModelInfo](../functions/GetVehicleModelInfo) поверне лише значення Z при використанні | | `VEICLE_MODEL_INFO'

\* Ці значення розраховуються від осі (зазвичай центру) транспортного засобу.


