---
title: TextDrawShowForAll
description: Shows a textdraw for all players.
tags: ["textdraw"]
---

## คำอธิบาย

Shows a textdraw for all players.

| Name | Description                                                 |
| ---- | ----------------------------------------------------------- |
| text | The ID of the textdraw to show. Returned by TextDrawCreate. |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. This means the textdraw specified does not exist.

## ตัวอย่าง

```c
new Text:textid = TextDrawCreate(100.0, 100.0, "Hello!");
TextDrawShowForAll(textid);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [TextDrawShowForPlayer](../functions/TextDrawShowForPlayer.md): Show a textdraw for a certain player.
- [TextDrawHideForPlayer](../functions/TextDrawHideForPlayer.md): Hide a textdraw for a certain player.
- [TextDrawHideForAll](../functions/TextDrawHideForAll.md): Hide a textdraw for all players.
