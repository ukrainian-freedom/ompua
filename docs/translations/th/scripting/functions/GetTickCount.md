---
title: GetTickCount
description: Returns the uptime of the actual server (not the SA-MP server) in milliseconds.
tags: []
---

## คำอธิบาย

Returns the uptime of the actual server (not the SA-MP server) in milliseconds.

| Name | Description |
| ---- | ----------- |


## ตัวอย่าง

```c
public OnPlayerConnect(playerid)
{
    new count = GetTickCount();
    //Rest of OnPlayerConnect
    printf("Time taken to execute OnPlayerConnect: %d", GetTickCount() - count);
    return 1;
}
```

## บันทึก

:::tip

One common use for GetTickCount is for benchmarking. It can be used to calculate how much time some code takes to execute. See below for an example.

:::

:::warning

GetTickCount will cause problems on servers with uptime of over 24 days as GetTickCount will eventually warp past the integer size constraints. Check [this package](https://github.com/ScavengeSurvive/tick-difference) for a solution.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- tickcount: Get the uptime of the actual server.
