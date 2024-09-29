---
заголовок: Відкриті прапори SQLite
description: Визначення відкритих прапорів SQLite.
---

:::note

Ці прапори використовуються [DB_Open](../functions/db_open).

:::

| Визначення | Опис
|---------------------------|---------------|
| UNKNOWN_SQLITE_OPEN
| SQLITE_OPEN_READONLY
| SQLITE_OPEN_READWRITE
| SQLITE_OPEN_CREATE
| SQLITE_OPEN_DELETEONCLOSE | Потрібна VFS. |
| SQLITE_OPEN_EXCLUSIVE | Потрібна VFS. |
| SQLITE_OPEN_AUTOPROXY | Потрібен VFS. |
| SQLITE_OPEN_URI
| SQLITE_OPEN_MEMORY
| SQLITE_OPEN_MAIN_DB | Потрібен VFS. |
| SQLITE_OPEN_TEMP_DB | Потрібен VFS. |
| SQLITE_OPEN_TRANSIENT_DB | Потрібен VFS. |
| SQLITE_OPEN_MAIN_JOURNAL | Потрібен VFS. |
| SQLITE_OPEN_TEMP_JOURNAL | Потрібен VFS. |
| SQLITE_OPEN_SUBJOURNAL | Потрібен VFS. |
| SQLITE_OPEN_SUPER_JOURNAL | Потрібен VFS. |
| SQLITE_OPEN_NOMUTEX
| SQLITE_OPEN_FULLMUTEX
| SQLITE_OPEN_SHAREDCACHE
| SQLITE_OPEN_PRIVATECACHE
| SQLITE_OPEN_WAL | Потрібен VFS. |
| SQLITE_OPEN_NOFOLLOW
| SQLITE_OPEN_EXRESCODE

:::примітка

Дізнатися про VFS можна на сторінці https://www.sqlite.org/c3ref/vfs.html.

:::


