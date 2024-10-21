---
title: Year of 2023
description: 
date: 2023-01-01T19:06:00
lastmod: 
banner: https://preview.redd.it/arqa352ph7x61.jpg?width=960&crop=smart&auto=webp&s=84f9245d607b029667d5bfc4abf36547fc6213de
categories:
  - yearly review
tags: 
---
[Year of 2024](../2024/_index.md) >>  
  
- January  
- February  
- March  
- April  
- May  
- June  
- July  
- August  
- September  
- October  
- November  
- December  
  
## Books Read  
  
```dataview  
LIST WITHOUT ID  
"So far in 2023, I've read " + length(rows) + " books."  
FROM "bookshelf"  
WHERE contains(string(readdates.finished), "2023")  
GROUP BY dateformat(finished, "yyyy")  
```  
  
### Favorites  
  
```dataview  
LIST WITHOUT ID  
title + " (" + author + ")"  
FROM "bookshelf"  
WHERE rating=5 AND contains(string(readdates.finished), "2023")  
```  
  
### All Books  
  
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
const pages = dv.pages('"bookshelf"');  
const expandedPages = dv.array(fullBookList(pages, year));  
  
dv.table(  
	["cover", "title", "author", "series", "read", "rating"],  
	expandedPages.map(b => [  
		"![" + b.cover + "|80](" + b.cover + ")",  
		b.title,  
		b.author,  
		b.series,  
		renderReadDates(b.readdates),  
		"⭐".repeat(b.rating)  
	])  
);  
```  
