---
заголовок: Ідентифікатори зброї
---

:::info

Ця сторінка містить всю ігрову зброю, що використовується командами [OnPlayerDeath](../callbacks/OnPlayerDeath), [GivePlayerWeapon](../functions/GivePlayerWeapon), [SendDeathMessage](../functions/SendDeathMessage).

:::

---

| Піктограма хада | Причина смерті | Визначення | Ідентифікатор | Слот | Модель | Розмір обойми | Змінні боєприпаси у слоті | Примітки
| --------------------------------------------------------------------- | -------------------------------------------------- | ----------------------- | --- | ---- | ----- | ----- | -------- | --------------------------------------------------------------------------------------------------- |
Кулак | ![](/images/weaponIcons/fist.png)<br/>Кулак | ![](/images/deathIcons/death-fist.gif) | ЗБРОЯ_КУЛАК | 0 | 0 | - | - | - | - | - | - |
Латунний кастет | ![](/images/weaponIcons/brassKnuckles.png)<br/>Латунний кастет | ![](/images/deathIcons/death-brassKnuckles.gif) | WEAPON_BRASSKNUCKLE | 1 | 0 | 331 | - | - | - | - | - |
Гольф-клуб | ![](/images/weaponIcons/golfClub.png)<br/>Гольф-клуб | ![](/images/deathIcons/death-golfClub.gif) | WEAPON_GOLFCLUB | 2 | 1 | 333 | - | - | - | - | - |
Нічна палиця | ![](/images/weaponIcons/nightStick.png)<br/>Nite Stick | ![](/images/deathIcons/death-nightstick.gif) | WEAPON_NITESTICK | 3 | 1 | 334 | - | - | - | - | - |
Ніж | ![](/images/weaponIcons/knife.png)<br/>Ніж | ![](/images/deathIcons/death-knife.gif) | WEAPON_KNIFE | 4 | 1 | 335 | - | - | Може десинхронізувати гравців, коли їм перерізають горло (для інших гравців вони здаються мертвими). Також смерть від ножа може не синхронізуватися для гравців, вбитих в AFK |.
Бейсбольна бита | ![](/images/weaponIcons/baseballBat.png)<br/>Бейсбольна бита | ![](/images/deathIcons/death-baseballBat.gif) | WEAPON_BAT | 5 | 1 | 336 | - | - | - | - |
Лопата | ![](/images/weaponIcons/shovel.png)<br/>Лопата | ![](/images/deathIcons/death-shovel.gif) | ЗБРОЯ_ЛОПАТА | 6 | 1 | 337 | - | - | - | - | - |
Кий для пулу | ![](/images/weaponIcons/poolCue.png)<br/>Кий для пулу | ![](/images/deathIcons/death-poolCue.gif) | ЗБРОЯ_КИЙ ДЛЯ ПУЛУ | 7 | 1 | 338 | - | - | - | - | - |
| Катана | ![](/images/weaponIcons/katana.png)<br/>Катана | ![](/images/deathIcons/death-katana.gif) | WEAPON_KATANA | 8 | 1 | 339 | - | - | Не може обезголовлювати гравців (як в одиночній грі)
Бензопила | ![](/images/weaponIcons/chainsaw.png)<br/>Бензопила | ![](/images/deathIcons/death-chainsaw.gif) | WEAPON_CHAINSAW | 9 | 1 | 341 | - | - | - | - | Зброя
![](/images/weaponIcons/purpleDildo.png)<br/>Дилдо | ![](/images/deathIcons/death-purpleDildo.gif) | ЗБРОЯ_ДИЛДО | 10 | 10 | 321 | - | - | - | - | - | - | ¦ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
![](/images/weaponIcons/dildo.png)<br/>Дилдо | ![](/images/deathIcons/death-dildo.gif) | WEAPON_DILDO2 | 11 | 10 | 322 | - | - | - | - | - |
Вібратор | ![](/images/weaponIcons/vibrator.png)<br/>Вібратор | ![](/images/deathIcons/death-vibrator.gif) | WEAPON_VIBRATOR | 12 | 10 | 323 | - | - | - | - | - |
Вібратор | ![](/images/weaponIcons/silverVibrator.png)<br/>Вібратор | ![](/images/deathIcons/death-silverVibrator.gif) | WEAPON_VIBRATOR2 | 13 | 10 | 324 | - | - | - | - | - |
Квіти | ![](/images/weaponIcons/flowers.png)<br/>Квіти | ![](/images/deathIcons/death-flowers.gif) | WEAPON_FLOWER | 14 | 10 | 325 | - | - | - | - | - | ¦ ¦Квіти
Тростина | ![](/images/weaponIcons/cane.png)<br/>Тростина | ![](/images/deathIcons/death-cane.gif) | ЗБРОЯ_ТРОСТИНА | 15 | 10 | 326 | - | - | - | - | - | ¦ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Граната | ![](/images/weaponIcons/grenade.png)<br/>Граната | ![](/images/deathIcons/death-grenade.gif) | WEAPON_GRENADE | 16 | 8 | 342 | 1 | Ні | Не стріляє. Синхронізується лише для гравців, які були в потоковому режимі під час кидання гранати.
Сльозогінний газ | ![](/images/weaponIcons/tearGas.png)<br/>Сльозогінний газ | ![](/images/deathIcons/death-tearGas.gif) | WEAPON_TEARGAS | 17 | 8 | 343 | 1 | Ні | Ефект кашлю вимкнено в SA-MP. Синхронізується лише для гравців, які були підключені під час кидання гранати зі сльозогінним газом.
Коктейль Молотова | ![](/images/weaponIcons/molotovCocktail.png)<br/>Коктейль Молотова | ![](/images/deathIcons/death-molotovCocktail.gif) | WEAPON_MOLTOV | 18 | 8 | 344 | 1 | Ні | Вогонь. Синхронізується лише для гравців, які були підключені під час кидання коктейлю Молотова.
| ![](/images/weaponIcons/9mm.png)<br/>Кольт 45 | ![](/images/deathIcons/death-9mm.gif) | WEAPON_COLT45 | 22 | 2 | 346 | 17 (34 для двостволки) | Ні | Вміння можна встановити за допомогою [SetPlayerSkillLevel](../functions/SetplayerSkillLevel) |
| ![](/images/weaponIcons/silenced9mm.png)<br/>Пістолет із глушником | ![](/images/deathIcons/death-silenced9mm.gif) | WEAPON_SILENCED | 23 | 2 | 347 | 17 | Немає | Вміння можна встановити за допомогою [SetPlayerSkillLevel](../functions/SetplayerSkillLevel) | ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦
| ![](/images/weaponIcons/desertEagle.png)<br/>Дезертний орел | ![](/images/deathIcons/death-desertEagle.gif) | WEAPON_DEAGLE | 24 | 2 | 348 | 7 | Немає | Вміння можна встановити за допомогою [SetPlayerSkillLevel](../functions/SetplayerSkillLevel) | ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦
Дробовик | ![](/images/weaponIcons/shotgun.png)<br/>Дробовик | ![](/images/deathIcons/death-shotgun.gif) | WEAPON_SHOTGUN | 25 | 3 | 349 | 1 | Так | Вміння можна встановити за допомогою [SetPlayerSkillLevel](../functions/SetplayerSkillLevel) |
| ![](/images/weaponIcons/sawnoffShotgun.png)<br/>Підпиляний дробовик | ![](/images/deathIcons/death-sawnoffShotgun.gif) | WEAPON_SAWEDOFF | 26 | 3 | 350 | 2 (4 для двостволки) | Так | Вміння можна встановити за допомогою [SetPlayerSkillLevel](../functions/SetplayerSkillLevel) | ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦
| ![](/images/weaponIcons/combatShotgun.png)<br/>Бойовий дробовик | ![](/images/deathIcons/death-combatShotgun.gif) | WEAPON_SHOTGSPA | 27 | 3 | 351 | 7 | Так | Вміння можна встановити за допомогою [SetPlayerSkillLevel](../functions/SetplayerSkillLevel) | ¦ ¦Вміння можна встановити за допомогою [SetPlayerSkillLevel](../functions/SetplayerSkillLevel) ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦
UZI | ![](/images/weaponIcons/microSMG-Uzi.png)<br/>UZI | ![](/images/deathIcons/death-microSMG-Uzi.gif) | WEAPON_UZI | 28 | 4 | 352 | 50 (100 для подвійної гармати) | Так | Вміння можна встановити за допомогою [SetPlayerSkillLevel](../functions/SetplayerSkillLevel) |
| ![](/images/weaponIcons/mp5.png)<br/>MP5 | ![](/images/deathIcons/death-mp5.gif) | WEAPON_MP5 | 29 | 4 | 353 | 30 | Так | Вміння можна встановити за допомогою [SetPlayerSkillLevel](../functions/SetplayerSkillLevel) | ¦ ¦Вміння можна встановити за допомогою [SetPlayerSkillLevel](../functions/SetplayerSkillLevel) ¦ ¦ ¦ ¦
AK-47 | ![](/images/weaponIcons/ak47.png)<br/>AK-47 | ![](/images/deathIcons/death-ak47.gif) | WEAPON_AK47 | 30 | 5 | 355 | 30 | Так | Вміння можна встановити за допомогою [SetPlayerSkillLevel](../functions/SetplayerSkillLevel) | ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦
| ![](/images/weaponIcons/m4.png)<br/>M4 | ![](/images/deathIcons/death-m4.gif) | WEAPON_M4 | 31 | 5 | 356 | 50 | Так | Вміння можна встановити за допомогою [SetPlayerSkillLevel](../functions/SetplayerSkillLevel) |
| ![](/images/weaponIcons/tec9.png)<br/>TEC9 | ![](/images/deathIcons/death-tec9.gif) | WEAPON_TEC9 | 32 | 4 | 372 | 50 (100 для подвійної гармати) | Так | Вміння можна встановити за допомогою [SetPlayerSkillLevel](../functions/SetplayerSkillLevel) | ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦
Гвинтівка | ![](/images/weaponIcons/countryRifle.png)<br/>Гвинтівка | ![](/images/deathIcons/death-countryRifle.gif) | WEAPON_RIFLE | 33 | 6 | 357 | 1 | Ні | Вміння можна встановити за допомогою [SetPlayerSkillLevel](../functions/SetplayerSkillLevel), але воно не матиме ніякого ефекту |
| Снайперська гвинтівка | ![](/images/weaponIcons/sniperRifle.png)<br/>Снайперська гвинтівка | ![](/images/deathIcons/death-sniperRifle.gif) | WEAPON_SNIPER | 34 | 6 | 358 | 1 | Немає | Вміння можна встановити за допомогою [SetPlayerSkillLevel](../functions/SetplayerSkillLevel), але воно не матиме ніякого ефекту
| ![](/images/weaponIcons/rpg.png)<br/>Ракетна установка | ![](/images/deathIcons/death-rpg.gif) | WEAPON_ROCKETLAUNCHER | 35 | 7 | 359 | 1 | Ні | Синхронізується лише для гравців, які були підключені до трансляції під час запуску снаряда
Шукач тепла | ![](/images/weaponIcons/hsRocket.png)<br/>Heat Seeker | ![](/images/deathIcons/death-hsRocket.gif) | WEAPON_HEATSEEKER | 36 | 7 | 360 | 1 | Ні | Блокування не синхронізовано. Синхронізується лише для гравців, які були в потоковому режимі під час запуску снаряда.
Вогнемет | ![](/images/weaponIcons/flame-Thrower.png)<br/>Вогнемет | ![](/images/deathIcons/death-flameThrower.gif) | WEAPON_FLAMETHROWER | 37 | 7 | 361 | 500 (у грі показується як 50) | Ні | Використовується для пошкодження вогнем, навіть якщо вогонь створюється вибухом ракети або пляшки із запальною сумішшю. Створений вогонь не синхронізується між гравцями
| ![](/images/weaponIcons/minigun.png)<br/>Мініган | ![](/images/deathIcons/death-minigun.gif) | WEAPON_MINIGUN | 38 | 7 | 362 | 500 | Немає | - | - |
| ![](/images/weaponIcons/satchelCharge.png)<br/>Рюкзаки-вибухівка | ![](/images/deathIcons/death-satchelCharge.gif) | WEAPON_SATCHEL | 39 | 8 | 363 | 1 | Немає | Синхронізується лише для гравців, які були підключені під час кидання рюкзаків |
Бомба | ![](/images/weaponIcons/detonator.png)<br/>Бомба | ![](/images/deathIcons/death-detonator.gif) | WEAPON_BOMB | 40 | 12 | 364 | - | - | Надається автоматично, коли гравці кидають заряд із ранця (див. ID 39) (не враховується при перевірці на чит). Також підриває бомби, кинуті іншими гравцями.
| ![](/images/weaponIcons/spraycan.png)<br/>Бризкальце | ![](/images/deathIcons/death-sprayCan.gif) | WEAPON_SPRAYCAN | 41 | 9 | 365 | 500 | Ні | Гравці, яких розбризкали, задихаються |
| ![](/images/weaponIcons/fireExtinguisher.png)<br/>Вогнегасник | ![](/images/deathIcons/death-fireExtinguisher.gif) | WEAPON_FIREEXTINGUISHER | 42 | 9 | 366 | 500 | Немає | Гравці, на яких розпилено, задихаються
| ![](/images/weaponIcons/camera.png)<br/>Камера | ![](/images/deathIcons/death-camera.gif) | WEAPON_CAMERA | 43 | 9 | 367 | 36 | Ні | Зберігає фотографії в галерею гравця, якщо ввімкнено через меню паузи (Мої документи\GTA San Andreas\Файли користувача\Галерея) |)
| ![](/images/weaponIcons/nightVisGoggles.png)<br/>Окуляри нічного бачення | ![](/images/deathIcons/death-nightVisGoggles.gif) | WEAPON_NIGHT_VISION_GOGGLES | 44 | 11 | 368 | - | - | Візуальні ефекти показуються для всіх гравців (доступне виправлення) |
![](/images/weaponIcons/thermalGoggles.png)<br/>Термічні окуляри | ![](/images/deathIcons/death-thermalGoggles.gif) | WEAPON_THERMAL_GOGGLES | 45 | 11 | 369 | - | - | - | Візуальні ефекти показуються для всіх гравців (доступне виправлення) |
Парашут | ![](/images/weaponIcons/parachute.png)<br/>Парашут | ![](/images/deathIcons/death-parachute.gif) | WEAPON_PARACHUTE | 46 | 11 | 371 | - | - | Гравці загинуть, якщо телепортуються під час пірнання з парашутом (можна виправити за допомогою [ResetPlayerWeapons](../functions/ResetPlayerWeapons)). Парашути видаються при катапультуванні з літака (не враховувати при перевірці на чит) | !
| ![](/images/weaponIcons/cellphone.png)<br/>Мобільний телефон | - | - | - | - | - | - | - | - | - | Вирізано з гри.                                                                                               |
| ![](/images/weaponIcons/jetpack.png)<br/>Реактивний ранець | - | - | - | - | - | 370 | - | - | - | Не працює як зброя. Дивіться [SetPlayerSpecialAction](../functions/SetPlayerSpecialAction).                     |
Скейтборд | ![](/images/weaponIcons/skateboard.png)<br/>Скейтборд | - | - | - | - | - | - | - | - | Вирізано з гри.                                                                                               |
Фальшивий пістолет | ![](/images/deathIcons/death-fakePistol.gif) | - | 47 | N/A | N/A | - | - | - | Тільки іконка смерті, не може бути використана в [GivePlayerWeapon](../functions/GivePlayerWeapon) тощо.                     |
| Транспортний засіб | ![](/images/deathIcons/death-vehicle.gif) | WEAPON_VEHICLE | 49 | N/A | N/A | - | - | Тільки іконка смерті, не може бути використана в [GivePlayerWeapon](../functions/GivePlayerWeapon) тощо.                     |
| Лопаті гелікоптера | ![](/images/deathIcons/death-heliBlades.gif) | REASON_HELICOPTER_BLADES | 50 | N/A | N/A | - | - | Лише іконка смерті, не може бути використана в [GivePlayerWeapon](../functions/GivePlayerWeapon) тощо.                     |
| Вибух | ![](/images/deathIcons/death-explosion.gif) | REASON_EXPLOSION | 51 | N/A | N/A | - | - | Тільки значок смерті, не може бути використаний у [GivePlayerWeapon](../functions/GivePlayerWeapon) тощо. Іноді може використовуватися при непрямому пошкодженні через вибух ракети або гранати
| Потонув | ![](/images/deathIcons/death-drowned.gif) | WEAPON_DROWN | 53 | N/A | N/A | - | - | Тільки значок смерті, не може бути використаний у [GivePlayerWeapon](../functions/GivePlayerWeapon) тощо.                     |
| Splat | ![](/images/deathIcons/death-splat.gif) | WEAPON_COLLISION | 54 | N/A | N/A | - | - | Тільки іконка смерті, не може бути використана в [GivePlayerWeapon](../functions/GivePlayerWeapon) тощо.                     |
| Підключити | ![](/images/deathIcons/death-connect.gif) | REASON_CONNECT | 200 | N/A | N/A | - | - | Використовується лише в [SendDeathMessage](../functions/SendDeathMessage)
| Від'єднати | ![](/images/deathIcons/death-disconnect.gif) | REASON_DISCONNECT | 201 | N/A | N/A | - | - | Використовується лише в [SendDeathMessage](../functions/SendDeathMessage)
| Самогубство | ![](/images/deathIcons/death-suicide.gif) | REASON_SUICIDE | 255 | N/A | N/A | - | - | Тільки іконка смерті, не може бути використана в [GivePlayerWeapon](../functions/GivePlayerWeapon) тощо. Використовується, коли гравець отримує 0 HP за допомогою SetPlayerHealth, вибуху в транспортному засобі тощо.                     |

---


