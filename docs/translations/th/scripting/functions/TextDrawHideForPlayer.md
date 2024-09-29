---
title: TextDrawHideForPlayer
description: Hides a textdraw for a specific player.
tags: ["player", "textdraw"]
---

## คำอธิบาย

Hides a textdraw for a specific player.

| Name     | Description                                                 |
| -------- | ----------------------------------------------------------- |
| playerid | The ID of the player that the textdraw should be hidden for |
| text     | The ID of the textdraw to hide                              |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
new Text:Textdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    Textdraw[playerid] = TextDrawCreate( ... );
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
    TextDrawDestroy(Textdraw[playerid]);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    TextDrawShowForPlayer(playerid, Textdraw[playerid]);
    return 1;
}

public OnPlayerDeath(playerid, reason)
{
    TextDrawHideForPlayer(playerid, Textdraw[playerid]);
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [TextDrawHideForAll](../functions/TextDrawHideForAll.md): Hide a textdraw for all players.
- [TextDrawShowForPlayer](../functions/TextDrawShowForPlayer.md): Show a textdraw for a certain player.
- [TextDrawShowForAll](../functions/TextDrawShowForAll.md): Show a textdraw for all players.
