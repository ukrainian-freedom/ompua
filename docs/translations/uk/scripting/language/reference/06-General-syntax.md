# Загальний синтаксис

---

**Формат**

    Ідентифікатори, числа і токени відокремлюються пробілами, табуляцією, поверненням каретки
    повернення каретки та "переведенням рядка". Послідовність з одного або декількох таких роздільників
    називаються пробілами.

**Необов'язкові крапки з комою

    Крапка з комою (для завершення твердження) є необов'язковою, якщо вона стоїть в кінці
    рядка. Крапка з комою потрібна, щоб відокремити декілька операторів на
    одному рядку. Вираз все одно може займати декілька рядків, але
    постфіксні оператори (++, -- і char) повинні знаходитися у тому ж рядку, що й їхній операнд.

**Коментарі**

    Текст між символами /_ та _/ (обидва символи можуть знаходитись на одному
    рядку або в різних рядках) і текст за // (до кінця рядка)
    є програмним коментарем. Синтаксичний аналізатор розглядає коментар як пробіл
    пробіл. Коментарі не можуть бути вкладеними.

    Коментар, який починається з "/\*_ " (дві зірочки і пробіл за
    другою зірочкою) і закінчується символом "_/", є коментарем до документації.
    Коментар, який починається з "/// " (три скісні риски і пробіл
    за третьою скісною рискою) також є коментарем для документації. Синтаксичний аналізатор
    може поводитися з коментарями документації особливим чином; наприклад, він
    може побудувати з них онлайнову довідку.

**Ідентифікатори**

    Імена змінних, функцій та констант. Ідентифікатори складаються з
    символів a. . . z, A. . . Z, 0. . . 9, _ або @; перший символ може не бути
    цифрою. Символи @ та _ самі по собі не є допустимими ідентифікаторами,

    Тобто, "_Up" є допустимим ідентифікатором, а "_" - ні.

    pawn чутливий до регістру.

    Синтаксичний аналізатор може обрізати ідентифікатор після максимальної довжини. Кількість значущих символів
    кількість значущих символів визначається реалізацією, але має бути
    бути не менше 16 символів.

**Заслужені слова (ключові слова)**.

| Заяви | Оператори | Директиви | Інше
| ---------- | --------- | ----------- | -------- |
assert | char | #assert | const | #assert | const
| break | defined | #define | enum
| case | sizeof | #else | forward | #else
| continue | state | #elseif | native | #else
| default | tagof | #emit | new
| do | | #endif | оператор
else | | #endinput | public | #endinput | #endinput | #endinput | #endinput | #endinput
| exit | #endscript | static | #endscript | static
for | #error | stock | #error | stock | #error | #error | #error | #error | #error | #error | #error | #error
| goto #file
| if | | #if | | #if
| return #include #include
| sleep #line #line
| state | | #pragma | #pragma
| switch #section # #section # #section # #section # #section #
| while #tryinclude
#undef #undef

Окрім зарезервованих слів, у pawn також є декілька наперед визначених констант,
ви не можете використовувати символьні імена попередньо визначених констант для імен змінних або функцій.
для імен змінних або функцій.

**Константи (літерали)**

**Цілочисельні числові константи
. **двійкові** .
0b, за яким слідує послідовність цифр 0 та 1.
. **десяткова система числення
послідовність цифр від 0 до 9.
. **шістнадцяткове**
0x, за яким слідує серія цифр від 0 до 9 та літери від a до f.

    У всіх числових системах числення можна використовувати підкреслення для розділення груп (шістнадцяткових) десяткових цифр.
    групи (гекса-)десяткових цифр. Символи підкреслення
    між цифрами ігноруються.

**Раціональні числові константи**

Раціональне число - це число з дробовою частиною. Раціональне число починається з однієї цифри, містить дробову частину і
раціональне число починається з однієї або декількох цифр, містить десяткову крапку і має одну цифру після
десяткову крапку і має принаймні одну цифру після десяткової крапки.
крапкою і має принаймні одну цифру після коми. Наприклад, "12.0" і "0.75" є дійсними раціональними числами.
раціональними числами. За бажанням до раціонального числа може додаватися показник степеня
до раціонального числа можна додати показник степеня; позначення показника степеня - це буква "e" (у нижньому регістрі)
за якою слідує ціла числова константа зі знаком. Наприклад,
"3.12e4" - дійсне раціональне число з показником степеня.

Підтримка раціональних чисел повинна бути включена за допомогою директиви #pragma
rational. Залежно від параметрів, заданих цією директивою
директивою, раціональне число представляє собою число з плаваючою комою або
число з фіксованою комою.

**Символьні константи**

Один символ ASCII, взятий в одинарні лапки, є константою char-
константою актора (наприклад: 'a', '7', '\$'). Символьні константи вважаються числовими константами.
вважаються числовими константами.

| Командний рядок.
| ---------------- | --- | ------------------------------------------ |
| '\a' | | Звуковий сигнал (біп) |
| '\b' | Пробіл.
| '\e' - пробіл.
| '\f' | | Формування стрічки.
| '\n' | | Новий рядок.
| '\r' | | Повернення каретки.
| '\t' | | Горизонтальний табулятор
| '\v' | | Вертикальна табуляція
| '\\' - символ пробілу.
| '\''             | Одинарні лапки.
| '\"'             | Подвійні лапки.
| '\%' % % % знак відсотка
| '\ddd;' | | код символу з десятковим кодом "ddd"
'\xhhh;' | | код символу з шістнадцятковим кодом "hhh" | ''\xhhh;'' | | код символу з шістнадцятковим кодом "hhh" | ''

Крапка з комою після кодів ddd; та xhhh; є необов'язковою.
Її призначення полягає у тому, щоб надати послідовності екранування явний символ завершення
символ завершення, коли вона використовується у рядковій константі.

Зворотна коса риска ("\") є типовим символом екранування. Ви можете
встановити інший символ екранування за допомогою директиви #pragma ctrlchar
(сторінка 120).

**Рядкові константи**

Вважається, що рядкові константи є масивами з розміром, достатнім для
достатнім для зберігання усіх символів плюс завершальний символ '\0'.
Кожен рядок зберігається в унікальній позиції у пам'яті; немає ніякого
вилучення дублікатів рядків.

Розпакований рядок - це послідовність з нуля або більше ASCII-символів
оточених подвійними лапками. Кожен елемент масиву містить
один символ. Розпакований рядок може містити символи у
багатобайтових кодувань, таких як Unicode або UCS-4.

**розпакована рядкова константа:**

    "прудка коричнева лисиця..."

Упакований рядковий літерал повторює синтаксис розпакованого рядка
але перед першою подвійною лапкою ставиться "!".

**упакована рядкова константа:**

    !"...спакував і вигнав ледачого пса".

У випадку упакованого рядка синтаксичний аналізатор упаковує стільки символів char-
у комірку стільки, скільки поміститься. Символ не адресується як
як окрема одиниця, натомість кожен елемент масиву містить декілька
символів. Перший символ у "пачці" займає старший
біт елемента масиву. У середовищах, які зберігають пам'ять
слова зі старшим байтом за молодшою адресою (Big Endian,
або формат Motorola), окремі символи зберігаються у
комірках пам'яті у тому ж порядку, у якому вони розташовані у рядку.
Упакований рядок закінчується нульовим символом, і рядок є
доповнюється (нульовими байтами) до кратного числа комірок.

Упакований рядок може містити лише символи з однобайтового набору
набору символів, наприклад, ascii або одного з розширених наборів ascii
відповідно до стандарту ISO 8859.

У рядках можна використовувати екрановані послідовності. Перелік символьних послідовностей див. у розділі
про символьні константи (сторінка 99) для отримання списку екранованих послідовностей.

Існує альтернативний синтаксис для "звичайних рядків". У простому рядку
рядку кожен символ сприймається як є, а екрановані послідовності
не розпізнаються. Прості рядки зручні для зберігання назв файлів/ресурсів, особливо у випадку, коли
ресурсів, особливо у випадку, коли ескейп-символ також використовується як спеціальний символ.
також використовується як спеціальний символ операційною системою
або хост-додатком.

Синтаксис простого рядка складається з символу екранування, за яким слідує
рядок у подвійних лапках. За замовчуванням використовується зворотний слеш ("\")

"escape" символ. Ви не можете вводити екрановані послідовності у
звичайним рядком: усі символи буде сприйнято буквально.

**проста рядкова константа:**

    \"C:\всі мої роботи\роман.rtf"

У наведеному вище прикладі символи "\a" і "\n"
не вказують на екрановані послідовності, а лише на буквені символи
пари "\" і "a" та "\" і "n".

Упакований звичайний рядок має як символ "!", так і символ екранування
перед початковими подвійними лапками. Обидва рядки нижче мають вигляд

**упаковані прості рядки:**

    !\"C:\all my work\novel.rtf"

    \! "C:\всі мої роботи\роман.rtf"

**Константи масиву**

Ряд числових констант між фігурними дужками - це масив констант
константою масиву. Константи масиву можна використовувати для ініціалізації змінних масиву
з (див. стор. 65), а також їх можна передавати як аргументи функції (див. стор. 71).
аргументами функцій (див. сторінку 71).

**Символічні константи

У вихідному файлі оголошуються символічні константи за допомогою інструкцій const та enum
інструкціями const та enum. Ключове слово const оголошує одну константу, а
enum визначає список - зазвичай - послідовних констант, що мають однакове ім'я тегу.

**const** _ідентифікатор = константний вираз_

Створює символічну константу зі значенням константи
у правій частині оператора присвоювання. Константа
можна використовувати в будь-якому місці, де допустимим є буквене число
допустимим (наприклад: у виразах, в оголошеннях масивів і в
директивах типу "#if" і "#assert").

**enum** _name (інкремент) { константний список }_

Інструкція enum створює серію констант зі зростаючими значеннями.
зростаючими значеннями. Список констант - це послідовність ідентифікаторів, розділених комами.
ників, відокремлених комами. Якщо не перевизначено, перша константа списку
списку має значення 0, а кожна наступна константа має
значення попередньої плюс 1.

Як значення константи, так і значення приросту можна
шляхом додавання значення до ідентифікатора константи. Щоб задати значення
значення, використовуйте

ім'я = значення

у списку констант. Щоб задати інкремент, використовуйте

ім'я [ приріст ]

Значення приросту скидається до 1 після кожного оголошення константного символу
у списку констант.

Якщо для константи потрібно задати як приріст, так і значення,
то інкремент (позначення "[. . . ]") повинен передувати значенню (позначення "="
).

Символи у списку констант можуть мати явний тег,
який повинен передувати імені символу.

Токен імені, який слідує за ключовим словом enum, є необов'язковим. Якщо вона
включено, і якщо імена символів не мають явного тегу
це ім'я використовується як ім'я тегу для кожного символу у списку
списку констант. Крім того, команда enum створює додаткову константу
константу з іменем name для імені константи та імені тегу.
Значення останньої константи дорівнює значенню останнього символу у
списку констант плюс значення приросту цієї останньої константи.

Токен інкременту, який слідує за необов'язковим токеном імені, є
також є необов'язковою. Якщо її включено, вона визначає інше правило пост-інкременту
правило після інкременту. За замовчуванням, перерахування збільшує значення кожної успішної константи на 1.
значення кожної вдалої константи на 1, але ви можете вказати інше правило за допомогою синтаксису "(операторна константа)
синтаксисом "(операторна константа)", де оператором має бути +=,

\*= або <<=. Оператор += створює адитивний приріст, оператор

\*= та <<= створюють мультиплікативний приріст. Константа
може бути буквальним значенням або символьною константою. Правило інкременту
слід брати у круглі дужки. Якщо правило приросту не вказано
не вказано, дужки також можна опустити.

Символічна константа, визначена локально, є дійсною у всьому блоці
блоку. Локальна символьна константа не може мати таке саме ім'я як
змінна (локальна або глобальна), функція або інша константа (локальна або
глобальною).

**Наперед визначені константи

| Ім'я та опис
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Розмір комірки в бітах, зазвичай 32.                                                                                                                                                                                                                          |
| cellmax | Найбільше допустиме додатне значення, яке може містити комірка; зазвичай 2147483647.                                                                                                                                                                                       |
| cellmin | Найбільше допустиме від'ємне значення, яке може містити комірка; зазвичай -2147483648.                                                                                                                                                                                      |
| charbits | Розмір упакованого символу у бітах; зазвичай 8.                                                                                                                                                                                                               |
| charmax | Найбільше допустиме значення упакованого символу; зазвичай упакований символ є 8-бітним, тому максимальне допустиме значення дорівнює 255.                                                                                                                                           |
| charmin | Найменше допустиме значення символу, як для упакованих, так і для неупакованих значень; наразі дорівнює нулю (0).                                                                                                                                                              |
| debug | Рівень налагодження: 2, якщо синтаксичний аналізатор створює повну символьну інформацію плюс перевірку меж під час виконання, 1, якщо синтаксичний аналізатор генерує лише перевірку під час виконання (перевірку тверджень і перевірку меж масивів), і 0 (нуль), якщо всю підтримку налагодження і перевірку під час виконання вимкнено. |
| false | 0 (ця константа позначена як bool:)
| \_\_Pawn | Номер версії компілятора пішака у двійково-десятковій системі числення (BCD) - тобто для версії 2.8.1 ця константа дорівнює "0x281".                                                                                                                                      |
| true | 1 (ця константа позначена як bool:) | (ця константа позначена як bool:)
| ucharmax | Найбільше значення розпакованого символу, його значення залежить від розміру комірки. Типовим застосуванням цієї константи є перевірка того, чи є рядок запакованим або розпакованим, див. сторінку 137.                                                                              |

**Імена тегів

Тег складається з ідентифікатора, за яким слідує двокрапка. Між ідентифікатором та двокрапкою може не бути пробілів.

**Заздалегідь визначені імена тегів**

| Ім'я та опис
| ------ | ------------------------------------------------------------------------------------------- |
| bool:  | Для прапорів "true/false". Цей тег мають наперед визначені константи true та false.              |
| Fixed: | Раціональні числа зазвичай мають цю мітку, якщо увімкнено підтримку фіксованої крапки (сторінка 121).    |
| З плаваючою комою: | Раціональні числа зазвичай мають цей тег, якщо увімкнено підтримку плаваючої крапки (сторінка 121). |

---

Необов'язкові крапки з комою: 122`

`Заздалегідь визначені константи: 102`

Раціональні числа також називають "дійсними числами" або "числами з плаваючою комою"

`#pragma rational: 121``.

Синтаксис упакованих та неупакованих літеральних рядків можна поміняти місцями за допомогою директиви "#pragma pack", див. сторінку 121

Приклади: 21, 26`

Приклади: 9, 21`

`Ідентифікатори: 97`.

`Приклади оголошення констант "enum" дивіться на сторінці 68`.

`Дивіться приклад користувацького правила приросту на сторінці 26`.

`Ідентифікатори: 97`.

---

[Повернутися до змісту](00-Contents.md)


