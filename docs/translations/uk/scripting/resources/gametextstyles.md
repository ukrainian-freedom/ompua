---
заголовок: GameText Styles
description: Стилі GameText, що використовуються в текстових малюнках та ігровому тексті.
---

На цій сторінці описано все, що вам потрібно знати про стилі ігрового тексту, а також про те, як їх можна використовувати у текстомалюнках та тексті, що виводиться для (одиночного) гравця.
Переважно використовується [GameText](../functions/GameTextForPlayer) та [GameTextForAll](../functions/GameTextForAll).

---
  
## Кольори тексту
Існує можливість намалювати певні частини тексту різними кольорами. Для цього вам просто потрібно використати наведені нижче кольорові ковпачки та інкапсулювати частину тексту, яку ви хочете намалювати певним кольором (наприклад, \~y\~I'm drawn in yellow!\~y\~).

| Код | Колір | Опис
| -------------------- | -------------------------------------- | ------------------------------------------------ |
| N/A | ![](/images/gameTextStyles/-.png) | Колір за замовчуванням, не має коду.                     |
| `~h~` | ![](/images/gameTextStyles/h.png) | Світліша версія кольору за замовчуванням.           |
| `~h~~h~` | ![](/images/gameTextStyles/hh.png) | Світліша версія кольору за замовчуванням.           |
| `~r~` | ![](/images/gameTextStyles/r.png) | Має п'ять рівнів освітлення.                   |
| `~r~~h~` | ![](/images/gameTextStyles/rh.png) | ||П'ять рівнів висвітлення.
| «Зброя»! ![](/images/gameTextStyles/rhh.png) | | | «Зброя»!
`~r~~h~~h~~h~~h~` | ![](/images/gameTextStyles/rhhh.png) | || | `~r~~h~~h~~h~` | ![](/images/gameTextStyles/rhhh.png)
| «Я не хочу, щоб ви знали, що я не хочу, щоб ви знали, що я не хочу, щоб ви знали, що я не хочу, щоб ви знали, що я не хочу, щоб ви знали, що я не хочу, щоб ви знали, що я не хочу, щоб ви знали, що я не хочу, щоб ви знали, що я не хочу.
`~r~~h~~h~~h~~h~~h~~h~~h~` | ![](/images/gameTextStyles/rhhhhh.png) | ||g~` | ![](/images/gameTextStyles/rhhhhh.png) | ||g~` | !
| `~g~` | ![](/images/gameTextStyles/g.png) | Має чотири рівні освітлення.                   |
| `~g~~h~` | ![](/images/gameTextStyles/gh.png) | | ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦
| «Зображення»! ![](/images/gameTextStyles/ghh.png) | | | «Зображення» - це зображення тексту.
«Зброя» ![](/images/gameTextStyles/ghhh.png) | | | “Зброя” ![](/images/gameTextStyles/ghhh.png) | | | “Зброя” !
| `~g~~h~~h~~h~~h~~h~` | ![](/images/gameTextStyles/ghhhh.png) | Те саме, що й `~y~~h~~h~`.                             |
| `~b~` | ![](/images/gameTextStyles/b.png) | Має три рівні освітлення.                  |
| «У нас є три рівні освітлення.
| «Я не знаю, що це таке» ![](/images/gameTextStyles/bhh.png) | | | «Я не знаю, що це таке» !
| «Я не хочу, щоб ви знали, що я не хочу, щоб ви знали, що я не хочу, щоб ви знали, що я не хочу, щоб ви знали, що я не хочу, щоб ви знали, що я не хочу, щоб ви знали, що я не хочу, щоб ви знали, що я не хочу, щоб ви знали.
| `~p~` | ![](/images/gameTextStyles/p.png) | Має два рівні освітлення.                    |
| `~p~~h~` | ![](/images/gameTextStyles/ph.png) | | ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦
| `~p~~h~~h~` | ![](/images/gameTextStyles/phh.png) | | ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦ ¦
| `~y~` | ![](/images/gameTextStyles/y.png) | Має два рівні освітлення.                    |
| `~y~~h~` | ![](/images/gameTextStyles/yh.png) | |
| `~y~~h~~h~~h~` | ![](/images/gameTextStyles/yhh.png) | Те саме, що й `~g~~h~~h~~h~~h~~h~~h~`.                       |
| `~l~` | ![](/images/gameTextStyles/l.png) | Мала літера «L».  Не можна освітлити.             |
| `~w~ (або ~s~)` | ![](/images/gameTextStyles/w.png) | Має один рівень освітлення.                     |
| `~w~~h~ (або ~s~~h~)` | ![](/images/gameTextStyles/wh.png) | Усі кольори стають такими, якщо їх занадто освітлити. |

---
  
## Спеціальні текстові літери
На відміну від текстових кольорів, ці плагіни не потребують інкапсуляції. Їх можна використовувати як є.

| Код | Опис
| ------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| Новий рядок.
| `~h~` | Зробити вибрані кольори світлішими.  Текст може з'являтися між основним кольором і освітленням, наприклад, `~r~Hello ~h~world` зробить «Hello» червоним, а «world» трохи світлішим червоним. |
| `~u~` | Стрілка вгору (сірого кольору)
| «d» - стрілка вниз (сіра).
| Стрілка вліво (сіра).
| Вправо (сіра).
| `~]~` | Відображає символ `*` (лише у текстових стилях 3, 4 і 5)
| `~k~` | Відображення клавіш клавіатури (наприклад, `~k~~VEHICLE_TURRETLEFT~` і `~k~~PED_FIREWEAPON~`). Список клавіш дивіться [тут](../resources/keys). |

:::попередження

Будьте обережні, використання занадто великої кількості кольорів тексту або спеціальних символів в одному ігровому тексті може призвести до аварійного завершення гри у кожного гравця, якому цей текст буде показано. Крім того, уникайте нерівномірного використання символу `~`. Приклад: `~~r~Hello, ~g~how are ~y~you?`

:::

## Стилі тексту
У текстах гри можна використовувати такі стилі тексту.

| Стиль | Попередній перегляд | Опис
| ------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Стиль 0 | ![](/images/gameTextStyles/style0.png) | З'являється на 9 секунд незалежно від налаштувань часу. Приховує текстові малюнки та будь-який інший ігровий текст на екрані (виправлено у fixes.inc)
| Стиль 1 | ![](/images/gameTextStyles/style1.png) | Зникає через 8 секунд, незалежно від встановленого часу. Якщо ви встановили довший час, він знову з'явиться після зникнення і повторюватиметься, доки не закінчиться час (виправлено у файлі fixes.inc)
| Стиль 2 | ![](/images/gameTextStyles/style2.png) | N/A
| Стиль 3 ! ![](/images/gameTextStyles/style3.png) | N/A
Стиль 4 ! ![](/images/gameTextStyles/style4.png) | N/A | | Стиль 5 ! ![](/images/gameTextStyles/style4.png) | N/A | | Стиль 6 !
| Стиль 5 | ![](/images/gameTextStyles/style5.png) | Показується протягом 3 секунд, незалежно від того, який час ви встановили. Відмовиться показуватися, якщо його «заспамлено» (виправлено у fixes.inc)
| Стиль 6 | ![](/images/gameTextStyles/style6.png) | N/A

---
  
## Стилі тексту додано у [fixes.inc](https://github.com/pawn-lang/sa-mp-fixes)

| Стиль | Попередній перегляд | Опис
| -------- | --------------------------------------- | -------------------------------------------------- |
| Стиль 7 | ![](/images/gameTextStyles/style7.png) | На основі назв транспортних засобів SA.                         |
| Стиль 8 | ![](/images/gameTextStyles/style8.png) | На основі назв локацій SA.                        |
| Стиль 9 ! ![](/images/gameTextStyles/style9.png) | На основі назв радіостанцій SA (якщо вибрано).   |
| Стиль 10 | ![](/images/gameTextStyles/style10.png) | На основі назв радіостанцій SA (під час перемикання). |
| Стиль 11 | ![](/images/gameTextStyles/style11.png) | На основі позитивних грошей SA.                        |
| Стиль 12 ![](/images/gameTextStyles/style12.png) | На основі негативних грошей SA.                        |
| Стиль 13 ![](/images/gameTextStyles/style13.png) | На основі бонусів за трюки SA.                         |
| Стиль 14 ![](/images/gameTextStyles/style14.png) | На основі ігрового годинника SA.                         |
| Стиль 15 - ![](/images/gameTextStyles/style15.png) - На основі спливаючого вікна сповіщень SA.                    |


