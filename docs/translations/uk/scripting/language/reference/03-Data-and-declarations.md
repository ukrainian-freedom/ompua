# Дані та декларації

---

PAWN - це безтипова мова. Усі елементи даних мають тип "комірка", а комірка
може містити ціле число. Розмір комірки (у байтах) залежить від системи
-зазвичай комірка має розмір 32 біти.

Ключове слово new оголошує нову змінну. Для спеціальних оголошень ключове слово
new замінюється на static, public або stock (див. нижче). Просте оголошення змінної
створює змінну, яка займає одну "комірку" пам'яті даних. Якщо тільки
її явно не ініціалізовано, значення нової змінної дорівнює нулю.

Може виникнути оголошення змінної:

- у будь-якій позиції, де оператор буде дійсним -локальні змінні;

- у будь-якій позиції, де оголошення функції (власні оголошення функцій) або реалізація функції були б дійсними - глобальні змінні;

- у першому виразі інструкції циклу for - також локальні змінні.

**Місцеві декларації**

Локальне оголошення з'являється всередині складеного оператора. Доступ до локальної змінної можна отримати лише зі складеного оператора та з вкладених складених операторів. Оголошення у першому виразі інструкції циклу for також є локальним оголошенням.

**Глобальні декларації

Глобальне оголошення з'являється за межами функції, а глобальна змінна доступна для будь-якої функції. Глобальні об'єкти даних можна ініціалізувати тільки константними виразами.

---

Цикл "for": 113`

Складений вираз: 112`

---

### - Оголошення змінних стану

Змінна стану - це глобальна змінна, в кінці якої додається класифікатор станів.
Область видимості і час життя змінної обмежені станами, які
переліченими у класифікаторі.

Змінні стану не можуть бути ініціалізовані. На відміну від звичайних змінних (які
дорівнюють нулю після оголошення, якщо їх явно не ініціалізовано), змінні стану
мають невизначене значення після оголошення і після першого введення стану у їхньому
класифікатора. Зазвичай, для правильної ініціалізації змінної стану використовують функцію(ї) введення стану
належним чином ініціалізувати змінну стану.

### - Статичні локальні оголошення

Локальна змінна знищується, коли виконання виходить зі складеного блоку
в якому змінна була створена. Локальні змінні у функції
існують тільки під час виконання цієї функції. Кожен новий запуск функції створює
та ініціалізує нові локальні змінні. Якщо локальну змінну оголошено з ключовим словом
оголошено з ключовим словом static, а не new, змінна залишається існуючою після
після завершення роботи функції. Це означає, що статичні локальні змінні забезпечують приватне,
постійне сховище, доступне лише з однієї функції (або складеного
блоку). Як і глобальні змінні, статичні локальні змінні можна ініціалізувати лише
константними виразами.

### - Статичні глобальні оголошення

Статична глобальна змінна поводиться так само, як і звичайна глобальна змінна, за винятком того, що
що її область видимості обмежується файлом, у якому знаходиться оголошення. Щоб
оголосити глобальну змінну статичною, замініть ключове слово new на static.

### - Біржові декларації

Глобальна змінна може бути оголошена як "запас". Запасне оголошення - це оголошення, яке
синтаксичний аналізатор може видалити або проігнорувати, якщо виявиться, що змінна не використовується у програмі.

Змінні запасу корисні в поєднанні з функціями запасу. Загальнодоступна змінна може бути оголошена як "запасна".
загальнодоступні змінні також можуть бути оголошені як "запаси" - оголошення загальнодоступних змінних як "загальнодоступних
stock" дає змогу оголосити усі загальнодоступні змінні, які надаються хост-програмою, у файлі включення, і лише ті з них, які
у файлі включення, а у P-файлі - лише ті змінні, які фактично використовуються скриптом.
використовуються скриптом, і лише ті змінні, які фактично використовуються у файлі P-коду.

### - Публічні декларації

Глобальні "прості" змінні (без масивів) можуть бути оголошені "загальнодоступними" двома способами:

- оголошуйте змінну з ключовим словом public замість new;

- починайте назву змінної з символу "@".

Загальнодоступні змінні поводяться так само, як і глобальні, з тією лише різницею, що хост-програма
програма також може читати і записувати загальнодоступні змінні. До (звичайної) глобальної змінної
може бути доступна лише функціям вашого скрипту - хост-програма
програма не знає про них. Таким чином, головна програма може вимагати, щоб ви оголосили змінну з певним ім'ям
змінну з певним іменем як "загальнодоступну" для спеціальних цілей - наприклад, для
наприклад, номер останньої помилки або загальний стан програми.

---

Символічні константи: 101`

`Функції акцій: 84`

---

- Постійні змінні

Іноді зручно мати можливість створити змінну, яка ініціалізується
один раз і яку не можна змінювати. Така змінна поводиться подібно до символьної
константа, але це все одно змінна.

Щоб оголосити константну змінну, вставте ключове слово const між ключовим словом
з якого починається оголошення змінної - new, static, public або stock - і
іменем змінної.

Приклади:

```c

new const address[4] = { 192, 0, 168, 66 }

public const status /* ініціалізовано нулем */

```

Три типові ситуації, в яких можна використовувати константну змінну:

- Створити константу "масиву"; символічні константи не можна індексувати.

- Для загальнодоступної змінної, яка має бути встановлена хост-програмою, і тільки нею. Про загальнодоступні змінні див. попередній розділ.

- Окремим випадком є позначення аргументів масиву у функціях як const. Аргументи-масиви завжди передаються за посиланням, оголошення їх як const захищає від ненавмисної модифікації. Приклад аргументів константних функцій наведено на сторінці 72.

---

`Див. також "Багатовимірні масиви", стор. 66`.

---

### - Масиви (одновимірні)

Синтаксис name[constant] оголошує ім'я масивом "константних" ел
де кожен елемент є окремою коміркою. Ім'я є заповнювачем імені ідентифікатора
ідентифікатора на ваш вибір, а константа є додатним ненульовим значенням;
константа може бути відсутня. Якщо між дужками немає ніякого значення, то кількість елементів дорівнює
елементів дорівнює кількості ініціалізаторів
-див. приклад нижче.

Діапазон індексів масиву є "нульовим", що означає, що перший елемент знаходиться за адресою
name[0], а останній елемент - name[constant-1].

### - Ініціалізація

Об'єкти даних можуть бути ініціалізовані при їх оголошенні. Ініціалізатор
глобального об'єкту даних повинен бути константою. Масиви, глобальні або локальні, також повинні бути
ініціалізовані константами.

Неініціалізовані дані за замовчуванням дорівнюють нулю.
Приклади:

Лістинг: хороша декларація

```c

new i = 1
new j /* j дорівнює нулю */
new k = 'a' /* k має код символу для літери 'a' */

new a[] = {1,4,9,16,25}                 /* a містить 5 елементів */
new s1[20] = {'a','b'}                  /* інші 18 елементів дорівнюють 0 */

new s2[] = "Hello world..."             /* розпакований рядок */

```

Приклади недійсних декларацій:

Перелік: погані декларації

```c

new c[3] = 4 /* масиву не можна присвоювати значення */
new i = "Good-bye" /* тільки масив може містити рядок */
new q[] /* невідомий розмір масиву */
new p[2] = { i + j, k - 3 }             /* ініціалізатори масиву повинні бути константами */

```

---

`Константи: 98

---

### - Прогресивні ініціалізатори для масивів

Оператор еліпсису продовжує послідовність ініціалізації констант
констант для масиву, виходячи з двох останніх ініціалізованих елементів. Оператор еліпсису
(три крапки, або "...") ініціалізує масив до оголошеного розміру.

Приклади:

Лістинг: ініціалізатори масивів

```c

new a[10] = { 1, ... }                  /* встановлює усі десять елементів в 1 */
new b[10] = { 1, 2, ... }               /* встановлює: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 */
new c[8] = { 1, 2, 40, 50, ... }        /* набори: 1, 2, 40, 50, 60, 70, 80, 90 */
new d[10] = { 10, 9, ... }              /* набори: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 */ ** набори: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

```

### - ініціалізація масивів та зчислення

Розмір масиву може бути задано константою, яка представляє собою
зчислення: прикладом цього є приклад програми "черга пріоритетів" на сторінці 21. Коли
окремі поля зчислення мають розмір, пов'язані з ними елементи масиву
іноді інтерпретуються як підмасиви. Приклад такої поведінки,
див. у програмі rpn calculator на сторінці 30.

Синтаксис підмасиву застосовується також для ініціалізації "перерахованого"
масиву. Знову звертаючись до прикладу програми "черга пріоритетів", для ініціалізації масиву
масиву "повідомлення" з фіксованими значеннями, синтаксис має вигляд

Лістинг: ініціалізатори масивів

```c

enum message /* оголошення, скопійоване з "QUEUE.P" */
    {
        text[40 char],
        пріоритет
    }

new msg[message] = { !"new message", 1 }

```

Ініціалізатор складається з рядка (літерального масиву) і значення; вони потрапляють
у поля "text" та "priority" відповідно.

### - Багатовимірні масиви

Багатовимірні масиви - це масиви, які містять посилання на підмасиви*.
Тобто, двовимірний масив - це "масив одновимірних масивів".
Нижче наведено кілька прикладів оголошення двовимірних масивів.

Список: Двовимірні масиви

```c

new a[4][3]
new b[3][2] = { { 1, 2 }, { 3, 4 }, { 5, 6 } }
new c[3][3] = { { 1 }, { 2, ...}, { 3, 4, ... } }
new d[2][5] = { !"agreement", !"dispute" }
new e[2][] = { "OK", "Cancel" }
new f[][] = { "OK", "Скасувати" }

```

---

###### ∗ Поточна реалізація компілятора Pawn підтримує лише масиви до двох вимірів

---

Як показують останні два оголошення (змінні "e" та "f"), кінцевий розмір масиву
масиву може мати невизначену довжину, у цьому випадку довжина кожного
підмасиву визначається з відповідного ініціалізатора. Кожен підмасив може мати
різний розмір; у цьому прикладі "e[1][5]" містить літеру "l"
зі слова "Cancel", але "e[0][5]" є недійсним, оскільки довжина підмасиву
підмасиву "e[0]" складає лише три комірки (що містять літери "O", "K" та
нульовий термінатор).

Різниця між оголошеннями для масивів "e" та "f" полягає в тому, що в оголошенні we
дозволимо компілятору підрахувати кількість ініціалізаторів для головного виміру -
"sizeof f" дорівнює 2, як і "sizeof e" (див. наступний розділ про оператор sizeof).

### - Масиви та оператор sizeof

Оператор sizeof повертає розмір змінної в "елементах". Для простої
(не складеної) змінної результат sizeof завжди дорівнює 1, оскільки елемент
це комірка для простої змінної.

Масив з одним виміром містить кількість комірок, а оператор sizeof
повертає це число. Отже, у фрагменті нижче на екран буде виведено "5", тому що масив "msg" містить чотири символи
оскільки масив "msg" містить чотири символи (кожен в одній комірці) плюс нуль-термінатор:

Лістинг: оператор sizeof

```c

new msg[] = "Help"
printf("%d", sizeof msg);

```

Для багатовимірних масивів оператор sizeof може повертати кількість
елементів у кожному вимірі. Для останнього (молодшого) виміру елемент
знову буде коміркою, але для основних вимірів елемент буде підмасивом.
У наведеному нижче фрагменті коду зверніть увагу, що синтаксис sizeof matrix посилається
на головний вимір двовимірного масиву, а синтаксис sizeof
matrix[] відноситься до молодшого виміру масиву. Значення, які
виводяться у цьому фрагменті - 3 і 2 (для головного і другорядного вимірів відповідно):

Лістинг: оператор sizeof та багатовимірні масиви

```c

new matrix[3][2] = { { 1, 2 }, { 3, 4 }, { 5, 6 } }
printf("%d %d", розмір матриці, розмір матриці[]);

```

Застосування оператора sizeof до багатовимірних масивів особливо зручно, коли він використовується як значення за замовчуванням для аргументів функції.

---

`Аргументи функцій за замовчуванням та sizeof: 77`

---

### - Імена тегів

Тег - це мітка, яка позначає мету - або значення - змінної,
константи або результату функції. Мітки не є обов'язковими, їх єдине призначення полягає у тому, щоб
уможливити ефективнішу перевірку на помилки під час компіляції операндів у виразах, аргументів функцій та індексів масивів.
аргументів функцій та індексів масивів.

Тег складається з назви символу, за якою слідує двокрапка; він має такий самий синтаксис, як і мітка. Тег передує
імені символу змінної, константи або функції.

У присвоюванні можна позначати лише праву частину знаку "=".
Приклади допустимих визначень змінних та констант з тегами наведено нижче:

Лістинг: назви тегів

```c

new bool:flag = true /* "flag" може мати тільки значення "true" або "false" */.

const error:success = 0
const error:fatal = 1
const error:nonfatal = 2

error:errno = fatal

```

Послідовність констант success, fatal і nonfatal можна було б більш
зручніше оголосити за допомогою інструкції перечислення, як показано нижче.  
Наведена нижче інструкція перечислення створює чотири константи: success, fatal, non-
fatal і error, усі з тегом error.

Лістинг: перерахування

```c

enum error {
    success,
    fatal,
    non-fatal,
}

```

Типове використання "мічених" зчислень - у поєднанні з масивами. Якщо кожне поле
масиву має окреме призначення, ви можете використовувати теговане зчислення для оголошення розміру
масиву і додати перевірку тегів до використання масиву за один крок:

Лістинг: перерахування та масиви

```c

enum rectangle
{
    left,
    top,
    right,
    нижній
}

new my_rect[rectangle] /* масив оголошено як такий, що має 4 комірки */

my_rect[left] = 10
my_rect[top] = 5
my_rect[right] = 30
my_rect[bottom] = 12

for (new i = 0; rectangle:i < rectangle; ++i)
    my_rect[rectangle:i] *= 2

```

Після оголошення "my_rect" вище, ви можете отримати доступ до другого поля
my_rect за допомогою "my_rect[top]", але якщо вказати "my_rect[1]", синтаксичний аналізатор видасть
діагностику (попередження або повідомлення про помилку). Перевизначення тегу (або приведення тегу) пристосовує
функцію, константу або змінну до потрібного імені тегу. Цикл for на рівні
у двох останніх рядках попереднього прикладу показує це: змінна циклу i
є звичайною коміркою без тегів, і її потрібно привести до прямокутника тегів, перш ніж використовувати її
як індекс у масиві my_rect. Зверніть увагу, що конструкція перечислення створила
і константу, і тег з іменем "rectangle".

Назви тегів, запроваджених до цього часу, починаються з малої літери; це "слабкі"
мітки. Назви тегів, які починаються з великої літери, є "сильними" тегами. Різниця між
різниця між слабкими і сильними тегами полягає у тому, що слабкі теги можуть, за певних обставин, неявно скидатися пішаками.
парсер може неявно відкидати слабкі теґи, так що слабкий теґований вираз стає нетеґованим.
вираз стає виразом без тегів. Механізм перевірки тегів перевіряє наступні ситуації:

- Коли вирази з обох боків бінарного оператора мають різні теги, або коли один з виразів позначено тегом, а інший ні, компілятор видає діагностику "невідповідність тегів". У цій ситуації немає різниці між слабкими та сильними тегами.

- Для оператора присвоювання існує особливий випадок: компілятор видає діагностичне повідомлення, якщо змінна в лівій частині оператора присвоювання має мітку, а вираз у правій частині або має іншу мітку, або не має мітки. Однак, якщо змінна зліва від оператора присвоювання не має мітки, вона приймає вираз (у правій частині) зі слабкою міткою. Іншими словами, слабкий тег опускається при присвоюванні, коли значення l не позначено.

- Передача аргументів у функції відбувається за правилами присвоювання. Компілятор видає діагностику, коли формальний параметр (у визначенні функції) має тег, а фактичний параметр (у виклику функції) або не має тегу, або має інший тег. Однак, якщо формальний параметр не позначено тегом, він також приймає параметр з будь-яким слабким тегом.

- Масив може вказувати тег для кожного виміру, див. приклад "my_rect" вище. Перевірка тегів індексів масиву відбувається за правилом перевірки тегів бінарних операторів: немає різниці між слабкими та сильними тегами.

---

`Синтаксис мітки: 112`

Оператор перебору: 101`

`"lvalue": змінна зліва у присвоюванні, див. сторінку 104`.

---

[Повернутися до змісту](00-Contents.md)
