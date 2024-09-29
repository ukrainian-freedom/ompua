---
title: LimitGlobalChatRadius
description: Set a radius limitation for the chat.
tags: []
---

## คำอธิบาย

Set a radius limitation for the chat. Only players at a certain distance from the player will see their message in the chat. Also changes the distance at which a player can see other players on the map at the same distance.

| Name              | Description                                          |
| ----------------- | ---------------------------------------------------- |
| Float:chat_radius | The range in which players will be able to see chat. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnGameModeInit()
{
    LimitGlobalChatRadius(200.0);
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetNameTagDrawDistance](../functions/SetNameTagDrawDistance.md): Set the distance from where people can see other player's nametags.
- [SendPlayerMessageToPlayer](../functions/SendPlayerMessageToPlayer.md): Force a player to send text for one player.
- [SendPlayerMessageToAll](../functions/SendPlayerMessageToAll.md): Force a player to send text for all players.
- [OnPlayerText](../callbacks/OnPlayerText.md): Called when a player sends a message via the chat.
