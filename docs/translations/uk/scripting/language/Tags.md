---
назва: "Сценарії: Теги"
description: Посібник з тегів, типоподібної функції мови Pawn, що забезпечує безпеку при роботі зі значеннями з різним призначенням.
---

## Вступ

Тег - це префікс до змінної, який вказує компілятору поводитися зі змінною по-особливому за певних обставин. Наприклад, ви можете використовувати теги, щоб визначити, де змінну можна використовувати, а де ні, або спеціальний спосіб додавання двох змінних разом.

Існує два типи тегів - сильні теги (починаються з великої літери) і слабкі теги (починаються з малої літери), здебільшого вони однакові, однак за певних обставин слабкі теги можуть бути перетворені компілятором на безтегові мовчки, тобто ви не отримаєте попередження, у більшості випадків зі слабкими тегами, і завжди зі сильними тегами, неявна зміна тегу призведе до попередження про те, що дані, ймовірно, використовуються неправильно.

Дуже простий приклад - наступний:

```c
новий
    File:myfile = fopen("file.txt", io_read);
myFile += 4;
```

Функція `fopen` поверне значення з тегом типу `File:`, у цьому рядку немає жодних проблем, оскільки значення, що повертається, зберігається у змінній, яка також має тег `File:` (зауважте, що регістри однакові). Однак у наступному рядку до дескриптора файлу додається значення `4`. `4` не має тегу (насправді це тег типу `_:`, але змінні, значення і функції без тегу автоматично встановлюються таким чином, і вам не потрібно про це турбуватися), а myFile має тег `File:`, очевидно, що ніщо і щось не можуть бути однаковими, тому компілятор видасть попередження, це добре, оскільки дескриптор файлу не має сенсу з точки зору його фактичного значення, і тому його модифікація просто знищить дескриптор, а це означає, що файл не може бути закритий, оскільки більше немає дійсного дескриптора, якому можна передати і закрити файл.

### Сильні теги

Як згадувалося вище, сильний тег - це будь-який тег, що починається з великої літери. Приклади таких тегів у SA:MP включають

```c
Поплавок:
Файл:
Текст:
```

Їх не можна змішувати з іншими типами змінних, і при спробі це зробити буде видано попередження:

```c
новий
    Поплавок:myFloat,
    File:myFile,
    myBlank;

myFile = fopen("file.txt", io_read); // File: = File:, без попередження

myFloat = myFile; // Float: = File:, попередження "невідповідність тегів"

myFloat = 4; // Float: = _: (none), попередження "невідповідність тегів"

myBlank = myFloat; // _: (none) = Float:, попередження "невідповідність тегів"
```

### Слабкі теги

Слабкий тег поводиться майже так само, як і сильний, однак компілятор не видасть попередження, якщо адресат не містить тегів, а джерело містить слабкий тег. Наприклад, порівняйте наступні коди сильних і слабких тегів, перший з них з сильним тегом видасть попередження, а другий з слабким тегом - ні:

```c
новий
    Сильний: мій Сильний,
    Слабкий: мій Слабкий,
    myNone;

myNone = myStrong; // Попередження
myNone = myWeak; // Без попередження
```

Однак зворотне не відповідає дійсності:

```c
myWeak = myNone; // Попередження
```

Це також стосується функцій, виклик функції з параметром без тегів, передача змінної зі слабкими тегами не призведе до попередження:

```c
новий
    weak:myWeak;
MyFunction(myWeak);



MyFunction(myVar)
{
    ...
}
```

Але виклик функції з поміченим параметром (слабким або сильним), передача не поміченого параметра призведе до попередження. Приклади слабких тегів у SA:MP менш відомі як такі, хоча вони часто використовуються і включаються:

```c
bool:
filemode:
floatround_method:
```

## Використовуйте

### Заявляю.

Оголосити змінну за допомогою тегу дуже просто, просто напишіть тег, немає необхідності визначати тег заздалегідь будь-яким чином, однак це можливо і має свої переваги, як стане зрозуміло пізніше:

```c
новий
    Mytag:myVariable;
```

Оголошення змінної з одним з існуючих тегів дозволить вам використовувати цю змінну з функціями та операторами, вже написаними для цього типу тегів.

### Функції

Створити функцію для отримання або повернення тегу дуже просто, просто додайте до відповідної частини потрібний тип тегу, наприклад, префікс:

```c
Float:GetValue(File:fHnd, const name[])
{
    ...
}
```

Ця функція отримує дескриптор файлу і повертає значення з плаваючою комою (ймовірно, значення, зчитане з файлу і відповідне до імені значення, переданого у `name[]`). Ця функція, найімовірніше, використовуватиме функцію `floatstr`, яка також повертає значення з плаваючою комою (як ви можете побачити у рядку стану pawno, якщо клацнути на ній у списку функцій праворуч) після отримання рядка. Реалізація цієї функції не є важливою, але вона перетворить рядок у значення з плаваючою комою IEEE, яке потім буде збережено як комірку (насправді воно зберігається як ціле число, яке просто має ідентичний бітовий шаблон з відповідним номером IEEE, оскільки PAWN є безтиповою, але саме з цим частково і борються мітки).

### Оператори

Такі оператори, як `+`, `==`, `>` тощо, можна перевантажувати для різних тегів, тобто виконання `+` над двома змінними типу Float:s дещо відрізняється від виконання цієї операції над двома змінними без тегів. Це особливо корисно у випадку змінних з плаваючою комою, оскільки, як уже згадувалося, вони насправді не є плаваючими, а цілими числами з дуже специфічною бітовою структурою, і якщо оператори не перевантажувати, то операції просто виконувалися б над цілими числами, що призвело б до безладу, якби відповідь знову було інтерпретовано як плаваючу. З цієї причини тег Float: має перевантажені версії більшості операторів для виклику спеціальних функцій, які виконують обчислення на сервері, а не в пішаку.

Оператор схожий на звичайну функцію, але замість імені функції ви використовуєте "operator(**symbol**)", де (**symbol**) - це оператор, який ви хочете перезаписати. Допустимими операторами є

```c
+
-
=
++
--
==
*
/
!=
>
<
>=
<=
!
%
```

Такі символи, як `\`, `*`, `=` і т.д. виконуються автоматично. Оператори типу `&` тощо не можна перевантажувати. Ви також можете перевантажити оператор декілька разів різними комбінаціями тегів. Наприклад:

```c
stock Float:operator=(Mytag:oper)
{
    повернути float(_:operator);
}
```

Якщо ви додасте це у свій код і зробите:

```c
новий
    Float:myFloat,
    Mytag:myTag;

myFloat = myTag;
```

Ви більше не отримаєте попередження компілятора, як раніше, оскільки оператор `=` для випадку `Float: = Mytag:` тепер обробляється так, що компілятор точно знає, що робити.

### Перезапис

У прикладі з перевантаженням вище функціональна лінія була:

```c
return float(_:oper);
```

Це приклад перезапису тегів, `_:` перед oper означає, що компілятор ігнорує той факт, що oper має тип тегу Mytag: і розглядає його як тег типу `_:` (тобто без типу тегу). Функція `float()` тегує звичайне число, тому їй потрібно передати одиницю. У цьому прикладі передбачається, що `Mytag` зберігає звичайне ціле число, але з перезаписом слід поводитися дуже обережно, наприклад, наступний приклад дасть дуже дивні результати:

```c
новий
    Float:f1,
    Float:f2 = 4.0;
f1 = float(_:f2);
```

Здавалося б, що `f1` в кінцевому підсумку має бути `4.0`, але цього не станеться. Як зазначалося, f2 зберігає представлення `4.0`, а не просто `4` як ціле число, це означає, що фактичне значення змінної як цілого числа є дуже непарним числом. Таким чином, якщо ви скажете компілятору обробляти змінну як ціле число, він просто візьме бітову структуру змінної як значення, він не перетворить число з плаваючою комою в ціле, тому ви отримаєте майже випадкове число (насправді воно не є випадковим, оскільки існує шаблон IEEE для чисел з плаваючою комою, але воно не буде схожим на число `4.0`).


