# Препроцесор

---

Перший етап компіляції вихідного файлу пішака у виконуваний файл
P-коду є "препроцесування": текстовий фільтр загального призначення, який змінює/очищає текст
перед тим, як він потрапляє до синтаксичного аналізатора. На етапі препроцесування видаляються коментарі,
вилучає "умовно скомпільовані" блоки, обробляє директиви компілятора
і виконує операції пошуку та заміни в тексті вихідного файлу. Директиви компілятора
директиви компілятора наведено на сторінці 117, а заміна тексту
("знайти і замінити") є темою цієї глави.

Препроцесор - це процес, який викликається для всіх рядків вихідного коду одразу
після їх прочитання. Під час підстановки тексту не виконується перевірка синтаксису
під час підстановки тексту. Хоча препроцесор дозволяє використовувати потужні трюки в пішаковій мові, з ним
з ним також легко вистрілити собі в ногу.

У цій главі я буду посилатися на мову C/C⁺⁺ декілька разів, тому що
препроцесор пішака подібний до препроцесора у C/C++. Тим не менш, препроцесор pawn
несумісний з препроцесором C/C⁺⁺.

Директива #define визначає макроси препроцесора. Прості макроси:

```c

#define maxsprites 25
#define CopyRightString "(c) Copyright 2004 by me"

```

У скрипті пішака ви можете використовувати їх так само, як і константи. Наприклад
наприклад:

```c

#define maxsprites 25
#define CopyRightString "(c) Copyright 2004 by me"
main()
{
    print( Copyright )
    new sprites[maxsprites]
}

```

До речі, для цих простих макросів існують еквівалентні конструкції пішаків:

```c

const maxsprites = 25

stock const CopyRightString[] = "(c) Copyright 2004 by me"

```

Перевагою таких оголошень констант є краща перевірка на помилки та
можливість створювати константи з тегами. Синтаксис рядкової константи
константа - це змінна масиву, яка оголошується як "const", так і "stock". Атрибут
const забороняє будь-які зміни рядка, а атрибут stock змушує оголошення
оголошення "зникає", якщо до нього ніколи не звертаються.

Макроси підстановки можуть приймати до 10 параметрів. Типове використання параметризованих макросів - це моделювання крихітних функцій.
теризованих макросів є моделювання крихітних функцій:

Лістинг: макрос "min"

```c

#define min(%1,%2) ((%1) < (%2) ? (%1) : (%2))

```

Якщо ви знаєте C/C⁺⁺, ви впізнаєте звичку брати кожен аргумент
і весь вираз підстановки у круглі дужки.

Якщо ви використовуєте вищевказаний макрос у скрипті, то він буде працювати наступним чином:

Виявлення помилки: неправильне використання макросу "min"

```c

new a = 1, b = 4
new min = min(++a,b)

```

препроцесор перекладає його:

```c

new a = 1, b = 4
new min = ((++a) < (b) ? (++a) : (b))

```

що призводить до того, що "a", можливо, буде збільшено вдвічі. Це одна з пасток.
у яку ви можете потрапити при використанні макросів підстановки (ця проблема
добре відома програмістам на C/C++). Тому, можливо, буде гарною ідеєю
використовувати угоду про імена, щоб відрізняти макроси від функцій. У мові C/C⁺⁺ це
загальноприйнятою практикою є написання макросів препроцесора у всіх регістрах верхнього регістру.

Щоб показати, чому варто брати аргументи макросу у круглі дужки, розглянемо приклад
макрос:

```c

#define ceil_div(%1,%2) (%1 + %2 - 1) / %2

```

Цей макрос ділить перший аргумент на другий, але з округленням
в більшу сторону до найближчого цілого (оператор ділення, "/", округлює в меншу сторону).
Якщо ви використовуєте його наступним чином:

```c

new a = 5
new b = ceil_div(8, a - 2)

```

другий рядок розширюється до "new b = (8 + a - 2 - 1) / a - 2",
що, враховуючи рівні пріоритетів операторів пішаків, призводить до того, що "b"
дорівнюватиме нулю (якщо "a" дорівнює 5). Те, що ви могли б очікувати, дивлячись на виклик макросу
це вісім поділити на три ("a - 2"), округлити в більшу сторону -
отже, "b" буде встановлено у значення 3. Зміна макросу на такий, що містить
кожен параметр у дужки, вирішує проблему. З аналогічних причин також рекомендується
також рекомендується брати повний текст заміни у круглі дужки. Нижче
наведено макрос ceil_div, змінений відповідним чином:

```c

#define ceil_div(%1,%2) ( ((%1) + (%2) - 1) / (%2) )

```

Порівняння за шаблоном є більш тонким, ніж порівняння рядків, які виглядають як виклики функцій
виклики функцій. Шаблон збігається з текстом буквально, але приймає довільний текст, якщо у шаблоні
шаблон вказує параметр. Ви можете створювати шаблони на кшталт:

Лістинг: макрос, що транслює синтаксис доступу до масиву у виклик функції

```c

#define Object[%1] CallObject(%1)

```

Якщо розширення макросу містить текст, який збігається з іншими макросами, розширення
виконується під час виклику, а не під час визначення. Таким чином, код:

```c

#define a(%1) (1+b(%1))
#define b(%1) (2\*(%1))
new c = a(8)

```

обчислить "new c = (1+(2\*(8))", навіть якщо макрос "b" не було
не було визначено на момент визначення макросу "a".

Співставлення шаблонів обмежується наступними правилами:

- У шаблоні може не бути пробілів. Якщо вам потрібно вставити пробіл, вам слід використати екрановану послідовність "\32;". З іншого боку, текст підстановки може містити пробіли. Завдяки правилам співставлення макрошаблону (описаним нижче), співставлення з пробілами рідко потрібне.

- Як показано у попередньому рядку, у шаблоні можуть з'являтися екрановані послідовності (вони не дуже корисні, за винятком, можливо, співпадіння з буквеним символом "%").

- Шаблон не може закінчуватися параметром; шаблон на кшталт "set:%1=%2" є неприпустимим. Якщо ви хочете, щоб шаблон збігався з кінцем оператора, ви можете додати крапку з комою в кінці шаблону. Якщо крапка з комою в кінці кожного оператора не є обов'язковою, крапка з комою також буде збігатися з новим рядком у вихідному тексті.

- Шаблон має починатися з літери, символу підкреслення або "@" Перша частина шаблону, що складається з буквено-цифрових символів (плюс символи "\_" і "@"), є "ім'ям" або "префіксом" макросу. За допомогою визначеного оператора та директиви #undef ви вказуєте префікс макросу.

- При порівнянні шаблону препроцесор ігнорує пробіли між неалфавітними символами і пробіли між алфавітним і неалфавітним символами, за одним винятком: між двома однаковими символами пробіли не ігноруються. Тому: `шаблон abc(+-) відповідає "abc ( + - )", шаблон abc(--) відповідає "abc ( -- )"`, але не відповідає `"abc(- -)"`.

- Існує до 10 параметрів, які позначаються символом "%" і однією цифрою (від 1 до 9 і 0). Порядок параметрів у шаблоні не має значення.

- Символ #define є директивою синтаксичного аналізатора. Як і у випадку з усіма директивами синтаксичного аналізатора, визначення шаблону має вміщуватися в одному рядку. Ви можете обійти цю вимогу за допомогою символу "\" у кінці рядка. Текст, якому потрібно знайти відповідність, також має вміщуватися в одному рядку.

Зауважте, що за наявності (параметризованих) макросів рядки вихідного коду можуть
не є тим, чим вони здаються: те, що виглядає як доступ до масиву, може виявитися "попереднім" до виклику функції.
викликом функції, і навпаки.

Основна програма, яка вбудовує синтаксичний аналізатор пішаків, може надавати можливість
перевіряти результат підстановки тексту за допомогою макросів. Якщо ви використовуєте
стандартний набір інструментів pawn, ви знайдете настанови щодо використання компілятора
та часу виконання у супровідному буклеті "The pawn booklet - Implementor's Guide".

---

Пріоритет оператора: 110`

Директиви: 117`

---

[Повернутися до змісту](00-Contents.md)


