---
заголовок: Константи
description: Список усіх визначень стандартних констант бібліотеки.
теги: []
---

# a_samp

## Ліміти

| Значення константи
| ----------------- | --------------------- |
| 24 МАКС_ІМ'Я_ГРАВЦЯ
| 1000 MAX_PLAYERS
| 2000 MAX_VEHICLES
| 1000 MAX_ACTORS
| 1000 MAX_OBJECTS
| 1024 | MAX_GANG_ZONES
| Text:2048 | MAX_TEXT_DRAWS
| PlayerText:256 | MAX_PLAYER_TEXT_DRAWS
| Меню:128 | MAX_MENU
| Text3D:1024 | MAX_3DTEXT_GLOBAL
| PlayerText3D:1024 | MAX_3DTEXT_PLAYER
| 4096 | MAX_PICKUPS

## Недійсні константи

| Значення константи
| ------------------- | ------------------------ |
| 255 | NO_TEAM
| 0xFFFF INVALID_PLAYER_ID
| 0xFFFF | INVALID_VEHICLE_ID
| 0xFFFF, недійсний ідентифікатор актора.
| 0xFFFF, недійсний ідентифікатор об'єкта.
| Меню: 0xFF | INVALID_MENU
| Text:0xFFFF | INVALID_TEXT_DRAW
| PlayerText:0xFFFF | INVALID_PLAYER_TEXT_DRAW
-1 | INVALID_GANG_ZONE
| Text3D:0xFFFF | INVALID_3DTEXT_ID
| PlayerText3D:0xFFFF | INVALID_PLAYER_3DTEXT_ID

## Константи зброї

| Значення константи зброї
| ----- | ------------------ | ----------------------- |
| 0 | Кулак | WEAPON_FIST
| 1 | Кастет | WEAPON_BRASSKNUCKLE
| 2 | Ключка для гольфу | WEAPON_GOLFCLUB
| 3 | Нічна палиця | WEAPON_NITESTICK |
| 4 | Ніж | WEAPON_KNIFE
| 5 | Бейсбольна бита | WEAPON_BAT |
| 6 | Лопата | WEAPON_SHOVEL |
| 7 | Більярдний кий | WEAPON_POOLSTICK |
| 8 | Катана | WEAPON_KATANA |
| 9 | Бензопила | WEAPON_CHAINSAW |
| 10 | Дилдо | WEAPON_DILDO |
| 11 | Дилдо | WEAPON_DILDO2
| 12 | Вібратор | WEAPON_VIBRATOR
| 13 | Вібратор | WEAPON_VIBRATOR2
| 14 | Квітка | WEAPON_FLOWER
| 15 | Палиця | WEAPON_CANE |
| 16 | Граната | WEAPON_GRENADE |
| 17 | Сльозогінний газ | WEAPON_TEARGAS
| 18 | Коктейль Молотова | WEAPON_MOLTOV
| 22 | Кольт 45 | WEAPON_COLT45
| 23 | Безшумний пістолет | WEAPON_SILENCED
| 24 | Пустельний орел | WEAPON_DEAGLE |
| 25 | Дробовик | WEAPON_SHOTGUN
| 26 | Дробовик з обрізом | WEAPON_SAWEDOFF
| 27 | Бойовий дробовик | WEAPON_SHOTGSPA |
| 28 | UZI | ЗБРОЯ_UZI |
| 29 | MP5 | WEAPON_MP5 |
| 30 | AK-47 | WEAPON_AK47 |
| 31 | M4 | WEAPON_M4 |
| 32 | TEC9 | WEAPON_TEC9 |
| 33 | гвинтівка | WEAPON_RIFLE |
| 34 | Снайперська гвинтівка | WEAPON_SNIPER |
| 35 | Ракетна установка | WEAPON_ROCKETLAUNCHER
| 36 | Тепловізор | WEAPON_HEATSEEKER
| 37 | Вогнемет | WEAPON_FLAMETHROWER
| 38 | Міні-пістолет | WEAPON_MINIGUN
| 39 | Ранець з вибухівкою | WEAPON_SATCHEL
| 40 | Бомба | WEAPON_BOMB
| 41 | Балончик з розпилювачем | WEAPON_SPRAYCAN
| 42 | Вогнегасник | WEAPON_FIREEXTINGUISHER
| 43 | Камера | WEAPON_CAMERA |
| 46 | Парашут | WEAPON_PARACHUTE
| 49 | Транспортний засіб | WEAPON_VEHICLE
| 53 | Утоплення | WEAPON_DROWN
| 54 | Зіткнення зі зброєю | WEAPON_COLLISION

## Режими маркерів

| Значення - постійне.
| ----- | ------------------------------ |
| 0 | PLAYER_MARKERS_MODE_OFF
| 1 | PLAYER_MARKERS_MODE_GLOBAL
| 2 | PLAYER_MARKERS_MODE_STREAMED

## Клавіші

| Значення: константа
| ------ | ------------------------------ |
| 1 | KEY_ACTION
| 2 KEY_CROUCH
| 4 KEY_FIRE
| 8 KEY_SPRINT
| 16 KEY_SECONDARY_ATTACK
| 32 КЛАВІША «СТРИБОК
| 64 КЛАВІША_ПОГЛЯД_ВПРАВО
| 128 | KEY_HANDBRAKE
| 256 | KEY_LOOK_LEFT
| 512 | KEY_SUBMISSION
| 512 | KEY_LOOK_BEHIND
| 1024 | KEY_WALK
| 2048 | KEY_ANALOG_UP
| 4096 | KEY_ANALOG_DOWN
| 8192 | KEY_ANALOG_LEFT
| 16384 | KEY_ANALOG_RIGHT
| 65536 | KEY_YES
| 131072 | KEY_NO
| 262144 | KEY_CTRL_BACK

## Стилі діалогів

| Значення - константа
| ----- | ------------------------------ |
| 0 | DIALOG_STYLE_MSGBOX
| 1 | DIALOG_STYLE_INPUT
| 2 | DIALOG_STYLE_LIST
| 3 | DIALOG_STYLE_PASSWORD
| 4 | DIALOG_STYLE_TABLIST
| 5 | DIALOG_STYLE_TABLIST_HEADERS

## Шрифти TextDraw

| Значення: константа
| ----- | ------------------------------ |
| 0 | TEXT_DRAW_FONT_0
| 1 | TEXT_DRAW_FONT_1
| 2 | TEXT_DRAW_FONT_2
| 3 | TEXT_DRAW_FONT_3 |
| 4 TEXT_DRAW_FONT_SPRITE_DRAW
| 5 | TEXT_DRAW_FONT_MODEL_PREVIEW | TEXT_DRAW_FONT_MODEL_PREVIEW

## Шрифти TextDraw (З open.mp)

| Значення - константа.
|-------|--------------------------------|
| 0 | TEXT_DRAW_FONT_BECKETT_REGULAR
| 1 | TEXT_DRAW_FONT_AHARONI_BOLD
| 2 TEXT_DRAW_FONT_BANK_GOTHIC
| 3 | TEXT_DRAW_FONT_PRICEDOWN
| 4 TEXT_DRAW_FONT_SPRITE
| 5 | TEXT_DRAW_FONT_PREVIEW | TEXT_DRAW_FONT_PREVIEW

## TextDraw Вирівнювання

| Значення - константа.
| ----- | ------------------------------ |
| 1 | TEXT_DRAW_ALIGN_LEFT
| 2 | TEXT_DRAW_ALIGN_CENTRE
| 2 | TEXT_DRAW_ALIGN_CENTER
| 3 | TEXT_DRAW_ALIGN_RIGHT

## Перерахування SVar

| Значення - константа
| ----- | ------------------------------ |
| 0 | SERVER_VARTYPE_NONE
| 1 | SERVER_VARTYPE_INT
| 2 | SERVER_VARTYPE_STRING
| 3 | SERVER_VARTYPE_FLOAT

## Ілюстрації / Сітьові моделі

| Значення: константа
| ----- | ------------------------------ |
| 0 | DOWNLOAD_REQUEST_EMPTY
| 1 | DOWNLOAD_REQUEST_MODEL_FILE
| 2 | ЗАВАНТАЖИТИ_ЗАПИТ_ФАЙЛ_ТЕКСТУРИ

## Натисніть «Джерела

| Значення - константа
| ----- | ------------------------------ |
| 0 | CLICK_SOURCE_SCOREBOARD

## Редагувати типи відповідей

| Значення: константа
| ----- | ------------------------------ |
| 0 | EDIT_RESPONSE_CANCEL | РЕДАГУВАТИ_ВІДПОВІДЬ_CANCEL
| 1 | EDIT_RESPONSE_FINAL
| 2 | EDIT_RESPONSE_UPDATE

## Виберіть типи об'єктів

| Значення - константа.
| ----- | ------------------------------ |
| 1 | SELECT_OBJECT_GLOBAL_OBJECT
| 2 | SELECT_OBJECT_PLAYER_OBJECT

## Типи влучень кулі

| Значення: константа
| ----- | ------------------------------ |
| 0 | BULLET_HIT_TYPE_NONE
| 1 BULLET_HIT_TYPE_PLAYER
| 2 BULLET_HIT_TYPE_VEHICLE
| 3 КУЛЯ_ПОТРАПИЛА_В_ОБ'ЄКТ
| 4 КУЛЯ_ПОРАНИЛА_ТИП_ОБ'ЄКТА_ГРАВЦЯ

## a_гравців

## Limits

| Значення - константа.
| ----- | ------------------------------- |
| 10 | MAX_PLAYER_ATTACHED_OBJECTS
| 144 | MAX_CHATBUBBLE_LENGTH

## Спеціальні дії

| Значення - константа
| ----- | ------------------------------- |
| 0 | СПЕЦІАЛЬНА_ДІЯ_ВІДСУТНЯ
| 1 СПЕЦІАЛЬНА_ДІЯ_КАЧКА
| 2 - СПЕЦІАЛЬНА_ДІЯ_ВИКОРИСТАННЯ_РЕАКТИВНОГО_ПАКЕТА
| 3) СПЕЦІАЛЬНА_ДІЯ_ЗАЙТИ_В_ТРАНСПОРТНИЙ_ЗАСІБ
| 4) СПЕЦІАЛЬНА_ДІЯ_ВИХІД_З_АВТОМОБІЛЯ
| 5) ТАНЕЦЬ_СПЕЦЗАГОНУ_1
| 6_ТАНЕЦЬ_СПЕЦЗАГОНУ_2
| 7_ТАНЕЦЬ_СПЕЦЗАГОНУ_3_ТАНЕЦЬ_СПЕЦЗАГОНУ_3
| 8_ТАНЕЦЬ_СПЕЦЗАГОНУ_4
| 10_СПЕЦ_ДІЯ_РУКОСТИСКАННЯ
| 11_СПЕЦ_ЗАХОДИ_З_МОБІЛЬНИМ_ТЕЛЕФОНОМ_СПЕЦ_ЗАХОДІВ_СПЕЦ_ЗАХОДІВ_СПЕЦ_ЗАХОДІВ
| 12_СПЕЦЗАГОНУ_СИДЯЧИ
| 13) СПЕЦЗАМОВЛЕННЯ_СТОП МОБІЛЬНИЙ ТЕЛЕФОН
| 20 - СПЕЦІАЛЬНА АКЦІЯ - ВИПИТИ ПИВА
| 21) СПЕЦІАЛЬНА АКЦІЯ - ВИКУРИТИ СИГАРЕТУ.
| 22 - ВИНО ЗА СПЕЦІАЛЬНОЮ ЦІНОЮ.
| 23) СПЕЦІАЛЬНА АКЦІЯ - НАПІЙ «СПРАЙН».
| 24) НАРУЧНИКИ СПЕЦІАЛЬНОГО ПРИЗНАЧЕННЯ.
| 25, СПЕЦЗАГОНУ «НОСІННЯ».
| 68 - СПЕЦІАЛЬНОГО ПРИЗНАЧЕННЯ, ЩО ПІСЯЄ.

## Бойові стилі

| Значення: константа.
| ----- | ------------------------------- |
| 0 - СТИЛЬ_БОЮ_НОРМАЛЬНИЙ
| 1 БОЙОВИЙ_СТИЛЬ_БОКС
| 2 - КУНГ-ФУ
| 3) СТИЛЬ БОЮ - КОЛІННО-ЛІКТЬОВИЙ.
| 4 - ГРАБКІК.
| 5 - УДАР ЛІКТЕМ.

## Вміння володіння зброєю

| Значення: постійне.
| ----- | ------------------------------- |
| 0 WEAPONSKILL_PISTOL
| 1 WEAPONSKILL_PISTOL_SILENCED
| 2 WEAPONSKILL_DESERT_EAGLE
| 3 WEAPONSKILL_SHOOTGUN
| 4 ЗБРОЯРСЬКА НАВИЧКА_ДРОБОВИК_САМОПАЛЬНИЙ_ДРОБОВИК
| 5 WEAPONSKILL_SPAS12_SHOTGUN
| 6 WEAPONSKILL_MICRO_UZI
| 7 WEAPONSKILL_MP5
| 8 WEAPONSKILL_AK47
| 9 WEAPONSKILL_M4
| 10 WEAPONSKILL_SNIPERRIFLE

## Стан зброї

| Значення: константа.
| ----- | -------------------------- |
-1 СТАН_ЗБРОЇ_НЕВІДОМИЙ
| 0 - СТАН_ЗБРОЇ_БЕЗ_НАБОЇВ
| 1 - СТАН_ЗБРОЇ_ОСТАННІЙ_НАБІЙ
| 2 - СТАН_ЗБРОЇ_БІЛЬШЕ_НАБОЇВ
| 3 | СТАН_ПЕРЕЗАРЯДКИ_ЗБРОЇ

## Перерахування PVar

| Значення - константа.
| ----- | -------------------------- |
| 0 - ТИП_ГРАВЦЯ_НЕМАЄ
| 1 | PLAYER_VARTYPE_INT
| 2 | PLAYER_VARTYPE_STRING
| 3 | PLAYER_VARTYPE_FLOAT

## Стилі піктограм мапи

| Значення: константа
| ----- | -------------------------- |
| 0 | MAPICON_LOCAL
| 1 | MAPICON_GLOBAL
| 2 | MAPICON_LOCAL_CHECKPOINT
| 3 | MAPICON_GLOBAL_CHECKPOINT

## Стилі кадрування камери

| Значення: константа
| ----- | -------------------------- |
| 1 | CAMERA_MOVE
| 2 | CAMERA_CUT

## Режими перегляду

| Значення: константа
| ----- | -------------------------- |
| 1 SPECTATE_MODE_NORMAL
| 2 | SPECTATE_MODE_FIXED
| 3 | SPECTATE_MODE_SIDE

## Запис для відтворення NPC

| Значення: константа.
| ----- | ------------------------------------ |
| 1 ТИП_ЗАПИСУ_ГРАВЦЯ_ВІДСУТНІЙ
| 2 ТИП_ЗАПИСУ_ГРАВЦЯ_ДРАЙВЕР
| 3 ТИП_ЗАПИСУ_ПРОГРАВАЧА_ПІШОХІДНИЙ

## a_vehicles

## Тип модифікації автомобіля

| Значення: константа
| ----- | ----------------------- |
| 0 | CARMODTYPE_SPOILER
| 1 CARMODTYPE_HOOD
| 2 | CARMODTYPE_ROOF
| 3 | CARMODTYPE_SIDESKIRT
| 4 CARMODTYPE_LAMPS
| 5 CARMODTYPE_NITRO
| 6 CARMODTYPE_EXHAUST
| 7 CARMODTYPE_WHEELS
| 8 CARMODTYPE_STEREO
| 9 | CARMODTYPE_HYDRAULICS
| 10 | CARMODTYPE_ПЕРЕДНІЙ_БАМПЕР
| 11 | CARMODTYPE_REAR_BUMPER
| 12 | CARMODTYPE_VENT_RIGHT
| 13 | CARMODTYPE_VENT_LEFT

## Параметри транспортного засобу

| Значення: константа
| ----- | ------------------------- |
| 0 | VEHICLE_PARAMS_UNSET
| 1 | VEHICLE_PARAMS_OFF
| 2 | VEHICLE_PARAMS_ON

## Інформація про модель транспортного засобу

| Значення: константа.
| ----- | --------------------------------- |
| 1 | VEHICLE_MODEL_INFO_SIZE
| 2 | VEHICLE_MODEL_INFO_INFO_FRONTSEAT
| 3 | VEHICLE_MODEL_INFO_REARSEAT
| 4 | VEHICLE_MODEL_INFO_PETROLCAP
| 5 | VEHICLE_MODEL_INFO_WHEELSFRONT
| 6 | VEHICLE_MODEL_INFO_WHEELSREAR
| 7 | VEHICLE_MODEL_INFO_WHEELSMID
| 8 | VEHICLE_MODEL_INFO_FRONT_BUMPER_Z
| 9 | VEHICLE_MODEL_INFO_REAR_BUMPER_Z

# a_objects

## Розмір тексту матеріалу об'єкта

| Значення: константа
| ----- | ---------------------------- |
| 10 | OBJECT_MATERIAL_SIZE_32x32
| 20 | OBJECT_MATERIAL_SIZE_64x32
| 30 | OBJECT_MATERIAL_SIZE_64x64
| 40 | OBJECT_MATERIAL_SIZE_128x32
| 50 | OBJECT_MATERIAL_SIZE_128x64
| 60 | OBJECT_MATERIAL_SIZE_128x128
| 70 | OBJECT_MATERIAL_SIZE_256x32
| 80 | OBJECT_MATERIAL_SIZE_256x64
| 90 | OBJECT_MATERIAL_SIZE_256x128
| 100 | OBJECT_MATERIAL_SIZE_256x256
| 110 | OBJECT_MATERIAL_SIZE_512x64
| 120 | OBJECT_MATERIAL_SIZE_512x128
| 130 | OBJECT_MATERIAL_SIZE_512x256
| 140 | OBJECT_MATERIAL_SIZE_512x512

## Вирівнювання тексту матеріалу об'єкта

| Значення - константа.
| ----- | --------------------------------- |
| 0 | OBJECT_MATERIAL_TEXT_ALIGN_LEFT
| 1 | OBJECT_MATERIAL_TEXT_ALIGN_CENTER
| 2 | OBJECT_MATERIAL_TEXT_ALIGN_RIGHT

# a_http

| Значення: константа.
| ----- | ----------------------------- |
| 1 | HTTP_ERROR_BAD_HOST
| 2 | HTTP_ERROR_NO_SOCKET
| 3 HTTP_ERROR_CANT_CONNECT
| 4 HTTP_ERROR_CANT_WRITE
| HTTP_ERROR_CONTENT_TOO_BIG
| 6 | HTTP_ERROR_MALFORMED_RESPONSE


