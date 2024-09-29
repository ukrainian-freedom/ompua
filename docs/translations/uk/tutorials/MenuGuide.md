---
заголовок: Путівник по меню
---

Короткий посібник, який пояснює, як користуватися системою меню гри. Ця система меню відрізняється від діалогів SA-MP і краще відображає традиційний інтерфейс оригінальної гри.

## Меню у SA-MP

Для більшості гравців меню виглядають дуже складними і важкими для написання сценаріїв, хоча це не так. Тут я покажу вам, як створити просте меню. Наприкінці ми створимо меню телепорту.

## Перші кроки створення меню

Спочатку ми повинні створити меню. Префікс перед `Menu:` робить змінну правильною [tag](../scripting/language/Tags). Існують різні типи для різних цілей, наприклад, `Float:` `bool:` `Text3D:` тощо. Напишіть наступний код у верхній частині вашого скрипта:

```c
new Menu:teleportmenu;
```

Гаразд, ми створили змінну для зберігання меню. Тепер нам потрібно створити меню і призначити змінну, яку ми створили, для меню. Введіть це у `OnGameModeInit`:

```c
teleportmenu = CreateMenu(«Teleportmenu», 2, 200.0, 100.0, 150.0, 150.0);
```

Тепер трохи пояснень про аргументи [CreateMenu](../scripting/functions/CreateMenu).

**Параметри:**

| Параметр вказує
| --------------- | ---------------------------------------------------------------- |
| заголовок | Заголовок меню
| columns | Число тут визначає, скільки стовпців буде використано (максимум 2)
| Float:x | Висота розташування меню на екрані (зліва направо)
| Float:y | Позиція меню на екрані по ширині (вгору і вниз)
| Float:col1width | Ширина першого стовпчика
| Float:col2width | Ширина другого стовпчика

## Додавання пунктів меню

Гаразд, тепер у нас є меню, але нам потрібні деякі пункти, за якими можна буде вибирати в меню. Ви можете додати їх під `CreateMenu`, який ми створили раніше.

```c
AddMenuItem(teleportmenu, 0, «LS»);
AddMenuItem(teleportmenu, 0, «LS»);
AddMenuItem(teleportmenu, 0, «SF»);
AddMenuItem(teleportmenu, 0, «SF»);
AddMenuItem(teleportmenu, 0, «LV»);
AddMenuItem(teleportmenu, 0, «LV»);
 
AddMenuItem(teleportmenu, 1, «Grove Street»);
AddMenuItem(teleportmenu, 1, «Starfish Tower»);
AddMenuItem(teleportmenu, 1, «Ангели колісної арки»);
AddMenuItem(teleportmenu, 1, «Jizzys»);
AddMenuItem(teleportmenu, 1, «4 Дракони»);
AddMenuItem(teleportmenu, 1, «Come-a-Lot»);
```

Пояснення для [AddMenuItem](../scripting/functions/AddMenuItem):

| menuid | Ідентифікатор меню, в якому має бути відображено пункт
| ------ | -------------------------------------------------------- |
| column | Стовпець, в якому має бути показано елемент
| text | Текст елемента | Текст елемента

## Створення ефектів для елементів

Гаразд, тепер, коли ми створили повне меню з пунктами, що повинно відбуватися при виборі пункту? У нашому прикладі ми хочемо зробити меню телепортації, тому ми повинні телепортуватися у вибрану позицію. Коли гравець вибирає пункт у меню, скрипт викликає колбек [OnPlayerSelectedMenuRow](../scripting/callbacks/OnPlayerSelectedMenuRow). Найкраще це зробити за допомогою перемикача, це як кілька операторів if для перевірки того, чи змінна має певні значення. Але спочатку нам потрібні ці ефекти лише для потрібного меню, тому нам потрібно створити змінну, яка буде зберігати меню, на яке дивиться гравець, це робиться за допомогою `GetPlayerMenu`:

```c
new Menu:CurrentMenu = GetPlayerMenu(playerid);
```

Тепер, коли хтось вибирає щось у меню, його menuid буде збережено у `CurrentMenu`.

Тепер нам потрібно перевірити, що меню, яке вони вибрали, є тим меню, яке ми хочемо:

```c
public OnPlayerSelectedMenuRow(playerid, row)
{
    new Menu:CurrentMenu = GetPlayerMenu(playerid);
    if (CurrentMenu == teleportmenu)
    {
        //речовина
    }
    return 1;
}
```

Тепер між цими дужками знаходиться `перемикач`, він перевіряє, який елемент вибрав гравець або `ряд`, це можна зробити за допомогою оператора `if`, який перевіряє, який це `ряд`, але `перемикач` - це набагато простіший спосіб написання.

```c
if(CurrentMenu == teleportmenu)
{
    switch(row)
    {
        case 0: //Grove Street
        {
            SetPlayerPos(playerid, 2493.9133, -1682.3986, 13.3382);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFFFF, «Ласкаво просимо на Grove Street»)
        }
        case 1: //Starfish Tower
        {
            SetPlayerPos(playerid, 1541.2833, -1362.4741, 329.6457);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFFFF, «Ласкаво просимо на вершину Вежі Морської зірки»)
        }
        case 2: //Ангели колісної арки
        {
            SetPlayerPos(playerid, -2705.5503, 206.1621, 4.1797)
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFFFF, «Ласкаво просимо до магазину тюнінгу Wheel Arch Angels»)
        }
        case 3: //Jizzys
        {
            SetPlayerPos(playerid, -2617.5156, 1390.6353, 7.1105);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFFFF, «Ласкаво просимо до нічного клубу Jizzy's!»);
        }
        випадок 4: //4Dragons
        {
            SetPlayerPos(playerid, 2028.5538, 1008.3543, 10.8203);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFFFF, «Ласкаво просимо до казино Four Dragons»)
        }
        випадок 5: //Come-a-Lot
        {
            SetPlayerPos(playerid, 2169.1838, 1122.5426, 12.6107)
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFFFF, «Ласкаво просимо до казино Come-a-Lot!»)
        }
    }
}
```

## Останні кроки

Тепер нам потрібна команда для показу меню. Це найпростіший крок. Просто порівняння з `strcmp` і `ShowMenuForPlayer`. Це робиться у `OnPlayerCommandText`. Або, якщо у вас вже є командний процесор, скористайтеся ним для виклику `ShowMenuForPlayer`.

```c
if(strcmp(cmdtext, «/teleport», true) == 0)
{
    ShowMenuForPlayer(teleportmenu,playerid);
    return 1;
}
```

Дуже просто, чи не так?

## Останні слова

Гаразд, після того, як ви прочитали і зрозуміли цю статтю, спробуйте створити власне меню. Як бачите, це не так вже й складно, але ще більше вразить гравців на вашому сервері. І ви можете написати дійсно круті ефекти за допомогою цього скрипту. Це також дуже круто для звичайних магазинів або супермаркетів для речей, які ви можете купити. Тоді ви можете відняти трохи грошей як ефект, і ціна буде показана в іншій колонці в меню. Але тепер попрацюйте над цим самостійно.

Ви також можете додати [TogglePlayerControlable](../scripting/functions/TogglePlayerControlable) зі значенням `false` після `ShowPlayerMenu` і [TogglePlayerControlable](../scripting/functions/TogglePlayerControlable) зі значенням `true` в кінці `OnPlayerSelectedMenuRow`, щоб гравець не міг рухатися під час перегляду меню.

Сподіваюся, ви дізналися щось корисне з цього підручника. Якщо у вас виникли запитання, задавайте їх на форумах/дискусії.


