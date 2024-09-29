---
назва: Журнал змін
description: хід розробки open.mp та журнал змін.
---

## **[v1.3.1.2748](https://github.com/openmultiplayer/open.mp/releases/tag/v1.3.1.2748) (Остання)**

Нарешті вийшла нова версія сервера open.mp, у якій було виправлено багато помилок, покращено продуктивність та зроблено декілька доповнень.

Наш лаунчер також отримав нове оновлення, яке ви можете отримати, просто відкривши лаунчер і оновивши його через діалогове вікно оновлення. Список змін можна прочитати тут: <https://github.com/openmultiplayer/launcher/releases/tag/v1.4.0>.

### Сервер

**Добавлено:**

- Додано змінну конфігурації логотипу сервера до [config.json](server/config.json), що дозволяє серверам встановлювати логотип, який буде показано у нашому лаунчері та статусі розбіжностей.
- Додано більше перевірок валідності даних для відповідей у діалогах.
- Додайте перевірку валідності для рядків меню.
- Додано HTTP помилки, які можна прочитати людиною.
- Нове визначення для загальної сумісності з SA-MP API. (`#визначити SAMP_COMPAT`)
- Нове визначення для вимкнення попереджень застарілого скриптового API. (`#define LEGACY_SCRIPTING_API`)

**Зміни:**

- Видалено непотрібні OnPlayerConnect та OnPlayerDisconnect, коли сторонній скрипт (фільтр-скрипт) не завантажено. Натомість введено виклики [OnScriptLoadPlayer](scripting/callbacks/OnScriptLoadPlayer) та [OnScriptUnloadPlayer](scripting/callbacks/OnScriptUnloadPlayer).
- Вилучено купу власних застарівань пішаків з попереджень під час виконання.
- Перевірте валідність URL-адреси CDN.
- Зупинено трансляцію синхронізації глядачів.
- Значення за замовчуванням для здоров'я та броні.
- Покращено продуктивність відповіді на RPC Scores And Pings. (табло)
- Змінено недійсний слот для зброї на `-1`.

**Виправлення:**

- Виправлено сумнозвісний збій RakNet, з яким ми мали справу з самого початку, що впливав на декілька серверів.
- Виправлено рядок, який не відображався у рідкісних випадках використання формату.
- Виправлено проблему, коли crashdetect не міг знайти ім'я файлу та номер рядка, коли було завантажено більше ніж один скрипт.
- Виправлено багато аварійних завершень RakNet та безпечніше керування внутрішньою пам'яттю.
- Виправлено декілька проблем зі з'єднанням та належним чином очищено внутрішній пул плеєрів.
- Виправлено функцію [GetGameText](scripting/functions/GetGameText), яка повертала неправильні/пошкоджені значення.
- Виправлено помилку, через яку версія open.mp не завантажувалася, коли у вікнах користувача встановлено мову з неascii назвами.
- Виправлено заголовки зворотних викликів у файлах `qawno/filterscript.new` та `qawno/gamemode.new`.

<br />

<hr />

## [v1.2.0.2670](https://github.com/openmultiplayer/open.mp/releases/tag/v1.2.0.2670)

<details>
<summary>Натисніть тут, щоб розгорнути</summary>

Ми рекомендуємо всім серверам open.mp оновитися до цієї версії. Відбулося не тільки помітне покращення продуктивності, але й **критичні виправлення безпеки**.

### Сервер

**Добавлено:**

- Нові конфігураційні змінні для встановлення банерів та посилання на запрошення до розбрату, які будуть показані у [open.mp launcher](https://github.com/openmultiplayer/launcher/releases/latest).
- Нова конфігураційна змінна для повідомлень про приєднання. (`logging.log_connection_messages`)
- Нова конфігураційна змінна для перевірки анімації. (`game.validate_animations`)
- Нове визначення, що дозволяє використовувати функції зі змішаним написанням у вашому коді. (`#визначити MIXED_SPELLINGS`)

**Виправлення:**

- Декілька виправлень безпеки.
- Система анонсування тепер використовує IPv4 за замовчуванням, замість IPv6, коли він доступний.
- Виправлено `Get(Player)ObjectMaterial(Text)`, який повертав кольори у неправильному форматі та modelid.
- Виправлено `Get(Player)Gravity`, яка повертала ціле число замість плаваючого.
- Перевірено причини пошкоджень (зброя) у різних місцях.
- Синхронізовано бани так, щоб за необхідності можна було забанити одразу кількох гравців.

</details> </details

<br />

<hr />

## [v1.1.0.2612](https://github.com/openmultiplayer/open.mp/releases/tag/v1.1.0.2612)

<details>
<summary>Натисніть тут, щоб розгорнути</summary>

open.mp вийшов з фази RC, і ми раді повідомити, що ми нарешті достатньо стабільні, щоб продовжити послідовну розробку. у v1.1.0.2612 ми виправили багато помилок і проблем, а також усунули багато відмінностей у поведінці. тож переконайтеся, що ви оновилися до останніх збірок і зможете безперебійно запускати свій сервер.

нарешті вийшов open.mp лаунчер, тепер ви можете надійно переглядати сервери, обирати сервер, на якому хочете грати, і приєднуватися до нього!
Завдяки багатьом новим функціям ви отримаєте набагато кращий досвід у порівнянні зі старим запуском samp, який вам завжди доводилося мати.
Його можна знайти за адресою <https://github.com/openmultiplayer/launcher/releases>

### Сервер

**Додано:**

- x64 версія omp-сервера.
- Автоматично додає `.so` до назв плагінів.

**Зміни:**

- Додано повернення `estimatedTime` у функціях `Move(Player)Object`.

**Виправлення:**

- Виправлено помилку, коли функція `GetVehicleLastDriver` повертала 0, якщо передано невірний `vehicleid`.

</details> </details

<br />

<hr />

## [RC2](https://github.com/openmultiplayer/open.mp/releases/tag/v1-RC2)

<details>
<summary>Натисніть тут для розгортання</summary>

Кандидат на випуск 2 (RC2) сервера open.mp.

### Сервер

**Нові функції:**

- [GetPlayerMarkerForPlayer](scripting/functions/GetPlayerMarkerForPlayer)

**Застарілі функції:** [GetPlayerDDTextLink

- GetPlayer3DTextLabelVirtualW
- SetPlayer3DTextLabelDrawDist
- GetPlayer3DTextLabelDrawDist
- Надіслати клієнтське повідомленняf
- GameTextForPlayerf
- Надіслати повідомлення гравця до гравцяf
- SendClientMessageToAllf
- GameTextForAllf
- SendPlayerMessageToAllf
- SendRconCommandf
- AllowAdminTeleport
- GetPlayerPoolSize
- GetVehiclePoolSize
- GetActorPoolSize
- GetServerVarAsString
- GetServerVarAsFloat
- TextDrawColor
- TextDrawBoxColor
- TextDrawBackgroundColor
- TextDrawSetPreviewVehCol
- PlayerTextDrawColor
- PlayerTextDrawBoxColor
- PlayerTextDrawBackgroundColor
- PlayerTextDrawSetPreviewVehCol
- TextDrawGetColor
- TextDrawGetBoxColor
- TextDrawGetBackgroundColor
- TextDrawGetPreviewVehCol
- PlayerTextDrawGetColor
- PlayerTextDrawGetBoxColor
- PlayerTextDrawGetBackgroundCol
- PlayerTextDrawGetPreviewVehCol
- db_num_rows
- db_get_mem_handle
- db_get_result_mem_handle
- SelectObject
- EditObject
- EditPlayerObject
- CancelEdit
- SetObjectsDefaultCameraCol
- SetObjectNoCameraCol
- IsObjectNoCameraCol
- SetPlayerObjectNoCameraCol
- IsPlayerObjectNoCameraCol
- GetPlayerCameraTargetPlayerObj
- GetObjectTarget
- GetPlayerObjectTarget
- GetPlayerDialog
- fmkdir
- створити
- GetVehicleTower
- ChangeVehicleColor

**Виправлення:**

- Виправлено вимогу введення `.so` у застарілих плагінах Linux.
- Приєднані об'єкти коректно показуються іншим гравцям.
- Виправлено виліт при завантаженні невірної пам'яті для пішаків.

</details> </details

<br />

<hr />

## [RC1](https://github.com/openmultiplayer/open.mp/releases/tag/v1-RC1)

<details>
<summary>Натисніть тут для розгортання</summary>

[Release Candidate 1 (RC1)](https://www.open.mp/blog/release-candidate-1) сервера open.mp! Ми вийшли з бета-версії.

### Сервер

**Добавлено:**

- Додано `{Float,_}:...` до `AddMenuItem`, `Create3DTextLabel`, `CreateMenu`, `CreatePlayer3DTextLabel`, `CreatePlayerTextDraw`, `GameTextForAll`, `GameTextForPlayer`, `PlayerTextDrawSetString`, `SendClientMessage`, `SendClientMessageToAll`, `SendRconCommand`, `SetMenuColumnHeader`, `SetObjectMaterialText`, `SetPlayerObjectMaterialText`, `SetPVarString`, `SetSVarString`, `ShowPlayerDialog`, `TextDrawCreate`, `TextDrawSetString`, `Update3DTextLabelText`, `UpdatePlayer3DTextLabelText` функції. Тепер вони всі форматуються.

**Виправлення

- Зменшення використання пам'яті.

</details> </details

<br />

<hr />

## [Бета-версія v0.0.11.2331](https://github.com/openmultiplayer/open.mp/releases/tag/v0.0.11.2331)

<details>
<summary>Натисніть тут для розгортання</summary>

### Сервер

**Нові функції:**

- [TogglePlayerWidescreen](scripting/functions/TogglePlayerWidescreen)
- [IsPlayerWidescreenToggled](scripting/functions/IsPlayerWidescreenToggled)
- [GetSpawnInfo](scripting/functions/GetSpawnInfo)
- [GetPlayerSkillLevel](scripting/functions/GetPlayerSkillLevel)
- [GetPlayerWeather](scripting/functions/GetPlayerWeather)
- [IsPlayerCheckpointActive](scripting/functions/IsPlayerCheckpointActive)
- [GetPlayerCheckpoint](scripting/functions/GetPlayerCheckpoint)
- [IsPlayerRaceCheckpointActive](scripting/functions/IsPlayerRaceCheckpointActive)
- [GetPlayerRaceCheckpoint](scripting/functions/GetPlayerRaceCheckpoint)
- [GetPlayerWorldBounds](scripting/functions/GetPlayerWorldBounds)
- [IsPlayerInModShop](scripting/functions/IsPlayerInModShop)
- [GetPlayerSirenState](scripting/functions/GetPlayerSirenState)
- [GetPlayerLandingGearState](scripting/functions/GetPlayerLandingGearState)
- [GetPlayerHydraReactorAngle](scripting/functions/GetPlayerHydraReactorAngle)
- [GetPlayerTrainSpeed](scripting/functions/GetPlayerTrainSpeed)
- [GetPlayerZAim](scripting/functions/GetPlayerZAim)
- [GetPlayerSurfingOffsets](scripting/functions/GetPlayerSurfingOffsets)
- [GetPlayerRotationQuat](scripting/functions/GetPlayerRotationQuat)
- [GetPlayerDialogID](scripting/functions/GetPlayerDialogID)
- [GetPlayerSpectateID](scripting/functions/GetPlayerSpectateID)
- [GetPlayerSpectateType](scripting/functions/GetPlayerSpectateType)
- [GetPlayerRawIp](scripting/functions/GetPlayerRawIp)
- [SetPlayerGravity](scripting/functions/SetPlayerGravity)
- [GetPlayerGravity](scripting/functions/GetPlayerGravity)
- [SetPlayerAdmin](scripting/functions/SetPlayerAdmin)
- [IsPlayerSpawned](scripting/functions/IsPlayerSpawned)
- [IsPlayerControllable](scripting/functions/IsPlayerControllable)
- [IsPlayerCameraTargetEnabled](scripting/functions/IsPlayerCameraTargetEnabled)
- [TogglePlayerGhostMode](scripting/functions/TogglePlayerGhostMode)
- [GetPlayerGhostMode](scripting/functions/GetPlayerGhostMode)
- [GetPlayerBuildingsRemoved](scripting/functions/GetPlayerBuildingsRemoved)
- [GetPlayerAttachedObject](scripting/functions/GetPlayerAttachedObject)
- [SendClientMessagef](scripting/functions/SendClientMessagef)
- [GameTextForPlayerf](scripting/functions/GameTextForPlayerf)
- [SendPlayerMessageToPlayerf](scripting/functions/SendPlayerMessageToPlayerf)
- [RemovePlayerWeapon](scripting/functions/RemovePlayerWeapon)
- [HidePlayerDialog](scripting/functions/HidePlayerDialog)
- [IsPlayerUsingOfficialClient](scripting/functions/IsPlayerUsingOfficialClient)
- [AllowPlayerTeleport](scripting/functions/AllowPlayerTeleport)
- [IsPlayerTeleportAllowed](scripting/functions/IsPlayerTeleportAllowed)
- [AllowPlayerWeapons](scripting/functions/AllowPlayerWeapons)
- [ArePlayerWeaponsAllowed](scripting/functions/ArePlayerWeaponsAllowed)
- [IsValidTextDraw](scripting/functions/IsValidTextDraw)
- [IsTextDrawVisibleForPlayer](scripting/functions/IsTextDrawVisibleForPlayer)
- [TextDrawGetString](scripting/functions/TextDrawGetString)
- [TextDrawSetPos](scripting/functions/TextDrawSetPos)
- [TextDrawGetLetterSize](scripting/functions/TextDrawGetLetterSize)
- [TextDrawGetTextSize](scripting/functions/TextDrawGetTextSize)
- [TextDrawGetPos](scripting/functions/TextDrawGetPos)
- [TextDrawGetColor](scripting/functions/TextDrawGetColor)
- [TextDrawGetBoxColor](scripting/functions/TextDrawGetBoxColor)
- [TextDrawGetBackgroundColor](scripting/functions/TextDrawGetBackgroundColor)
- [TextDrawGetShadow](scripting/functions/TextDrawGetShadow)
- [TextDrawGetOutline](scripting/functions/TextDrawGetOutline)
- [TextDrawGetFont](scripting/functions/TextDrawGetFont)
- [TextDrawIsBox](scripting/functions/TextDrawIsBox)
- [TextDrawIsProportional](scripting/functions/TextDrawIsProportional)
- [TextDrawIsSelectable](scripting/functions/TextDrawIsSelectable)
- [TextDrawGetAlignment](scripting/functions/TextDrawGetAlignment)
- [TextDrawGetPreviewModel](scripting/functions/TextDrawGetPreviewModel)
- [TextDrawGetPreviewRot](scripting/functions/TextDrawGetPreviewRot)
- [TextDrawGetPreviewVehCol](scripting/functions/TextDrawGetPreviewVehCol)
- [TextDrawSetStringForPlayer](scripting/functions/TextDrawSetStringForPlayer)
- [IsValidPlayerTextDraw](scripting/functions/IsValidPlayerTextDraw)
- [IsPlayerTextDrawVisible](scripting/functions/IsPlayerTextDrawVisible)
- [PlayerTextDrawGetString](scripting/functions/PlayerTextDrawGetString)
- [PlayerTextDrawSetPos](scripting/functions/PlayerTextDrawSetPos)
- [PlayerTextDrawGetLetterSize](scripting/functions/PlayerTextDrawGetLetterSize)
- [PlayerTextDrawGetTextSize](scripting/functions/PlayerTextDrawGetTextSize)
- [PlayerTextDrawGetPos](scripting/functions/PlayerTextDrawGetPos)
- [PlayerTextDrawGetColor](scripting/functions/PlayerTextDrawGetColor)
- [PlayerTextDrawGetBoxColor](scripting/functions/PlayerTextDrawGetBoxColor)
- [PlayerTextDrawGetBackgroundCol](scripting/functions/PlayerTextDrawGetBackgroundCol)
- [PlayerTextDrawGetShadow](scripting/functions/PlayerTextDrawGetShadow)
- [PlayerTextDrawGetOutline](scripting/functions/PlayerTextDrawGetOutline)
- [PlayerTextDrawGetFont](scripting/functions/PlayerTextDrawGetFont)
- [PlayerTextDrawIsBox](scripting/functions/PlayerTextDrawIsBox)
- [PlayerTextDrawIsProportional](scripting/functions/PlayerTextDrawIsProportional)
- [PlayerTextDrawIsSelectable](scripting/functions/PlayerTextDrawIsSelectable)
- [PlayerTextDrawGetAlignment](scripting/functions/PlayerTextDrawGetAlignment)
- [PlayerTextDrawGetPreviewModel](scripting/functions/PlayerTextDrawGetPreviewModel)
- [PlayerTextDrawGetPreviewRot](scripting/functions/PlayerTextDrawGetPreviewRot)
- [PlayerTextDrawGetPreviewVehCol](scripting/functions/PlayerTextDrawGetPreviewVehCol)
- [IsValidGangZone](scripting/functions/IsValidGangZone)
- [IsPlayerInGangZone](scripting/functions/IsPlayerInGangZone)
- [IsGangZoneVisibleForPlayer](scripting/functions/IsGangZoneVisibleForPlayer)
- [GangZoneGetColorForPlayer](scripting/functions/GangZoneGetColorForPlayer)
- [GangZoneGetFlashColorForPlayer](scripting/functions/GangZoneGetFlashColorForPlayer)
- [IsGangZoneFlashingForPlayer](scripting/functions/IsGangZoneFlashingForPlayer)
- [GangZoneGetPos](scripting/functions/GangZoneGetPos)
- [UseGangZoneCheck](scripting/functions/UseGangZoneCheck)
- [CreatePlayerGangZone](scripting/functions/CreatePlayerGangZone)
- [PlayerGangZoneDestroy](scripting/functions/PlayerGangZoneDestroy)
- [PlayerGangZoneShow](scripting/functions/PlayerGangZoneShow)
- [PlayerGangZoneHide](scripting/functions/PlayerGangZoneHide)
- [PlayerGangZoneFlash](scripting/functions/PlayerGangZoneFlash)
- [PlayerGangZoneStopFlash](scripting/functions/PlayerGangZoneStopFlash)
- [IsValidPlayerGangZone](scripting/functions/IsValidPlayerGangZone)
- [IsPlayerInPlayerGangZone](scripting/functions/IsPlayerInPlayerGangZone)
- [IsPlayerGangZoneVisible](scripting/functions/IsPlayerGangZoneVisible)
- [PlayerGangZoneGetColor](scripting/functions/PlayerGangZoneGetColor)
- [PlayerGangZoneGetFlashColor](scripting/functions/PlayerGangZoneGetFlashColor)
- [IsPlayerGangZoneFlashing](scripting/functions/IsPlayerGangZoneFlashing)
- [PlayerGangZoneGetPos](scripting/functions/PlayerGangZoneGetPos)
- [UsePlayerGangZoneCheck](scripting/functions/UsePlayerGangZoneCheck)
- [GetObjectDrawDistance](scripting/functions/GetObjectDrawDistance)
- [GetObjectMoveSpeed](scripting/functions/GetObjectMoveSpeed)
- [GetObjectTarget](scripting/functions/GetObjectTarget)
- [GetObjectMovingTargetPos](scripting/functions/GetObjectMovingTargetPos)
- [GetObjectMovingTargetRot](scripting/functions/GetObjectMovingTargetRot)
- [GetObjectAttachedData](scripting/functions/GetObjectAttachedData)
- [GetObjectAttachedOffset](scripting/functions/GetObjectAttachedOffset)
- [GetObjectSyncRotation](scripting/functions/GetObjectSyncRotation)
- [IsObjectMaterialSlotUsed](scripting/functions/IsObjectMaterialSlotUsed)
- [GetObjectMaterial](scripting/functions/GetObjectMaterial)
- [GetObjectMaterialText](scripting/functions/GetObjectMaterialText)
- [IsObjectNoCameraCol](scripting/functions/IsObjectNoCameraCol)
- [GetPlayerObjectDrawDistance](scripting/functions/GetPlayerObjectDrawDistance)
- [SetPlayerObjectMoveSpeed](scripting/functions/SetPlayerObjectMoveSpeed)
- [GetPlayerObjectMoveSpeed](scripting/functions/GetPlayerObjectMoveSpeed)
- [GetPlayerObjectTarget](scripting/functions/GetPlayerObjectTarget)
- [GetPlayerObjectMovingTargetPos](scripting/functions/GetPlayerObjectMovingTargetPos)
- [GetPlayerObjectMovingTargetRot](scripting/functions/GetPlayerObjectMovingTargetRot)
- [GetPlayerObjectAttachedData](scripting/functions/GetPlayerObjectAttachedData)
- [GetPlayerObjectAttachedOffset](scripting/functions/GetPlayerObjectAttachedOffset)
- [GetPlayerObjectSyncRotation](scripting/functions/GetPlayerObjectSyncRotation)
- [IsPlayerObjectMaterialSlotUsed](scripting/functions/IsPlayerObjectMaterialSlotUsed)
- [GetPlayerObjectMaterial](scripting/functions/GetPlayerObjectMaterial)
- [GetPlayerObjectMaterialText](scripting/functions/GetPlayerObjectMaterialText)
- [IsPlayerObjectNoCameraCol](scripting/functions/IsPlayerObjectNoCameraCol)
- [GetPlayerSurfingPlayerObjectID](scripting/functions/GetPlayerSurfingPlayerObjectID)
- [GetPlayerCameraTargetPlayerObj](scripting/functions/GetPlayerCameraTargetPlayerObj)
- [GetObjectType](scripting/functions/GetObjectType)
- [IsValidPickup](scripting/functions/IsValidPickup)
- [IsPickupStreamedIn](scripting/functions/IsPickupStreamedIn)
- [GetPickupPos](scripting/functions/GetPickupPos)
- [GetPickupModel](scripting/functions/GetPickupModel)
- [GetPickupType](scripting/functions/GetPickupType)
- [GetPickupVirtualWorld](scripting/functions/GetPickupVirtualWorld)
- [SetPickupPos](scripting/functions/SetPickupPos)
- [SetPickupModel](scripting/functions/SetPickupModel)
- [SetPickupType](scripting/functions/SetPickupType)
- [SetPickupVirtualWorld](scripting/functions/SetPickupVirtualWorld)
- [ShowPickupForPlayer](scripting/functions/ShowPickupForPlayer)
- [HidePickupForPlayer](scripting/functions/HidePickupForPlayer)
- [IsPickupHiddenForPlayer](scripting/functions/IsPickupHiddenForPlayer)
- [IsMenuDisabled](scripting/functions/IsMenuDisabled)
- [IsMenuRowDisabled](scripting/functions/IsMenuRowDisabled)
- [GetMenuColumns](scripting/functions/GetMenuColumns)
- [GetMenuItems](scripting/functions/GetMenuItems)
- [GetMenuPos](scripting/functions/GetMenuPos)
- [GetMenuColumnWidth](scripting/functions/GetMenuColumnWidth)
- [GetMenuColumnHeader](scripting/functions/GetMenuColumnHeader)
- [GetMenuItem](scripting/functions/GetMenuItem)
- [IsValid3DTextLabel](scripting/functions/IsValid3DTextLabel)
- [Is3DTextLabelStreamedIn](scripting/functions/Is3DTextLabelStreamedIn)
- [Get3DTextLabelText](scripting/functions/Get3DTextLabelText)
- [Get3DTextLabelColor](scripting/functions/Get3DTextLabelColor)
- [Get3DTextLabelPos](scripting/functions/Get3DTextLabelPos)
- [Set3DTextLabelDrawDistance](scripting/functions/Set3DTextLabelDrawDistance)
- [Get3DTextLabelDrawDistance](scripting/functions/Get3DTextLabelDrawDistance)
- [Get3DTextLabelLOS](scripting/functions/Get3DTextLabelLOS)
- [Set3DTextLabelLOS](scripting/functions/Set3DTextLabelLOS)
- [Set3DTextLabelVirtualWorld](scripting/functions/Set3DTextLabelVirtualWorld)
- [Get3DTextLabelVirtualWorld](scripting/functions/Get3DTextLabelVirtualWorld)
- [Get3DTextLabelAttachedData](scripting/functions/Get3DTextLabelAttachedData)
- [IsValidPlayer3DTextLabel](scripting/functions/IsValidPlayer3DTextLabel)
- [GetPlayer3DTextLabelText](scripting/functions/GetPlayer3DTextLabelText)
- [GetPlayer3DTextLabelColor](scripting/functions/GetPlayer3DTextLabelColor)
- [GetPlayer3DTextLabelPos](scripting/functions/GetPlayer3DTextLabelPos)
- [SetPlayer3DTextLabelDrawDist](scripting/functions/SetPlayer3DTextLabelDrawDist)
- [GetPlayer3DTextLabelDrawDist](scripting/functions/GetPlayer3DTextLabelDrawDist)
- [GetPlayer3DTextLabelLOS](scripting/functions/GetPlayer3DTextLabelLOS)
- [SetPlayer3DTextLabelLOS](scripting/functions/SetPlayer3DTextLabelLOS)
- [GetPlayer3DTextLabelVirtualW](scripting/functions/GetPlayer3DTextLabelVirtualW)
- [GetPlayer3DTextLabelAttached](scripting/functions/GetPlayer3DTextLabelAttached)
- [GetVehicleSpawnInfo](scripting/functions/GetVehicleSpawnInfo)
- [SetVehicleSpawnInfo](scripting/functions/SetVehicleSpawnInfo)
- [GetVehicleColor](scripting/functions/GetVehicleColor)
- [GetVehiclePaintjob](scripting/functions/GetVehiclePaintjob)
- [GetVehicleInterior](scripting/functions/GetVehicleInterior)
- [GetVehicleNumberPlate](scripting/functions/GetVehicleNumberPlate)
- [SetVehicleRespawnDelay](scripting/functions/SetVehicleRespawnDelay)
- [GetVehicleRespawnDelay](scripting/functions/GetVehicleRespawnDelay)
- [GetVehicleTower](scripting/functions/GetVehicleTower)
- [GetVehicleCab](scripting/functions/GetVehicleCab)
- [GetVehicleOccupiedTick](scripting/functions/GetVehicleOccupiedTick)
- [HasVehicleBeenOccupied](scripting/functions/HasVehicleBeenOccupied)
- [IsVehicleOccupied](scripting/functions/IsVehicleOccupied)
- [GetVehicleRespawnTick](scripting/functions/GetVehicleRespawnTick)
- [IsVehicleDead](scripting/functions/IsVehicleDead)
- [ToggleVehicleSirenEnabled](scripting/functions/ToggleVehicleSirenEnabled)
- [IsVehicleSirenEnabled](scripting/functions/IsVehicleSirenEnabled)
- [GetVehicleModelCount](scripting/functions/GetVehicleModelCount)
- [GetVehicleLastDriver](scripting/functions/GetVehicleLastDriver)
- [GetVehicleDriver](scripting/functions/GetVehicleDriver)
- [GetVehicleModelsUsed](scripting/functions/GetVehicleModelsUsed)
- [GetVehicleSirenState](scripting/functions/GetVehicleSirenState)
- [GetVehicleLandingGearState](scripting/functions/GetVehicleLandingGearState)
- [GetVehicleHydraReactorAngle](scripting/functions/GetVehicleHydraReactorAngle)
- [GetVehicleTrainSpeed](scripting/functions/GetVehicleTrainSpeed)
- [GetVehicleMatrix](scripting/functions/GetVehicleMatrix)
- [GetActorSkin](scripting/functions/GetActorSkin)
- [SetActorSkin](scripting/functions/SetActorSkin)
- [GetActorSpawnInfo](scripting/functions/GetActorSpawnInfo)
- [GetActorAnimation](scripting/functions/GetActorAnimation)
- [ToggleChatTextReplacement](scripting/functions/ToggleChatTextReplacement)
- [ChatTextReplacementToggled](scripting/functions/ChatTextReplacementToggled)
- [GetAvailableClasses](scripting/functions/GetAvailableClasses)
- [GetPlayerClass](scripting/functions/GetPlayerClass)
- [EditPlayerClass](scripting/functions/EditPlayerClass)
- [GetWeaponSlot](scripting/functions/GetWeaponSlot)
- [ClearBanList](scripting/functions/ClearBanList)
- [IsBanned](scripting/functions/IsBanned)
- [IsValidNickName](scripting/functions/IsValidNickName)
- [AllowNickNameCharacter](scripting/functions/AllowNickNameCharacter)
- [IsNickNameCharacterAllowed](scripting/functions/IsNickNameCharacterAllowed)
- [AddServerRule](scripting/functions/AddServerRule)
- [SetServerRule](scripting/functions/SetServerRule)
- [IsValidServerRule](scripting/functions/IsValidServerRule)
- [RemoveServerRule](scripting/functions/RemoveServerRule)
- [SendClientMessageToAllf](scripting/functions/SendClientMessageToAllf)
- [GameTextForAllf](scripting/functions/GameTextForAllf)
- [SendPlayerMessageToAllf](scripting/functions/SendPlayerMessageToAllf)
- [SendRconCommandf](scripting/functions/SendRconCommandf)
- [GetRunningTimers](scripting/functions/GetRunningTimers)
- [GetVehicles](scripting/functions/GetVehicles)
- [GetPlayers](scripting/functions/GetPlayers)
- [GetActors](scripting/functions/GetActors)
- [AllowAdminTeleport](scripting/functions/AllowAdminTeleport)
- [IsAdminTeleportAllowed](scripting/functions/IsAdminTeleportAllowed)
- [AllowInteriorWeapons](scripting/functions/AllowInteriorWeapons)
- [AreInteriorWeaponsAllowed](scripting/functions/AreInteriorWeaponsAllowed)
- [AreAllAnimationsEnabled](scripting/functions/AreAllAnimationsEnabled)
- [EnableAllAnimations](scripting/functions/EnableAllAnimations)
- [GetWeather](scripting/functions/GetWeather)

**Нові функції зворотного виклику:

- [OnPlayerEnterGangZone](scripting/callbacks/OnPlayerEnterGangZone)
- [OnPlayerEnterGangZone](scripting/callbacks/OnPlayerEnterGangZone)
- [OnPlayerLeaveGangZone](scripting/callbacks/OnPlayerLeaveGangZone)
- [OnPlayerClickGangZone](scripting/callbacks/OnPlayerClickGangZone)
- [OnPlayerEnterPlayerGangZone](scripting/callbacks/OnPlayerEnterPlayerGangZone)
- [OnPlayerLeavePlayerGangZone](scripting/callbacks/OnPlayerLeavePlayerGangZone)
- [OnPlayerClickPlayerGangZone](scripting/callbacks/OnPlayerClickPlayerGangZone)
- [OnPickupStreamIn](../scripting/callbacks/OnPickupStreamIn)
- [OnPickupStreamOut](../scripting/callbacks/OnPickupStreamOut)
- [OnPlayerPickUpPlayerPickup](../scripting/callbacks/OnPlayerPickUpPlayerPickup)
- [OnPlayerPickupStreamIn](../scripting/callbacks/OnPlayerPickupStreamIn)
- [OnPlayerPickupStreamOut](../scripting/callbacks/OnPlayerPickupStreamOut)

</details>
