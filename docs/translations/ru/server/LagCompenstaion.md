---
title: "Компенсация лагов"
descripion: Описание учитывания (компенсации) лагов.
---

Компенсация лагов для выстреленных пуль включена по умолчанию, начиная с серверной версии SA-MP 0.3z. Статус может быть изменён в параметре `lagcompmode` в [server.cfg](server.cfg). Установив настройку на 0, это отключит лагокомпенсацию полностью и игроки будут вынуждены стрелять на упреждение при лагах, а не по скину цели.

Отключение компенсации лагов приведёт к прекращению срабатывания коллбэка [OnPlayerWeaponShot](../callbacks/OnPlayerWeaponShot) при стрельбе.

Данная настройка может быть изменена только в [server.cfg](server.cfg).