---
title: OnPlayerEnterCheckpoint
description: This callback is called when a player enters the checkpoint set for that player.
tags: ["player", "checkpoint"]
---

## คำอธิบาย

This callback is called when a player enters the checkpoint set for that player.

| Name     | Description                            |
| -------- | -------------------------------------- |
| playerid | The player who entered the checkpoint. |

## ส่งคืน

มันถูกเรียกในฟิลเตอร์สคริปต์ก่อนเสมอ

## ตัวอย่าง

```c
//In this example, a checkpoint is created for the player when spawning,
//which creates a vehicle and disables the checkpoint.
public OnPlayerSpawn(playerid)
{
    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);
    return 1;
}

public OnPlayerEnterCheckpoint(playerid)
{
    CreateVehicle(520, 1982.6150, -221.0145, -0.2432, 82.2873, -1, -1, 60000);
    DisablePlayerCheckpoint(playerid);
    return 1;
}
```

## บันทึก

:::tip

NPC สามารถเรียก Callback นี้ได้

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetPlayerCheckpoint](../../scripting/functions/SetPlayerCheckpoint.md): Create a checkpoint for a player.
- [DisablePlayerCheckpoint](../../scripting/functions/DisablePlayerCheckpoint.md): Disable the player's current checkpoint.
- [IsPlayerInCheckpoint](../../scripting/functions/IsPlayerInRaceCheckpoint.md): Check if a player is in a checkpoint.
- [SetPlayerRaceCheckpoint](../../scripting/functions/SetPlayerRaceCheckpoint.md): Create a race checkpoint for a player.
- [DisablePlayerRaceCheckpoint](../../scripting/functions/DisablePlayerRaceCheckpoint.md): Disable the player's current race checkpoint.
- [IsPlayerInRaceCheckpoint](../../scripting/functions/IsPlayerInRaceCheckpoint.md): Check if a player is in a race checkpoint.
