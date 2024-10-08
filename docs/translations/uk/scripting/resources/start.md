---
заголовок: Основи написання сценаріїв
description: Короткий підручник, який допоможе вам розібратися з основами мови Pawn та APIs SA-MP/open.mp.
sidebar_label: Основи написання сценаріїв
---

Нижче наведено приклад, можливо, найпростішого скрипта, який ви можете написати:

```c
#include <a_samp>

main()
{
    print(«Hello World!»);
    return 1;
}
```

Ми розглянемо різні аспекти по черзі, але почнемо з першого рядка.

---
  
## Включити

```c
#include <a_samp>
```

Це, по суті, завантажує код з pawno/includes/a_samp.inc у ваш скрипт, тож ви можете використовувати все, що там є. Одна з речей, що там є, це:

```c
#include <core>
#include <float>
#include <string>
#include <file>
#include <time>
#include <datagram>
#include <a_players>
#include <a_vehicles>
#include <a_objects>
#include <a_sampdb>
```

Це включає всі інші файли у цьому каталозі, тому, додавши цей рядок, ви отримаєте доступ до всіх функцій SA:MP (більше про функції пізніше).

---
  
## Виклики

Наступна частина має дві сторони виклику функції. main() - це функція, для якої ви пишете код і яка викликається з іншого місця, print(string\[\]) - це функція з кодом в іншому місці, яку ви викликаєте. Наразі все, що буде зроблено, це завантажено, надруковано рядок (наприклад, надруковано «Hello World!» (без «»s") (традиція у всіх мовах сценаріїв)) до консолі сервера і завершить роботу. У прикладі:

```c
повертає 1;
```

Повертає значення (1) туди, звідки був зроблений виклик main, щоб повідомити йому про те, що сталося (точне значення, передане тут, не має значення, але в інших місцях - має). Тепер у вас є ваш перший (дуже простий) скрипт. Якщо ви виберете file->new у pawno, це дасть вам набагато більшу відправну точку для всіх зворотних викликів (див. нижче), включно з main (який технічно не є зворотним викликом, але діє як такий).

---
  
## Оператори

Рядки виводу та повернення мають символ ';' (крапка з комою), який позначає кінець оператора (оператор - це група з однієї або декількох функцій та операторів, які разом щось роблять, подібно до речення у звичайній мові). Більшість людей ставлять окремі оператори на окремі рядки, але це не обов'язково, це просто робить речі більш зрозумілими, наступний варіант є рівноцінним:

```c
main() { print(«Hello World!»); return 1; }
```

Дужки {} (фігурні дужки, а не круглі дужки) об'єднують групу операторів, які мають виконуватися разом (як абзац у звичайній мові). Наприклад:

```c
main() print(«Hello World!»); return 1;
```

Ви отримаєте помилку, оскільки тепер оператор return 1; не згрупований і не є частиною main. Дужки групують набір операторів в один оператор (так званий складений оператор), і функції мають з ними один оператор. Без фігурних дужок оператори print і return є повністю окремими операторами, тому їх буде два або більше, оскільки функція може мати тільки один оператор, другого у функції немає, а в коді цього бути не може.

Загалом, ви можете розширювати складені оператори за допомогою оператора кома (,), але ми не рекомендуємо цього робити, оскільки це не найкраща практика кодування. Нижче наведено приклад:

```c
main() print(«Hello World!»), return 1;
```

# Функції

Функція - це фрагмент коду, який виконує певну дію, і якому можна наказати виконати цю дію з іншого місця. Вона також може передавати дані про те, що вона зробила, туди, звідки її було запущено (місце, яке її «викликало»).

---
  
## Виклик

```c
print(«Hello World!»);
```

Як описано у [Початок роботи](/wiki/Scripting_Basics#Початок роботи «Основи написання сценаріїв»), це викликає функцію з назвою «print» (визначену у файлі a_samp.inc, саме тому вам потрібно включити його) і наказує їй вивести щось у консоль сервера (слово hello).

Функція складається з імені функції (наприклад, print), яке вказує системі, який фрагмент коду ви хочете викликати, і списку параметрів, укладеного в ()s після імені функції, які передають функції додаткові дані, що допомагають їй працювати. Якби у вас не було параметрів, вам би знадобилися мільйони функцій:

```c
printa();
printaa();
printab();
printac();
і т.д...
```

Функції можуть мати скільки завгодно параметрів, від 0 до 128 (може бути верхня межа, але не менше 128):

```c
printf(«Hello World!», 1, 2, 3, 4, 5, 6);
```

Не турбуйтеся поки що про те, що робить ця функція, просто вона має 7 параметрів, кожен з яких розділено комою.

---
  
## Визначення

Окрім можливості викликати існуючі функції, ви також можете писати і викликати власні:

```c
#include <a_samp>

main()
{
    return MyFunction();
}

MyFunction()
{
    print(«Hello World!»);
    return 1;
}
```

Цей код робить те саме, що й оригінальний, але оформлений по-іншому. Коли main() викликається під час запуску режиму (він викликається автоматично), вона викликає нову користувацьку функцію MyFunction(). Ця функція виводить повідомлення в консоль сервера, а потім повертає число 1 в main(). main() приймає повернуте значення (1) і повертає його на сам сервер (тобто туди, звідки було викликано main()). Оскільки «return MyFunction();» - це єдиний оператор, який ви могли б зробити:

```c
#include <a_samp>

main() return MyFunction();

MyFunction()
{
    print(«Hello World!»);
    return 1;
}
```

Але більшість людей так не роблять для наочності. Ви також можете взагалі не використовувати значення, що повертається функцією MyFunction, і так і роблять:

```c
#include <a_samp>

main()
{
    MyFunction();
    return 1;
}

MyFunction()
{
    print(«Hello World!»);
    return 1;
}
```

---
  
## Параметри

Параметри - це тип [змінної](/wiki/Scripting_Basics#Змінні «Основи програмування»), які не потрібно оголошувати, оскільки вони надходять з місця виклику функції:

```c
#include <a_samp>

main()
{
    return MyFunction(«Hello World!»);
}

MyFunction(string[])
{
    print(string);
    return 1;
}
```

Цей код робить те саме, але тепер ми вказуємо функції MyFunction(), що саме виводити. Виклик передає рядок «Hello World!» до функції, де він зберігається у змінній з назвою string (знак \[\] означає, що це [масив](/wiki/Scripting_Basics#Arrays «Основи написання сценаріїв»), як пояснюється далі). Викликається функція print, яка передає вміст змінної string, ми знаємо, що це змінна, оскільки вона більше не має символу «».

# Змінні

Змінна - це, по суті, частина пам'яті, де зберігаються дані, які можна змінювати і зчитувати за потреби. Змінні - це одна або декілька комірок, комірка має розмір 32 біти (4 байти) і за замовчуванням підписана, тому вони можуть зберігати від -2147483648 до 2147483647 (хоча -2147483648 погано визначена в PAWN і дає дивні результати при відображенні). Змінна, що складається з більш ніж однієї комірки, називається масивом, рядки - це особливий тип масиву, де кожна комірка містить символ рядка (або 4 символи в упакованих рядках, але вони тут не розглядаються).

---
  
## Оголошення

Щоб створити нову змінну, її потрібно оголосити:

```c
новий
    myVariable;
```

Це вказує системі створити нову змінну з назвою myVariable, початковим значенням якої буде 0.

---
  
## Встановлення

```c
новий
    myVariable = 7;
```

Тут оголошується нова змінна і встановлюється її початкове значення 7, тому при виведенні змінної на друк ми отримаємо 7. Щоб вивести на екран змінну, яка не є рядком, нам потрібно повернутися до функції printf(), згаданої раніше, і виконати наступні дії:

```c
новий
    myVariable = 7;
printf(«%d», myVariable);
```

Знову ж таки, поки що все, що вам потрібно знати, це те, що ми виведемо значення myVariable (тобто 7 на даний момент) на сервер.

```c
новий
    myVariable = 7;
printf(«%d», myVariable);
myVariable = 8;
printf(«%d», myVariable);
```

Цей код виведе 7, змінить значення змінної на 8 і також відобразить нове значення у вікні сервера. Існує багато інших речей, які можна робити зі змінними, деякі з них наведено нижче, більшість описано деінде:

```c
myVariable = myVariable + 4;
```

Встановлює значення змінної myVariable до старого значення myVariable плюс 4, тобто збільшує її значення на 4. Це також можна записати так:

```c
myVariable += 4;
```

Що просто означає «збільшити myVariable на 4».

```c
myVariable -= 4;
```

Це зменшить значення на 4.

```c
myVariable *= 4;
```

Збільшить значення на 4.

```c
myVariable /= 4;
```

Поділить значення на 4.

---
  
## Масиви

### Оголошення

---
  
Масив - це змінна, в якій можна зберігати декілька даних одночасно і мати до них динамічний доступ. Масив оголошується встановленого розміру під час компіляції, тому вам потрібно знати, скільки частин даних вам потрібно зберігати заздалегідь, хорошим прикладом цього є дуже поширений масив MAX_PLAYERS, він матиме по одному слоту для кожного можливо підключеного гравця, тому ви знаєте, що дані для одного гравця не будуть заважати даним для іншого гравця (більше про визначення пізніше).

```c
новий
    myArray[5];
```

Цей код оголошує масив розміром 5 слотів, тому ви можете зберігати в ньому 5 звичайних даних одночасно, чого не можна зробити, наприклад, наступним чином:

```c
новий
    myVariable = 5,
    myArray[myVariable];
```

Цей код виглядає так, ніби він створить масив розміром з будь-яке число, що зберігається у myVariable (тут 5, але це може бути будь-що), але ви не можете цього зробити. У PAWN пам'ять для змінних виділяється під час компіляції коду, це означає, що масиви завжди одного розміру, ви не можете встановити розмір, який вам подобається, коли вам заманеться.

---
  
### Доступ

Щоб встановити значення в масиві, вам потрібно вказати, в якій частині масиву ви хочете зберігати дані, це можна зробити за допомогою іншої змінної:

```c
новий
    myArray[5];
myArray[2] = 7;
```

Тут буде оголошено масив з 5 слотами і присвоєно ТРЕТЬОМУ слоту значення 7, враховуючи, що змінні завжди починаються з 0, це зробить значення в масиві рівними:

```
0, 0, 7, 0, 0
```

Чому це не так?

```
0, 7, 0, 0, 0
```

вам цікаво? Тому що лічба насправді починається з числа 0, а не з 1. Подумай про наступне:

```
2, 4, 6, 8
```

Якщо ви пройдетеся по списку, то після цифри 2 у вас вже буде одна цифра (2), це означає, що якщо ви рахуєте числа, то коли ви дійдете до цифри 4, ви вже будете на одиниці, а коли ви дійдете до цифри 2, ви вже будете на нулі. Таким чином, 2 знаходиться на нульовій позиції, а 4 - на одиниці, і з цього випливає, що 6 знаходиться на другій позиції, тобто там, де знаходиться 7 у першому прикладі вище. Якщо ми позначимо слоти для першого прикладу, то отримаємо

```
0 1 2 3 4
0 0 7 0 0
```

Є п'ять слотів, але, як ви бачите, і це дуже важливо, НЕТ П'ЯТОГО СЛОТА, тому наступні дії можуть призвести до аварійного завершення роботи вашого сервера:

```c
новий
    myArray[5];
myArray[5] = 7;
```

Як було сказано вище, індекс масиву (індекс - це слот, в який ви пишете) може бути чим завгодно, числом, змінною або навіть функцією, яка повертає значення.

```c
новий
    myArray[5],
    myIndex = 2;
myArray[myIndex] = 7;
```

Коли у вас є масив та індекс, ви можете використовувати цей блок так само, як і будь-яку іншу змінну:

```c
myArray[2] = myArray[2] + 1;
myArray[2] += 1;
myArray[2]++;
```

---
  
### Приклад

Як згадувалося вище, поширеним типом масиву є масив MAX_PLAYERS. MAX_PLAYERS - це не змінна, це визначення, яке буде пояснено пізніше, а поки що вважайте, що це константне число, яке дорівнює максимальній кількості гравців, яку може вмістити сервер (за замовчуванням це 500, навіть якщо ви зміните це число у вашому файлі server.cfg). Наступний код використовує звичайні змінні для зберігання даних про 4 гравців і робить щось з ними у функції (для простоти припустимо, що MAX_PLAYERS дорівнює 4):

```c
новий
    gPlayer0,
    gPlayer1,
    gPlayer2,
    gPlayer3;

SetPlayerValue(playerid, value)
{
    switch(playerid)
    {
        case 0: gPlayer0 = value; // те саме, що і if (playerid == 0)
        case 1: gPlayer1 = value; // те саме, що й if (playerid == 1)
        case 2: gPlayer2 = value; // те саме, що й if (playerid == 2)
        case 3: gPlayer3 = value; // те саме, що й if (playerid == 3)
    }
}
```

Дивіться розділ про керуючі структури для отримання додаткової інформації про те, що там відбувається, також зверніть увагу, що це можна було б зробити як перемикач, але це менш зрозуміло для прикладу і, по суті, той самий код у будь-якому випадку.

Тепер порівняйте це з використанням масиву з одним слотом на гравця, маючи на увазі, що індекс масиву може бути будь-яким значенням:

```c
новий
    gPlayers[MAX_PLAYERS];

SetPlayerValue(playerid, value)
{
    gPlayers[playerid] = value;
}
```

Це створить глобальний масив (див. розділ про область видимості) з одним слотом для кожного гравця, після чого функція присвоїть значення змінної «value» слоту для вказаного гравця. Перший приклад був великим, з чотирма гравцями, використовуючи 4 рядки на гравця, тобто 2000 рядків для 500 гравців (можна і менше, але все одно багато), друга версія - це один рядок, незалежно від того, скільки у вас гравців.

---
  
## Рядки

### Базове використання

---
  
Рядок - це спеціальний тип масиву, який використовується для зберігання декількох символів для створення слова, речення або іншого тексту, придатного для читання людиною. Символ має розмір в один байт (хоча існують розширені набори, де символ може бути більшим за байт, але вони недостатньо чітко визначені у SA:MP), і за замовчуванням символ займає одну комірку (одну звичайну змінну або один слот масиву). Символи кодуються у системі, яка називається [ASCII](http://www.asciitable.com/ «http://www.asciitable.com/»), символ «A» представлений числом 65, якщо сказати системі відобразити число, вона отримає 65, якщо сказати системі відобразити символ, вона отримає велику літеру a. Очевидно, що один символ займає одну комірку, кілька символів (тобто текст) займатимуть кілька комірок, колекції комірок, як щойно пояснювалося, називаються масивами.

Рядки у PAWN (та інших мовах) мають так зване «NULL завершення», це означає, що коли досягається 0, рядок завершується. Це не те саме, що символ «0», представлений цифрою 48, це символ NULL, представлений цифрою 0. Це означає, що ви можете мати масив рядків розміром 20 комірок, але мати рядок довжиною 3 символи, якщо четвертим символом буде символ NULL, що позначає кінець рядка. Однак ви не можете мати рядок довжиною 20 символів, оскільки символ NULL ОБОВ'ЯЗКОВО має бути у рядку, тому у масиві з 20 клітинок ви можете мати рядок з 19 символів і символ завершення NULL.

```c
новий
    myString[16] = «Hello World!»;
```

Цей код оголошує новий рядок, в якому достатньо місця для 15-символьного рядка, і спочатку встановлює його в 5-символьний рядок «Hello World!», подвійні лапки навколо тексту вказують на те, що це рядок. Внутрішньо масив буде виглядати наступним чином:

```
104 101 108 108 111 0 x x x x x x x x x x x x
```

Символи «x» можуть означати що завгодно, у цьому прикладі всі вони будуть 0, але оскільки вони стоять після нульового символу, не має значення, що це за символи, вони не впливають на рядок.

Рядками можна маніпулювати, наприклад, як звичайними масивами:

```c
новий
    myString[16] = «Hello World!»;
myString[1] = 97;
```

Замінить символ у слоті 1 на символ, представлений числом 97 (мала літера «a»), у результаті чого рядок матиме вигляд «hallo». Це можна записати набагато зручніше для читання і легше для редагування як:

```c
новий
    myString[16] = «Hello World!»;
myString[1] = 'a';
```

Одинарні лапки навколо «a» означають, що це символ, а не рядок, символи не потрібно завершувати NULL, оскільки вони завжди мають довжину лише в одну комірку, їх також можна використовувати як взаємозамінні з числами, якщо ви знаєте, що вони означають.

```c
новий
    myString[16] = «Hello World!»;
myString[1] = '\0';
```

'\\0' - це два символи, але \\ - це спеціальний символ, який змінює наступний символ, \\0 означає NULL, цей код аналогічний коду do:

```c
новий
    myString[16] = «Hello World!»;
myString[1] = 0;
```

Але це НЕ те саме, що робити:

```c
новий
    myString[16] = «Hello World!»;
myString[1] = '0';
```

У першому та другому варіантах рядок буде мати простий вигляд:

```
h
```

Третій варіант призведе до того, що рядок матиме вигляд

```
h0llo
```

---
  
### Екранний символ

Як вже було сказано, зворотна коса риска - це спеціальний символ, що виконує:

```
'\'
```

або:

```
«\»
```

Викличе помилку компілятора, оскільки \ змінює наступний символ, тому ці константи не будуть завершуватися правильно, це може бути використано для створення символів, які зазвичай не можуть бути створені, наприклад, для створення символів, які не можуть бути створені:

```c
новий
    myString[4] = «\»»;
```

Цей код створить рядок, що складається лише з подвійних лапок, зазвичай подвійні лапки сигналізують про кінець записаного рядка, але зворотна коса риска робить подвійні лапки одразу після них частиною рядка, а подвійні лапки після них замість цього завершують рядок. Інші спеціальні символи

| Код | Назва | Призначення
| ------ | --------------- | ------------------------------------------------------------------------------------------------------- |
| \0 | NULL символ | Закінчує рядок.                                                                                          
| EOS | NULL символ | (те ж саме, що і вище)
\n | Переведення рядка | Використовуйте \n для переходу на новий рядок у Linux (також працює у Windows)
\r | Повернення каретки | Використовуйте \r\n для переходу на новий рядок у Windows
\\\\ | Зворотна коса риска | Використовується для додавання власне зворотної косої риски до рядка
| \' | Одинарні лапки | Використовується для використання власне одинарних лапок як символу в одинарних лапках (використовується: '\'')
| \»     Подвійні лапки | Використовується для того, щоб помістити фактичні подвійні лапки в рядок | | \
| \xNNN; | Шістнадцяткове число | Використовується для встановлення символу на символ, представлений шістнадцятковим числом, зазначеним на місці NNN
| \NNN; | Число | Використовується для встановлення символу на символ, представлений числом, вказаним на місці NNN (див. \0)

Використовується для встановлення символу на символ, представлений числом, вказаним замість NNN (див. \\0)

Є й інші, але це основні.

---
  
## Теги

Тег - це додаткова інформація про змінну, яка визначає, де вона може бути використана, і надає інформацію про її функціональність. Теги можуть бути сильними (починаються з великої літери) або слабкими. Наприклад:

```c
новий
    Float:a = 6.0;
```

Частина «Float» - це тег, який визначає цю змінну як змінну з плаваючою точкою (неціле/дійсне число) і визначає, де вона може бути використана.

```c
native SetGravity(Float:gravity);
```

Це означає, що функція SetGravity приймає єдиний параметр, який має бути, наприклад, плаваючою величиною:

```c
SetGravity(6.0);
new
   Float:fGrav = 5.0;
SetGravity(fGrav);
```

Це встановить гравітацію на 6 (6.0 як число з плаваючою комою), а потім на 5 (5.0 як число з плаваючою комою). Використання неправильного тегу у неправильному місці часто призводить до невідповідності тегів:

```c
SetGravity(MyTag:7);
```

Це буде спроба встановити гравітацію на 7 з тегом «MyTag», який явно не є «Float», тому є неправильним. Також зауважте, що теги чутливі до регістру.

Користувачі можуть визначати власні теги:

```c
new myTag: variable = 0,

    AppleTag: інший = 1;
```

Це цілком коректно, однак, при додаванні цих двох змінних _безпосередньо_, ви повинні використовувати '\_:', щоб «де-тегувати» їх, інакше компілятор видасть попередження про «невідповідність тегів».

---
  
## Область видимості

Область видимості - це область застосування змінної. Існує чотири основні області видимості: локальна, локальна статична, глобальна та глобальна статична. Усі змінні можна використовувати лише після їх оголошення, тому це правильно:

```c
новий
    var = 4;
printf(«%d», var);
```

Це неправильно:

```c
printf(«%d», var);
новий
    var = 4;
```

---
  
### локальна

Локальна змінна - це змінна, оголошена як new всередині функції або частини функції:

```c
MyFunc()
{
    новий
        var1 = 4;
    printf(«%d», var1);
    {
        // var1 все ще існує, оскільки це нижчий рівень
        новий
            var2 = 8;
        printf(«%d %d», var1, var2);
    }
    // var2 більше не існує, оскільки це вищий рівень
}
// var1 більше не існує
```

Локальні змінні скидаються кожного разу, наприклад:

```c
for (new i = 0; i < 3; i++)
{
    новий
        j = 1;
    printf(«%d», j);
    j++;
}
```

Буде надруковано:

```
1
1
1
```

Оскільки j створюється, виводиться, збільшується, потім знищується, то код зациклюється.

---
  
### статичний локальний

Статичний локал може бути використаний там же, де і локальний, але не забуває про своє старе значення, наприклад:

```c
MyFunc()
{
    статичний
        var1 = 4;
    printf(«%d», var1);
    {
        // var1 все ще існує, оскільки це нижчий рівень
        статичний
            var2 = 8;
        printf(«%d %d», var1, var2);
    }
    // var2 більше не існує, оскільки це більш високий рівень
}
// var1 більше не існує
```

Цей код буде поводитися точно так само, як і новий приклад, але з деякими змінами:

```c
for (new i = 0; i < 3; i++)
{
    статичний
        j = 1;
    printf(«%d», j);
    j++;
}
```

Буде надруковано:

```
1
2
3
```

Оскільки `j` є статичним, то запам'ятовує своє старе значення.

---
  
### глобальні

Глобальні змінні оголошуються за межами функції і можуть бути використані в будь-яких функціях:

```c
новий
    gMyVar = 4;

MyFunc()
{
    printf(«%d», gMyVar);
}
```

Вони ніколи не скидаються і не губляться.

---
  
### глобальні статичні

Глобальні статичні змінні схожі на звичайні глобали, але можуть бути використані лише у файлі, в якому вони оголошені:

File1:

```c
статичний
    gsMyVar = 4;

MyFunc()
{
    printf(«%d», gsMyVar);
}

#include «File2»
```

File2:

```c
MyFunc2()
{
    // Це неправильно, оскільки gsMyVar тут не існує
    printf(«%d», gsMyVar);
}
```

static також може бути застосовано до функцій у такий самий спосіб.


