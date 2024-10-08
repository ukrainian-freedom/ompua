# Передмова

---

"pawn" - це проста, безтипова, 32-розрядна "скриптова" мова з C-подібним синтаксисом.
Швидкість виконання, стабільність, простота і невеликий розмір були важливими.
дизайн
критеріями як для мови, так і для інтерпретатора/абстрактної машини, на якій працює
на якій працює програма-пішак.

Додаток або інструмент не може робити або бути всім для всіх користувачів.  
Це не

інших програмних систем, це також пояснює наявність широких конфігураційних
опцій конфігурації, макросів та скриптових мов у програмах. Мої власні програми
містили різноманітні маленькі мови; більшість з них були дуже простими, деякі були
широкі. . . і більшість потреб можна було вирішити за допомогою загальної
мова
мовою загального призначення з бібліотекою спеціального призначення. Отже, пішак.

Мова пішаків була розроблена як гнучка мова для маніпулювання об'єктами в головному додатку.
об'єктами у хост-додатку. Інструментарій (компілятор, абстрактна машина)
були
написані так, щоб їх можна було легко розширювати і вони працювали на різних
програмне
програмно-апаратних архітектурах.

## ♦

pawn є нащадком оригінального Small C Рона Кейна та Джеймса Хендрікса,
яка в свою чергу була підмножиною C. Деякі з модифікацій, які я зробив у
Small C, наприклад, видалення системи типів та заміна вказівників на
посиланнями, були настільки фундаментальними, що я навряд чи міг би назвати свою мову "підмножиною

"С" або "діалекту С" більше не існує. Тому я прибрав "С" з назви
і використовував назву "малий" для назви мови в моїй публікації в
Dr. Dobb's Journal і в наступні роки. Під час розробки та підтримки
продукту, я отримав багато запитів на зміни. Однією з найпоширеніших
змін було використання іншої назви мови - searching - для пошуку
інформації про малу скриптову мову в Інтернеті був ускладнений
через те, що слово "малий" було дуже поширеним. Зміна назви відбулася разом
зі значною зміною в мові: підтримка "станів" (і державних
машин).

Я в боргу перед Роном Кейном і Джеймсом Гендріксом (а віднедавна і перед Енді Юеном), а також перед журналом Dr.
Юену), а також "Журналу доктора Добба" за те, що вони дали поштовх цій справі. Хоча я, мабуть.
торкався майже кожного рядка оригінального коду кілька разів, витоки Small
C все ще чітко простежується.

## ♦

---

Детальний трактат про цілі проєктування та компроміси міститься в додатку С; тут
Я хотів би підсумувати кілька ключових моментів. Як було написано в попередньому пункті
графіках, pawn призначена для кастомізації додатків (шляхом написання скриптів), а не для написання додатків.
pawn слабкий у структуруванні даних, тому що pawn-програми призначені для маніпулювання об'єктами
призначені для маніпулювання об'єктами (текстом, спрайтами, потоками, запитами, ... ) у
хост-додатку
хост-додатку, але пішаковій програмі навмисно відмовлено у прямому доступі до
до будь-яких даних за межами своєї абстрактної машини. Єдиний спосіб, яким піша програма
маніпулювати об'єктами у головній програмі - це виклик підпрограм, так званих "власних функцій".
так звані "власні функції", які надає хост-програма.

pawn є гнучкою у цій ключовій області: виклик функцій. pawn підтримує стандартні значення за замовчуванням
для будь-якого з аргументів функції (не лише для останнього),
виклик за посиланням
а також виклик за значенням, "іменовані" та "позиційні" аргументи функції.
pawn не має механізму "перевірки типів", оскільки є безтиповою мовою.
безтипова мова, але вона пропонує натомість "перевірку класифікації".
перевірку"
механізм "перевірки класифікації", який називається "тегами". Система тегів особливо зручна для аргументів функцій
аргументів, оскільки кожен аргумент може містити декілька допустимих тегів.

а в їхньому поєднанні. Для пішака, я вважаю, що комбінація іменованих аргументів, яка дозволяє задавати аргументи функції за замовчуванням, є
guments - що дозволяє вам вказувати аргументи функції у довільному порядку, та default
значень за замовчуванням, що дозволяє пропустити вказівку аргументів, в яких ви не розбираєтесь, - дуже добре поєднуються.
поєднуються у зручний та "описовий" спосіб виклику (нативних) функцій для маніпулювання об'єктами.
функції для маніпулювання об'єктами у хост-додатку.

---

[Повернутися до змісту](00-Contents.md)
