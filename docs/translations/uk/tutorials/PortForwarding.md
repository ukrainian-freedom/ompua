---
назва: Port Forwarding
description: Підручник з переадресації серверних портів.
---

**Ласкаво просимо до підручника з переадресації портів!

Отже, ви потрапили до підручника з переадресації портів, створеного Leopard.

Все, що вам потрібно - це samp-сервер або omp-сервер і роутер. Якщо у вас немає роутера, то вам не потрібно переадресовувати порт!

## Початок

Гаразд, почнемо з того, що знайдемо ваш **шлюз**. Припустимо, що у вас є Vista. Натисніть кнопку «Пуск», клацніть на полі пошуку і введіть **cmd**. Після цього з'явиться чорне вікно. Введіть наступне; **ipconfig**. Зачекайте, поки текст завантажиться, а потім перегляньте його. Продовжуйте пошук, поки не знайдете _**gateway**_, і не закривайте чорну скриньку!

Коли ви його знайдете, відкрийте ваш улюблений веб-браузер. Коли він завантажиться, перейдіть до адресного рядка і введіть значення _**gateway**_ (наприклад: 192.168.0.1/192.168.1.1). Натисніть клавішу Enter.

## Налаштування маршрутизатора

Молодці, ви потрапили на сторінку конфігурації маршрутизатора. Тепер нам залишилося переадресувати порт.

Отже, на цій сторінці є категорія, яка має одну з наступних назв;

- Віртуальний сервер
- Переадресація портів
- Керування портами
- Спільний доступ до додатків
- Все, що містить `port` у назві.

Якщо ви знайшли такий порт, натисніть на нього. Потім натисніть кнопку «Додати новий», «Новий порт» або іншу кнопку, яка перемикає відкриття нового порту.

Введіть наступні дані:

```
Порт: ВАШ_ПОРТ (стандартно: 7777)
Тип порту: UDP
Увімкнено Так
**IP: продовжити 3-й крок**
```

Тепер вам потрібно знати IP-адресу вашого комп'ютера.

## Отримання IP-адреси, продовження

Тепер розгорніть чорний ящик і перегляньте текст ще раз, поки не побачите _IPv4_. Вона має бути у такому форматі: **192.168.0.100**. Скопіюйте його, і все готово! Продовжуйте з інформацією на домашній сторінці роутера. Наприклад, мій ip 192.168.0.100

```
Порт: YOUR_PORT (стандартний: 7777)
Тип порту: UDP
Увімкнено Так
IP: 192.168.0.100
```

І натисніть **зберегти**. Тоді все готово. І! Не забудьте **переключити пропуск у брандмауері Windows**. Це невелика інструкція;

Перейдіть до меню «Пуск», введіть «брандмауер» у полі пошуку і виберіть «Брандмауер Windows». Відкрийте його і натисніть _Змінити параметри_. З'явиться нове вікно. Перейдіть на вкладку _Винятки_, натисніть _Додати порт.._ і заповніть цю інформацію;

```
Назва: SA-MP Server (назвіть його як завгодно)
Номер порту: ВАШ_ПОРТ (стандартно: 7777)
Протокол: UDP
```

Тоді все готово! Натисніть ок і закрийте його. Запустіть сервер і перевірте, чи він працює. Якщо так, перейдіть до свого SA-MP-клієнта і введіть: localhost:YOUR_PORT(стандартний: 7777). Якщо пінг змінився, то ваш сервер працює повністю. Тепер вам просто потрібно зайти на

[WhatIsMyIP.COM](http://whatismyip.com).

## Фініш

Опинившись там, отримайте ip, який відображається на вашому екрані. Знову перейдіть до свого SA-MP-клієнта, додайте цей ip до вибраного і додайте YOUR_PORT (стандартно: 7777) в кінці. Якщо все працює,

**ВІТАЄМО! Ви переадресували порт!


