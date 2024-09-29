---
назва: Статус пошкодження
description: Інформація про статус пошкодження транспортного засобу та зразок коду.
---

:::note

Інформація про статус пошкодження автомобіля, що використовується функціями [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus) та [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus).

:::

Пошкодження транспортного засобу зберігаються у 4-х значеннях: **Панелі**, **Двері**, **Фари** та **Шини**. Кожне значення містить бітову маску стану всіх панелей, дверей, фар або шин. Це означає, що для роботи з ними потрібно використовувати побітові оператори (більшу частину часу).

Наприклад, стан шин зберігає 4 біти для 4-х шин. Значення дорівнює 1, якщо шина проколота, і 0, якщо вона не проколота. Так, наприклад, значення `1010` означає, що обидві передні шини спущені, а задні - ні.

:::примітка

Детальніше про стани панелей дивіться у розділі [Стани панелей](../resources/panelstates).  
Докладнішу інформацію про стани дверей дивіться у розділі [Стани дверей](../resources/doorstates).  
Докладнішу інформацію про стани світла див. у розділі [Стани світла](../resources/lightstates).  
Докладнішу інформацію про стани шин наведено у розділі [Стани шин](../resources/tirestates).

:::

Для полегшення роботи з ними нижче наведено деякі функції кодування та декодування.

```c
//Панелі
decode_panels(panels, &передня_ліва_панель, &передня_права_панель, &задня_ліва_панель, &задня_права_панель, &вітло, &передній_бампер, &задній_бампер)
{
    front_left_panel = panels & 15;
    front_right_panel = panels >> 4 & 15;
    rear_left_panel = panels >> 8 & 15;
    rear_right_panel = panels >> 12 & 15;
    лобове скло = panels >> 16 & 15;
    front_bumper = panels >> 20 & 15;
    rear_bumper = panels >> 24 & 15;
}

encode_panels(front_left_panel, front_right_panel, rear_left_panel, rear_right_panel, windshield, front_bumper, rear_bumper)
{
    return front_left_panel | (front_right_panel << 4) | (rear_left_panel << 8) | (rear_right_panel << 12) | (windshield << 16) | (front_bumper << 20) | (rear_bumper << 24);
}

//Двері
decode_doors(doors, &bonnet, &boot, &driver_door, &passenger_door)
{
    bonnet = doors & 7;
    boot = doors >> 8 & 7;
    driver_door = doors >> 16 & 7;
    passenger_door = doors >> 24 & 7;
}

encode_doors(bonnet, boot, driver_door, passenger_door)
{
    return bonnet | (boot << 8) | (driver_door << 16) | (passenger_door << 24);
}

//Ліхтарі
decode_lights(lights, &передня_ліва_фара, &передня_права_фара, &задня_фара)
{
    front_left_light = lights & 1;
    front_right_light = lights >> 2 & 1;
    back_lights = lights >> 6 & 1;
}

encode_lights(front_left_light, front_right_light, back_lights)
{
    return front_left_light | (front_right_light << 2) | (back_lights << 6);
}

//Шини
decode_tires(tires, &rear_right_tire, &front_right_tire, &rear_left_tire, &front_left_tire)
{
    rear_right_tire = tires & 1;
    front_right_tire = tires >> 1 & 1;
    rear_left_tire = tires >> 2 & 1;
    front_left_tire = tires >> 3 & 1;
}

encode_tires(rear_right_tire, front_right_tire, rear_left_tire, front_left_tire)
{
	return rear_right_tire | (front_right_tire << 1) | (rear_left_tire << 2) | (front_left_tire << 3);
}
```


