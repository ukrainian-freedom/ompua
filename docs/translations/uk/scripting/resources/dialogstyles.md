---
заголовок: Стилі діалогів
---

:::примітка

- У [OnDialogResponse](../callbacks/OnDialogResponse) натискання **button1** встановлює **відповідь** на **1**, а натискання **button2** встановлює **відповідь** на **0**.
- Кожен діалог може мати додаткову кнопку 2. Щоб вона зникла, залиште її порожньою, як у першому прикладі. Гравці не зможуть натиснути її, але зможуть натиснути ESC і викликати [OnDialogResponse](../callbacks/OnDialogResponse) з **response** = **0**.
- [ShowPlayerDialog](../functions/ShowPlayerDialog): Вбудовування кольору можна використовувати для кожного рядка: **caption**, **info**, **button1** та **button2**.

:::

- На цій сторінці описано поведінку функцій [ShowPlayerDialog](../functions/ShowPlayerDialog) та [OnDialogResponse](../callbacks/OnDialogResponse).
- Для ознайомлення з різними обмеженнями відвідайте сторінку [Limits](../resources/limits).
- У прикладах відповідей буде використано цей код:

```c
public OnDialogResponse( playerid, dialogid, response, listitem, inputtext[ ] )
{
    printf(«playerid = %d, dialogid = YOUR_DIALOGID, response = %d, listitem = %d, inputtext = “%s” (size: %d)», playerid, response, listitem, inputtext, strlen(inputtext));
    return 1;
}
```

---
  
## Стиль 0: `DIALOG_STYLE_MSGBOX`

![](/images/dialogStyles/Dialog_style_msgbox.png)

Показати:

:::примітка

- **\t** додає табуляцію (більше місця).
- **\n** створює новий рядок.
- [Color embedding](colorslist#color-embedding) не скидається після **\n** або **\t**.

:::

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_MSGBOX, «Caption», «Info\n\tInfo», «Button 1», «»);
```

### Виведення відповіді

:::примітка

- **listitem** завжди **-1**.
- **inputtext** завжди порожній.

:::

```c
// натиснули кнопку
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = -1, inputtext = '' (size: 0)

// натиснули ESC (оскільки другу кнопку не видно)
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = -1, inputtext = '' (size: 0)
```

---
  
## Стиль 1: `DIALOG_STYLE_INPUT`.

![](/images/dialogStyles/Dialog_style_input.png)

Показати:

:::примітка

- **\t** додає TAB (додатковий пробіл).
- **\n** створює новий рядок.
- [Color embedding](colorslist#color-embedding) не скидається після **\n** або **\t**.

:::

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_INPUT, «Підпис», «Введіть інформацію нижче:», «Кнопка 1», «Кнопка 2»);
```

### Виведення відповіді

:::примітка

- **listitem** завжди дорівнює **-1**.
- **inputtext** - це текст, написаний користувачем, включаючи кольори.

:::

```c
// написав «input» і натиснув ліву кнопку
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = -1, inputtext = 'input' (size: 5)

// написали «input» і натиснули праву кнопку
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = -1, inputtext = 'input' (size: 5)
```

---
  
## Стиль 2: `DIALOG_STYLE_LIST` (список стилів діалогу)

![](/images/dialogStyles/Dialog_style_list.png)

Показати:

:::примітка

- **\t** додає TAB (більше місця).
- **\n** створює новий рядок.
- [Color embedding](colorslist#color-embedding) не скидається після **\t**.

:::

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_LIST, «Caption», «Item 0\n{FFFF00}Item 1\nItem 2», «Button 1», «Button 2»);
```

### Виведення відповіді:

:::note

- **listitem** - номер вибраного елемента, починаючи з **0**.
- **inputtext** - текст, що міститься у вибраному пункті списку, без кольорів.

:::

```c
// вибрали перший елемент списку і натиснули ліву кнопку миші
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = 0, inputtext = 'Item 0' (size: 6)

// вибрали другий елемент списку і натиснули праву кнопку
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = 1, inputtext = 'Item 1' (size: 6)
```

---
  
## Стиль 3: `DIALOG_STYLE_PASSWORD

:::примітка

- Подібно до **DIALOG_STYLE_INPUT**.

:::

![](/images/dialogStyles/Dialog_style_password.png)

Відображається:

:::примітка

- **\t** додає TAB (більше пробілів).
- **\n** створює новий рядок.

:::

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_PASSWORD, «Caption», «Введіть приватну інформацію нижче:», «Button 1», «Button 2»);
```

### Виведення відповіді

:::примітка

- **listitem** завжди дорівнює **-1**.
- **inputtext** - це текст, що міститься у вибраному пункті списку, без кольорів.

:::

```c
// написали «input» і натиснули ліву кнопку
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = -1, inputtext = 'input' (size: 5)

// написали «input» і натиснули праву кнопку
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = -1, inputtext = 'input' (size: 5)
```

---
  
## Стиль 4: `DIALOG_STYLE_TABLIST

:::note

- Подібно до **DIALOG_STYLE_LIST**.

:::

![](/images/dialogStyles/Dialog_style_tablist.png)

Показано:

:::примітка

- **\t** створює новий стовпчик.
- **\n** створює новий елемент списку.
- [Вбудовування кольорів](colorslist#color-embedding) скидається після **\n** та **\t**.
- Перший рядок **info** містить заголовок.

:::

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_TABLIST, «Caption»,
«Deagle\t$5000\t100\n\
{FF0000}Sawnoff\t{33AA33}$5000\t100\n\
Пістолет\t$1000\t50»,
«Кнопка 1», “Кнопка 2”);
```

:::примітка

- **listitem** - номер вибраного елемента, починаючи з **0**.
- **inputtext** - текст, що міститься у _першому стовпчику_ вибраного **listitem**, без кольорів.

:::

```c
// виділили перший елемент списку і натиснули ліву кнопку миші
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = 0, inputtext = 'Deagle' (size: 6)

// вибрали другий елемент списку і натиснули праву кнопку
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = 1, inputtext = 'Sawnoff' (size: 7)
```

---
  
## Стиль 5: `DIALOG_STYLE_TABLIST_HEADERS

:::примітка

- Подібно до **DIALOG_STYLE_LIST**.

:::

![](/images/dialogStyles/Dialog_style_tablist_headers.png)

Показано:

:::примітка

- **\t** створює новий стовпчик.
- **\n** створює новий елемент списку.
- [Вбудовування кольору](colorslist#color-embedding) скидається після **\n** та **\t**.
- Перший рядок **info** містить заголовок.

:::

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_TABLIST_HEADERS, «Caption»,
«Заголовок 1\tЗаголовок 2\tЗаголовок 3\n\n\
Елемент 1, стовпчик 1\tЕлемент 1, стовпчик 2\tЕлемент 1, стовпчик 3\n\
{FF0000}Елемент 2 стовпчик 1\t{33AA33}Елемент 2 стовпчик 2\tЕлемент 2 стовпчик 3»,
«Кнопка 1», “Кнопка 2”);
```

:::примітка

- **listitem** - номер вибраного елемента, починаючи з **0**.
- **inputtext** - текст, що міститься у _першому стовпчику_ вибраного **listitem**, без кольорів.

:::

```c
// виділили перший елемент списку і натиснули ліву кнопку миші
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = 0, inputtext = 'Item 1 Column 1' (size: 15)

// виділили перший елемент списку і натиснули праву кнопку миші
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = 1, inputtext = 'Item 2 Column 1' (size: 15)
```


