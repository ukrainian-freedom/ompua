---
title: GetVehicleParamsEx
description: Gets a vehicle's parameters.
tags: ["vehicle"]
---

## คำอธิบาย

Gets a vehicle's parameters.

| Name       | Description                                                         |
| ---------- | ------------------------------------------------------------------- |
| vehicleid  | The ID of the vehicle to get the parameters from.                   |
| &engine    | Get the engine status. If 1, the engine is running..                |
| &lights    | Get the vehicle's lights' state. If 1 the lights are on.            |
| &alarm     | Get the vehicle's alarm state. If 1 the alarm is (or was) sounding. |
| &doors     | Get the lock status of the doors. If 1 the doors are locked.        |
| &bonnet    | Get the bonnet/hood status. If 1, it's open.                        |
| &boot      | Get the boot/trunk status. 1 means it is open.                      |
| &objective | Get the objective status. 1 means the objective is on.              |

## ส่งคืน

1 - success

0 - failure (invalid vehicle ID).

The vehicle's parameters are stored in the referenced variables, not in the return value.

## ตัวอย่าง

```c
new engine, lights, alarm, doors, bonnet, boot, objective;
GetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
//This would cause all the variable above, to become the status of its subject.
```

## บันทึก

:::tip

If a parameter is unset (SetVehicleParamsEx not used beforehand) the value will be -1 ('unset').

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetVehicleParamsEx: Sets a vehicle's params for all players.
