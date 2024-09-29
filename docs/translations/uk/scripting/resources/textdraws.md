---
заголовок: Textdraws
description: Як випливає з назви, textdraw - це текст, який малюється на екрані програвача.
sidebar_label: Textdraws
---

## Що таке текстовий малюнок?

Як випливає з назви, текстовий малюнок - це текст, який малюється на екрані гравця. На відміну від [client messages](../functions/SendClientMessage) або [gametext](../functions/GameTextForPlayer), текстовий малюнок може бути показаний на екрані гравця протягом невизначеного періоду часу. Це може бути простий текст на екрані, наприклад, адреса веб-сайту, або складний динамічний текст, що створюється за допомогою скриптів, наприклад, індикатори прогресу.

Цей інструмент «редактор текстових зображень» може значно полегшити створення текстових зображень.

---
  
## Глобальні текстові об'єкти

Можна створювати глобальні текстові розіграші, а потім показувати їх усім гравцям. Однак існує [обмеження](../ресурси/Обмеження) на їхню кількість, яку можна створити. Це означає, що якщо у вас сервер з 500 гравцями, створення більше 4 текстових малюнків на одного гравця неможливе. Ось тут і з'являються **player**-текстові малюнки. Дивіться далі. Ось список всіх функцій, пов'язаних з **global** textdraws:

- [TextDrawCreate](../functions/TextDrawCreate): Створити текстовий малюнок.
- [TextDrawDestroy](../functions/TextDrawDestroy): Знищити текстовий малюнок.
- [TextDrawColor](../functions/TextDrawColor): Встановити колір тексту у текстовому малюнку.
- [TextDrawBoxColor](../functions/TextDrawBoxColor): Встановити колір поля у текстовому малюнку.
- [TextDrawBackgroundColor](../functions/TextDrawBackgroundColor): Встановити колір фону текстового малюнка.
- [TextDrawAlignment](../functions/TextDrawAlignment): Встановити вирівнювання текстового малюнка.
- [TextDrawFont](../functions/TextDrawFont): Встановити шрифт текстового малюнка.
- [TextDrawLetterSize](../functions/TextDrawLetterSize): Встановити розмір літер тексту у текстовому малюнку.
- [TextDrawTextSize](../functions/TextDrawTextSize): Встановити розмір текстового поля для малювання тексту.
- [TextDrawSetOutline](../functions/TextDrawSetOutline): Виберіть, чи буде текст мати контур.
- [TextDrawSetShadow](../functions/TextDrawSetShadow): Перемикання тіней на намальованому тексті.
- [TextDrawSetProportional](../functions/TextDrawSetProportional): Масштабує інтервали між текстами у текстовому малюнку до пропорційного співвідношення.
- [TextDrawUseBox](../functions/TextDrawUseBox): Перемикає, чи має текстовий рисунок поле, чи ні.
- [TextDrawSetString](../functions/TextDrawSetString): Встановити текст в існуючому текстовому малюнку.
- [TextDrawShowForPlayer](../functions/TextDrawShowForPlayer): Показати текстовий малюнок для певного гравця.
- [TextDrawHideForPlayer](../functions/TextDrawHideForPlayer): Приховати текстове малювання для певного гравця.
- [TextDrawShowForAll](../functions/TextDrawShowForAll): Показати малювання тексту для всіх гравців.
- [TextDrawHideForAll](../functions/TextDrawHideForAll): Приховати малювання тексту для всіх гравців.
- [IsTextDrawVisibleForPlayer](../functions/IsTextDrawVisibleForPlayer): Перевіряє, чи показується текстовий малюнок для гравця.
- [IsValidTextDraw](../functions/IsValidTextDraw): Перевіряє, чи допустиме малювання тексту.
- [TextDrawGetAlignment](../functions/TextDrawGetAlignment): Отримує вирівнювання тексту текстового малювання.
- [TextDrawGetBackgroundColour](../functions/TextDrawGetBackgroundColour): Отримує колір фону для текстового малювання.
- [TextDrawGetBoxColour](../functions/TextDrawGetBoxColour): Отримує колір рамки текстового малювання.
- [TextDrawGetColour](../functions/TextDrawGetColour): Отримує колір тексту текстового малюнка.
- [TextDrawGetFont](../functions/TextDrawGetFont): Отримує шрифт тексту текстового малюнка.
- [TextDrawGetLetterSize](../functions/TextDrawGetLetterSize): Отримує ширину та висоту літер.
- [TextDrawGetOutline](../functions/TextDrawGetOutline): Отримує товщину контуру тексту, що малюється.
- [TextDrawGetPos](../functions/TextDrawGetPos): Отримує позицію текстового малюнка.
- [TextDrawGetPreviewModel](../functions/TextDrawGetPreviewModel): Отримує модель попереднього перегляду 3D-текстового малюнка.
- [TextDrawGetPreviewRot](../functions/TextDrawGetPreviewRot): Отримує обертання та масштабування 3D-моделі попереднього перегляду textdraw.
- [TextDrawGetPreviewVehCol](../functions/TextDrawGetPreviewVehCol): Отримує кольори транспортного засобу для попереднього перегляду 3D-зображування.
- [TextDrawGetPreviewVehicleColours](../functions/TextDrawGetPreviewVehicleColours): Отримує кольори транспортного засобу попереднього перегляду 3D-зображуваного тексту.
- [TextDrawGetShadow](../functions/TextDrawGetShadow): Отримує розмір тіні від тексту, що малюється.
- [TextDrawGetString](../functions/TextDrawGetString): Отримує текст текстового малюнка.
- [TextDrawGetTextSize](../functions/TextDrawGetTextSize): Отримує вісь X та вісь Y тексту, що малюється.
- [TextDrawIsBox](../functions/TextDrawIsBox): Перевіряє, чи текстовий малюнок є полем.
- [TextDrawIsProportional](../functions/TextDrawIsProportional): Перевіряє, чи текстовий малюнок є пропорційним.
- [TextDrawIsSelectable](../functions/TextDrawIsSelectable): Перевіряє, чи текстовий малюнок є виокремлюваним.
- [TextDrawSetPos](../functions/TextDrawSetPos): Встановлює позицію текстового малюнка.
- [TextDrawSetStringForPlayer](../functions/TextDrawSetStringForPlayer): Змінює текст на текстовому малюнку для певного гравця.

---
  
## Гравець-текстродроти

Текстовки гравця створюються лише для одного конкретного гравця. На одного гравця може бути створено до 256 текстових повідомлень. Це 128,000 на сервері з 500 гравцями. Трохи більше, ніж 2048. Гравці-текстродроти повинні використовуватися для речей, які не є «статичними». Наприклад, не використовуйте їх для відображення адреси веб-сайту, а для індикатора стану автомобіля.

- [CreatePlayerTextDraw](../functions/CreatePlayerTextDraw): Створити плеєр-текст-драйв.
- [PlayerTextDrawDestroy](../functions/PlayerTextDrawDestroy): Знищити гравця-текстовика.
- [PlayerTextDrawColor](../functions/PlayerTextDrawColor): Встановити колір тексту у плеєрі-текстовику.
- [PlayerTextDrawBoxColor](../functions/PlayerTextDrawBoxColor): Задає колір вікна плеєра-текстовика.
- [PlayerTextDrawBackgroundColor](../functions/PlayerTextDrawBackgroundColor): Встановити колір фону гравця-текстовика.
- [PlayerTextDrawAlignment](../functions/PlayerTextDrawAlignment): Встановити вирівнювання плеєра-текстовика.
- [PlayerTextDrawFont](../functions/PlayerTextDrawFont): Встановити шрифт плеєра-текстовика.
- [PlayerTextDrawLetterSize](../functions/PlayerTextDrawLetterSize): Встановлення розміру літер тексту у плеєрі-текстовику.
- [PlayerTextDrawTextSize](../functions/PlayerTextDrawTextSize): Встановити розмір вікна плеєра-текстовика (або області, на яку можна натиснути для [PlayerTextDrawSetSelectable](../functions/PlayerTextDrawSetSelectable)).
- [PlayerTextDrawSetOutline](../functions/PlayerTextDrawSetOutline): Увімкнути контур на плеєрі, що малює текст.
- [PlayerTextDrawSetShadow](../functions/PlayerTextDrawSetShadow): Встановити тінь на плеєрі-текстовику.
- [PlayerTextDrawSetProportional](../functions/PlayerTextDrawSetProportional): Масштабує інтервал між текстами у плеєрі-текстовику до пропорційного співвідношення.
- [PlayerTextDrawUseBox](../functions/PlayerTextDrawUseBox): Увімкнути прапорець на вікні програвача-текстовика.
- [PlayerTextDrawSetString](../functions/PlayerTextDrawSetString): Встановити текст плеєра-текстовика.
- [PlayerTextDrawShow](../functions/PlayerTextDrawShow): Показати гравця-текстовика.
- [PlayerTextDrawHide](../functions/PlayerTextDrawHide): Приховати гравця-текстовика.
- [IsPlayerTextDrawVisible](../functions/IsPlayerTextDrawVisible): Перевіряє, чи показано плеєр-текст для гравця.
- [IsValidPlayerTextDraw](../functions/IsValidPlayerTextDraw): Перевіряє, чи дійсний гравець-текст, що виводиться для гравця.
- [PlayerTextDrawBackgroundColour](../functions/PlayerTextDrawBackgroundColour): Налаштувати колір фону плеєра-тексту, що малюється.
- [PlayerTextDrawBoxColour](../functions/PlayerTextDrawBoxColour): Встановлює колір вікна малювання тексту (PlayerTextDrawUseBox ).
- [PlayerTextDrawColour](../functions/PlayerTextDrawColour): Встановлює колір тексту, який буде намальовано плеєром-текстовиком.
- [PlayerTextDrawGetAlignment](../functions/PlayerTextDrawGetAlignment): Отримує вирівнювання тексту гравця-текстовика.
- [PlayerTextDrawGetBackgroundColour](../functions/PlayerTextDrawGetBackgroundColour): Отримує колір тла гравця, що малює текст.
- [PlayerTextDrawGetBoxColour](../functions/PlayerTextDrawGetBoxColour): Отримує колір поля гравця, що малює текст.
- [PlayerTextDrawGetColour](../functions/PlayerTextDrawGetColour): Отримує колір тексту гравця-текстовика.
- [PlayerTextDrawGetFont](../functions/PlayerTextDrawGetFont): Отримує шрифт тексту гравця-текстовика.
- [PlayerTextDrawGetLetterSize](../functions/PlayerTextDrawGetLetterSize): Отримує ширину та висоту літер.
- [PlayerTextDrawGetOutline](../functions/PlayerTextDrawGetOutline): Отримує розмір контуру на плеєрі-тексті.
- [PlayerTextDrawGetPos](../functions/PlayerTextDrawGetPos): Отримує позицію гравця-текстовика.
- [PlayerTextDrawGetPreviewModel](../functions/PlayerTextDrawGetPreviewModel): Отримує модель попереднього перегляду 3D-перегляду player-textdraw.
- [PlayerTextDrawGetPreviewRot](../functions/PlayerTextDrawGetPreviewRot): Отримує обертання та масштабування попереднього перегляду 3D-моделі player-textdraw.
- [PlayerTextDrawGetPreviewVehicleColours](../functions/PlayerTextDrawGetPreviewVehicleColours): Отримує кольори транспортного засобу для попереднього перегляду 3D-тексту гравця-зображувача.
- [PlayerTextDrawGetShadow](../functions/PlayerTextDrawGetShadow): Отримати розмір тіні на плеєрі-текстовику.
- [PlayerTextDrawGetString](../functions/PlayerTextDrawGetString): Отримує текст гравця-текстовика.
- [PlayerTextDrawGetTextSize](../functions/PlayerTextDrawGetTextSize): Отримує розмір тексту за віссю X та віссю Y від гравця-текстовика.
- [PlayerTextDrawIsBox](../functions/PlayerTextDrawIsBox): Перевіряє, чи є гравець-текст, що малює, полем.
- [PlayerTextDrawIsProportional](../functions/PlayerTextDrawIsProportional): Перевіряє, чи гравець-текст є пропорційним.
- [PlayerTextDrawIsSelectable](../functions/PlayerTextDrawIsSelectable): Перевіряє, чи гравець-текст є вибірковим.
- [PlayerTextDrawSetPos](../functions/PlayerTextDrawSetPos): Встановлює позицію гравця-текстовика.
- [PlayerTextDrawSetPreviewVehicleColours](../functions/PlayerTextDrawSetPreviewVehicleColours): Встановити колір транспортного засобу у попередньому перегляді моделі малювання тексту гравця (якщо транспортний засіб показано).

---
  
## Оголошення змінних

При створенні текстури, ви завжди повинні вирішити, чи буде створена вами текстура глобальною (наприклад, адреса вашого сайту, глобальне оголошення), чи вона буде відрізнятися для кожного гравця (наприклад, вбивства, смерті, рахунок).


### Глобальний текстовий розіграш

Глобальний текстовий розіграш найпростіший у створенні і вимагає лише однієї змінної. Ця змінна необхідна для модифікації текстового розіграшу і подальшого показу його гравцям. У більшості випадків оголошення для такого текстовика має бути глобальною змінною. Змінна textdraw також повинна мати префікс _Text:_ і бути ініціалізована значенням _Text:INVALID_TEXT_DRAW_. Якщо ви не ініціалізуєте змінну textdraw, вона може конфліктувати з іншими змінними, коли ви додаватимете нові текстові малюнки.

```c
new Text:gMyText = Text:INVALID_TEXT_DRAW;
```


### Текстовий малюнок для окремого гравця

Розіграш тексту для окремого гравця є таким самим, як і звичайний «глобальний» розіграш, але створює текст лише для одного гравця.

Це корисно для унікальних для кожного гравця текстових повідомлень, таких як «статистика», що показує їхні вбивства або рахунок.

Це може бути використано для того, щоб уникнути перевищення ліміту глобального текстового розіграшу, оскільки ви можете створити 256 текстових розіграшів для одного гравця. 

Ними також легше керувати, оскільки вони автоматично знищуються, коли гравець відключається від мережі.

```c
new PlayerText:gMyPlayerText = PlayerText:INVALID_TEXT_DRAW;
```

:::info

ВАЖЛИВА ЗАУВАГА: Для змінної все одно потрібен масив, оскільки ідентифікатор текстових малюнків може відрізнятися від гравця до гравця, оскільки інші гравці можуть створювати більше або менше текстових малюнків, ніж інші.

:::

Назви функцій відрізняються лише незначно, 'TextDraw' стає 'PlayerTextDraw', за одним винятком: [CreatePlayerTextDraw](../functions/CreatePlayerTextDraw) ('TextDrawSetString' стає 'PlayerTextDrawSetString').

---
  
## Створення Textdraw

![Image:320px-Textdraw_map.png](/images/textdraws/320px-Textdraw_map.png)

Після того, як ви оголосили змінну/масив для зберігання ідентифікаторів ваших текстових рисунків, ви можете перейти до створення самих рисунків. Для глобальних textdraw'ів, які створюються завжди, код слід розмістити у розділі [OnGameModeInit](../callbacks/OnGameModeInit). Для створення текстури слід використовувати функцію [TextDrawCreate](../functions/TextDrawCreate).

Зауважте, що ця функція лише створює текстовий малюнок, інші функції використовуються для його модифікації та показу гравцю(ам).

**Параметри:**

TextDrawCreate(Float:x, Float:y, text[])

| Назва | Опис
| ------ | -------------------------------------------- |
| x | Координата X, в якій потрібно створити текстовий малюнок.
| y | Координата по Y, в якій створюється текст, що малюється.
| text[] | Текст у текстовому малюнку.                    |

**Значення, що повертаються:**

Ідентифікатор створеного textdraw

Перейдемо до створення textdraw:

```c
public OnGameModeInit()
{
    gMyText = TextDrawCreate(320.0, 240.0, «Hello World!»);
    return 1;
}
```

Ми створили текстовий рядок у центрі екрану, який говорить «Hello World!».

---
  
## Встановлення шрифту

Для тексту textdraw доступні 4 шрифти:

![Image:320px-Textdraw_map.png](/images/textdraws/Textdraw_font_styles.png)

| Ідентифікатор | Інформація | Поради
| --- | -------------------------------------------------------------- | ------------------------------------------------------ |
| 0 | The _San Andreas_ Font.                                        | Використовуйте для заголовків, але не для всієї сторінки.            |
| 1 | Чистий шрифт, що містить як великі, так і малі літери. | Може використовуватися для великої кількості тексту.                         |
| 2 | Чистий шрифт, але містить лише великі літери.                 | Може використовуватися в різних випадках.                      |
| 3 | _GTA шрифт_ | Зберігає якість при збільшенні. Корисний для великих текстів. |

Починаючи з SA-MP 0.3d, можна встановити новий шрифт (ідентифікатор 4). Він використовується у поєднанні з функціями [TextDrawCreate](../functions/TextDrawCreate) та [TextDrawTextSize](../functions/TextDrawTextSize) для показу текстури «спрайту» на екрані гравця. Ми розглянемо це пізніше.

---
  
## Відображення textdraw

У цьому прикладі textdraw було створено глобально під час OnGameModeInit і буде показано гравцеві, коли він приєднається до сервера.

Для показу текстури для одного гравця використовується функція [TextDrawShowForPlayer](../functions/TextDrawShowForPlayer).

**Параметри:**

TextDrawShowForPlayer(playerid, Text:text)

| Назва | Опис
| -------- | --------------------------------------------- |
| playerid | Ідентифікатор гравця, для якого буде показано текстовий малюнок.
| text | Ідентифікатор гравця, для якого потрібно показати текст.

**Значення, що повертаються:**

Ця функція не повертає жодних конкретних значень.

Ідентифікатор гравця передається через OnPlayerConnect, а ідентифікатор тексту для малювання зберігається у змінній 'gMyText'.

```c
public OnGameModeInit()
{
    gMyText = TextDrawCreate(320.0, 320.0, «Hello World!»);
    return 1;
}

public OnPlayerConnect(playerid)
{
    TextDrawShowForPlayer(playerid, gMyText);
    return 1;
}
```

---
  
## Різноманітні поради

- Намагайтеся використовувати цілі числа при вказівці позицій, це забезпечить найкращу сумісність на різних роздільних здатностях.
- Найкраще шрифти виглядають при співвідношенні X до Y від 1 до 4 (наприклад, якщо x = 0.5, то y має бути 2).


