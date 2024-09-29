---
title: PlayerTextDrawSetPreviewVehCol
description: Set the color of a vehicle in a player-textdraw model preview (if a vehicle is shown).
tags: ["player", "textdraw", "playertextdraw"]
---

## คำอธิบาย

Set the color of a vehicle in a player-textdraw model preview (if a vehicle is shown).

| Name     | Description                                           |
| -------- | ----------------------------------------------------- |
| playerid | The ID of the player whose player-textdraw to change. |
| text     | The ID of the player's player-textdraw to change.     |
| color1   | The color to set the vehicle's primary color to.      |
| color2   | The color to set the vehicle's secondary color to.    |

## ส่งคืน

This function does not return any specific values.

## บันทึก

:::warning

The textdraw MUST use the font TEXT_DRAW_FONT_MODEL_PREVIEW and be showing a vehicle in order for this function to have effect.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- PlayerTextDrawSetPreviewModel: Set model ID of a 3D player textdraw preview.
- PlayerTextDrawSetPreviewRot: Set rotation of a 3D player textdraw preview.
- PlayerTextDrawFont: Set the font of a player-textdraw.
- OnPlayerClickPlayerTextDraw: Called when a player clicks on a player-textdraw.
