---
title: 51 Bookshelf
id: 202405161031
date: 2024-05-16
modified: 2024-05-22
tags:
  - 📥/🌲
  - source/books
draft: false
---

## Currently Reading

- [[Introduction to Philosophy by Norman L Geisler and Paul D Feinberg|Introduction to Philosophy]] ![progress-bar](https://progress-bar.dev/10)
- A Villianess for the Tyrant
    - Started: 
    - [Novel](https://tapas.io/series/a-villainess-for-the-tyrant-novel/info)
    - [Comic](https://tapas.io/series/a-villainess-for-the-tyrant/info)
- [Raising My Fiancée with Money](https://tapas.io/series/raising-my-fiance-with-money/info)
    - Started:
- Revolutionary Princess Eve
    - Started:
    - [Comic](https://tapas.io/series/revolutionary-princess-eve/info)
    - [Novel](https://tapas.io/series/revolutionary-princess-eve-novel/info)
- [The Vampire’s Consort](https://tapas.io/series/the-vampires-consort-novel/info), ch 15 of 177
    - Started:
- [Going Rogue in the Apocalypse](https://tapas.io/series/going-rogue-in-the-apocalypse/info), ch 17 of 105
    - Started
- [Winter Wolf](https://tapas.io/series/winter-wolf/info)
    - Started
- [The Bird Empress](https://tapas.io/series/the-bird-empress/info)
- [My K-Pop Secret](https://tapas.io/series/my-k-pop-secret-novel/info)
- [Daisy: How to Become the Duke’s Fiancee](https://tapas.io/series/daisy-how-to-become-the-dukes-fiancee-novel/info)
- [I Made A Deal with the Devil](https://tapas.io/series/I-Made-a-Deal-with-the-Devil-Novel/info)
- [Positively Yours](https://tapas.io/series/positively-yours/info)
- [A Monster Hunter Becomes A Princess](https://tapas.io/series/a-monster-hunter-becomes-a-princess/info)

%%
```dataview
TABLE WITHOUT ID
"![cover|80](" + cover + ")" AS "Cover",
title AS "Title",
author AS "Author(s)", series + " #" + seriesnumber as "Series"
FROM "50-59 Sources/51 Bookshelf/books"
WHERE shelf="reading"
SORT title ASC
```
%%

## Stopped Reading

%%
```dataview
TABLE WITHOUT ID
"![cover|80](" + cover + ")" AS "Cover",
title AS "Title",
author AS "Author(s)", series + " #" + seriesnumber as "Series"
FROM "50-59 Sources/51 Bookshelf/books"
WHERE shelf="stopped"
SORT title ASC
```
%%

## To Be Read

- [Becoming the Alpha’s Surrogate](https://tapas.io/series/becoming-the-alphas-surrogate-novel)

%%
```dataview
TABLE WITHOUT ID
"![cover|80](" + cover + ")" AS "Cover",
title AS "Title",
author AS "Author(s)", series + " #" + seriesnumber as "Series"
FROM "50-59 Sources/51 Bookshelf/books"
WHERE shelf="toread"
SORT title ASC
```
%%
