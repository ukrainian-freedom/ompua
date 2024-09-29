---
title: deleteproperty
description: Delete an earlier set property (setproperty).
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Delete an earlier set property (setproperty).

| Name   | Description                                                                    |
| ------ | ------------------------------------------------------------------------------ |
| id     | The virtual machine to use. You should keep this as zero.                      |
| name[] | The property's name, you should keep this blank ("").                          |
| value  | The property's unique ID. Use the hash-function to calculate it from a string. |

## ส่งคืน

The value of the property. If the property does not exist, the function returns 0.

## ตัวอย่าง

```c
deleteproperty(0, "", 123984334);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [Setproperty](../../scripting/functions/Setproperty.md): Set a property.
- [Getproperty](../../scripting/functions/Getproperty.md): Get the value of a property.
- [Existproperty](../../scripting/functions/Existproperty.md): Check if a property exists.
