# Виписки

---

Оператор може займати один або декілька рядків, тоді як один рядок може містити два або
більше операторів.

Оператори керування потоком (if, if-else, for, while, do-while та switch) можуть бути вкладеними.

**Етикетка заяви**

    Мітка складається з ідентифікатора, за яким слідує двокрапка (":").
    Мітка - це "ціль переходу" для оператора goto.

    Кожному оператору може передувати мітка.
    Після мітки має бути оператор; порожній оператор допускається.

    Областю видимості мітки є функція, в якій її оголошено
    (отже, оператор goto не може переходити з поточної функції до іншої функції).

**Складений оператор

    Складений оператор - це послідовність з нуля або більше операторів
    оточених фігурними дужками ({ і }). Після останньої фігурної дужки (}) не повинна стояти крапка з комою.
    Будь-який оператор можна замінити складеним оператором.
    Складений оператор також називають блоком.
    Складений оператор з нульовими операторами є особливим випадком,
    і називається "порожній інструкцією".

**Виразний оператор**

    Будь-який вираз стає оператором, коли до нього додається крапка з комою (";").
    Вираз також стає оператором, якщо після нього у рядку стоїть лише пробіл
    і вираз не може бути продовжений на наступний рядок.

**Порожній оператор

    Порожній оператор не виконує ніяких операцій і складається зі складеного блоку
    складеного блоку з нульовими операторами, тобто складається з лексем "{ }".
    Порожні оператори використовуються в операторах потоку управління
    якщо не виконується жодна дія (наприклад, while (!iskey()) {}) або при визначенні мітки безпосередньо
    перед закриваючою дужкою складеного оператора.
    Порожній оператор не закінчується крапкою з комою.

**твердження** _вираз_.

    Перериває програму з помилкою під час виконання
    якщо вираз обчислюється як логічне значення "false".

**Починається перерва.

    Завершує та виходить з найменшого охоплюючого циклу do,
    for або while з будь-якої точки циклу
    крім логічного кінця. Оператор break переміщує керування програмою
    до наступного оператора за межами циклу.

**Продовжуйте.

    Завершує поточну ітерацію найменшого охоплюючого оператора do,
    for або while і переводить керування програмою на частину умови циклу.
    Якщо інструкція циклу є інструкцією for,
    керування переміщується на третій вираз в інструкції for
    (а потім на другий вираз).

**робити** _висловлювання_ **при цьому** ( _вираз_ )

    Виконує оператор до того, як буде обчислено частину умови (оператор while).
    Оператор повторюється, поки умова логічно "істинна".
    Оператор виконується хоча б один раз.

**вихід** _вираз_.

    Перервати виконання програми. Вираз не є обов'язковим, але він повинен починатися
    у тому ж рядку, що й інструкція виходу, якщо вона присутня.
    Інструкція виходу повертає значення виразу (плюс тег виразу)
    або нуль, якщо вираз виходу відсутній.
    Значення і призначення кодів виходу визначається реалізацією.

**for** ( _вираз 1_ ; _вираз 2_ ; _вираз 3_ ) _вираз_ ) _висловлювання_

    Усі три вирази є необов'язковими.

    *вираз 1*
        Обчислюється лише один раз, перед входом у цикл.
        Цей вираз можна використовувати для ініціалізації змінної.
        Цей вираз також може містити оголошення змінної, використовуючи синтаксис new.
        Змінна, оголошена у цьому виразі, існує лише у циклі for.

    *вираз* *вираз* *вираз* *вираз* *вираз* *вираз
        Обчислюється перед кожною ітерацією циклу і
        завершує цикл, якщо результат виразу є логічно "хибним".
        Якщо його опустити, результат виразу 2 вважається логічно "істинним".

    *вираз 3*
        Обчислюється після кожного виконання оператора.
        Управління програмою переходить з виразу 3 на вираз 2
        для наступної (умовної) ітерації циклу.
        Оператор for( ; ; ) еквівалентний оператору while (true).

**goto** _label_

    Переміщує управління програмою (безумовно) на оператор, який слідує за вказаною міткою.
    Мітка повинна знаходитися у тій самій функції, що й оператор
    goto (оператор goto не може вийти за межі функції).

**if** ( _вираз_ ) _оператор 1_ **else** _оператор 2_

    Виконує оператор 1, якщо вираз має логічне значення "істина".
    Оператор else в інструкції if є необов'язковим.
    Якщо вираз має логічне значення "хибне" і існує інструкція else,
    виконується оператор, пов'язаний з інструкцією else (оператор 2).

    Коли інструкції if є вкладеними і присутні оператори else,
    заданий else асоціюється з найближчим попереднім оператором if у тому ж блоці.

**повернення** _вираз

    Завершує поточну функцію і переміщує управління програмою
    на оператор, наступний за викликаючим.
    Значення виразу повертається як результат функції.
    Вираз може бути змінною масиву або літеральним масивом.

    Вираз не є обов'язковим, але він повинен починатися з того ж рядка
    з оператором return, якщо він присутній.
    Якщо вираз відсутній, значення функції дорівнює нулю.

**спати** _вираз_.

    Перервати програму, але залишити її у стані, придатному для повторного запуску.
    Вираз не є обов'язковим. Якщо його включено, інструкція sleep
    повертає значення виразу (плюс тег виразу)
    програмі-хосту. Значення та призначення
    кодів/міток виходу визначається реалізацією;
    як правило, програма використовує інструкцію sleep, щоб забезпечити
    полегшеної багатозадачності декількох паралельних програм-пішаків,
    або для реалізації "прихованих" функцій.

**state** ( _вираз_ ) **automaton** :_ім'я_

    Змінює поточний стан у вказаному автоматі.
    Вираз у дужках не є обов'язковим; якщо його немає,
    дужки також слід опустити.
    Ім'я автомата також не є обов'язковим,
    при зміні стану автомата за замовчуванням, анонімного, автомата;
    якщо ім'я автомата відсутнє, двокрапка (":") також не ставиться.

    Нижче наведено два приклади безумовної зміни стану. Перший - для автомата за замовчуванням:

```

державне рукостискання

```

    а другий - для конкретного автомата:

```

state gps:handshake

```

    Часто зміна стану залежить від параметрів події або стану автомата в цілому.
    Оскільки умовні зміни стану відбуваються так часто,
    умова може міститися у самій інструкції стану.
    ∗ Умова слідує за ключовим словом state у круглих дужках.
    Стан зміниться лише тоді, коли умова буде логічно "істинною".

    Інструкція state викликає неявний виклик функції входу
    для вказаного стану - якщо така функція існує.

**switch** ( _вираз_ ) { _список_ регістрів_ }

    Передає керування на різні оператори в тілі перемикача залежно від
    від значення виразу switch.
    Тіло оператора switch є складеним оператором,
    який містить ряд "операторів переходу".

    Кожне "case clause" починається з ключового слова case, за яким слідує список констант і один оператор.
    Список констант - це ряд виразів, розділених комами,
    кожен з яких обчислює константне значення.
    Список констант закінчується двокрапкою. Щоб вказати "діапазон" у списку констант
    відокремте нижню і верхню межі діапазону подвійною крапкою ("..").
    Приклад діапазону "case 1..9:".

    Оператор switch переводить керування на "умовне речення", якщо значення одного з виразів
    у списку констант дорівнює результату виразу switch.

    "Елемент за замовчуванням" складається з ключового слова default і двокрапки.
    Вираз за замовчуванням не є обов'язковим, але якщо його включено, він має бути останнім у тілі перемикача.
    Оператор switch переводить керування на "умову за замовчуванням" виконується
    якщо жоден з операторів case не збігається з результатом виразу.

    Приклад:

---

###### ∗ Альтернативою є складання безумовних змін стану в загальну конструкцію if-else.

---

```c

switch (weekday(12,31,1999))
{
    case 0, 1: /* 0 == субота, 1 == неділя */
        print("weekend")
    case 2
        print("понеділок")
    case 3
        print("вівторок")
    case 4:
        print("середа")
    case 5:
        print("четвер")
    case 6:
        print("Friday")
    за замовчуванням:
        print("невірний день тижня")
}

```

**при цьому** ( _вираз_ ) _вираз_ ) _висловлювання_

    Обчислює вираз і виконує оператор
    якщо результат виразу має логічне значення "істина".
    Після виконання оператора управління програмою знову повертається до виразу.
    Таким чином, оператор виконується доти, доки вираз є істинним.

---

`Ідентифікатори: 97`.

Приклад: 11 (стверджувати)`.

Приклад: 21 (перерва)`.

`Приклад: 27 (do while)`.

Приклади: 9, 11, 21 (для)` `Приклади: 9, 11, 21 (для)

Змінні декларації: 62 (за)

`Приклад: 7 (якщо інакше)`.

Приклади: 11, 21 (return)` `Приклади: 11, 21 (return)`

Приклади умовних змін станів (автомат станів) див. на сторінці 40.

"вхідні" функції: 44 (автомат)

Приклади: 7, 21, 26 (while)` `Приклади: 7, 21, 26 (while)`

---

[Повернутися до змісту](00-Contents.md)


