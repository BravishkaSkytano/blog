---
title: Read in 2023
id: 202405161050
date: 2024-05-16
modified: 2024-05-19
tags:
  - source/books
draft: false
---
[[50-59 Sources/52 Bookshelf/index|Bookshelf]]

These are the books I’ve read in 2023.

## The Best

- [[Understanding the Faith - Jeff Myers|Understanding the Faith]]
%%
```dataview
LIST WITHOUT ID
title + " (" + author + ")"
FROM "50-59 Sources/51 Bookshelf/books"
WHERE rating=5 AND contains(string(readdates.finished), "2023")
```
%%

## The Rest

%%
```dataviewjs
function renderReadDates(readdates) {
	let str = '';
	str += new Date(readdates.started).toLocaleDateString('en-us', { month:"short", day:"numeric"});
	str += ' - ';
	str += new Date(readdates.finished).toLocaleDateString('en-us', { month:"short", day:"numeric"});
	return str;
}

function fullBookList(dvarr, year) {
	const retArr = [];

    // Get only books read during the specified year
    // But if a book was reread during the year, list it twice
	dvarr.map(b => {
		if(b.readdates) {
			b.readdates.map(d => {
				if(new Date(d.finished).getFullYear() === year) {
					const book = Object.assign({}, b);
					book.readdates = d;
					retArr.push(book);
				}
				return d;
			});
		}
		return b;
	});

    // Sort by date finished
	retArr.sort((a,b) => {
		let ret = 0;
		if(a.readdates.finished.toString() > b.readdates.finished.toString()) {
			ret = 1;
		} else if(a.readdates.finished.toString() < b.readdates.finished.toString()) {
			ret = -1;
		}
		return ret;
	});
	
	return retArr;
}

// Function definitions finished, kick it off here and set your year:

const year = 2023;
const pages = dv.pages('"50-59 Sources/51 Bookshelf/books"');
const expandedPages = dv.array(fullBookList(pages, year));

dv.table(
	["cover", "title", "author", "series", "read", "rating"],
	expandedPages.map(b => [
		"![" + b.cover + "|80](" + b.cover + ")",
		b.title,
		b.author,
		b.series + " #" + b.seriesnumber,
		renderReadDates(b.readdates),
		"⭐".repeat(b.rating)
	])
);
```
%%
