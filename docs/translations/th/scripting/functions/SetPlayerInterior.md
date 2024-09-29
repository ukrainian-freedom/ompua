---
title: SetPlayerInterior
description: Set a player's interior.
tags: ["player"]
---

## คำอธิบาย

Set a player's interior. A list of currently known interiors and their positions can be found here.

| Name       | Description                                                          |
| ---------- | -------------------------------------------------------------------- |
| playerid   | The ID of the player to set the interior of.                         |
| interiorid | The [interior ID](../resources/interiorids.md) to set the player in. |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. This means the player is not connected.

## ตัวอย่าง

```c
// Set player to default interior (outside)
SetPlayerInterior(playerid, 0);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetPlayerInterior: Get the current interior of a player.
- LinkVehicleToInterior: Change the interior that a vehicle is seen in.
- OnPlayerInteriorChange: Called when a player changes interior.
