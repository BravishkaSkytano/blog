---
title: Series MOC
id: 202405161117
date: 2024-05-16
modified: 2024-05-19
tags:
  - 📥/🌲
  - source/books
draft: false
---
[[50-59 Sources/52 Bookshelf/index|Bookshelf]]

- [[Understanding the Faith]]
	- [[Understanding the Faith - Jeff Myers|Understanding the Faith]]

%%
```dataviewjs
let groups = dv.pages('"50-59 Sources/51 Bookshelf/books"')
	.filter(b => { // Only get books belonging to series
	    let ret = true;
	    if(!b.series) {
	        ret = false;
	    }
	    if(b.shelf !== 'read') {
	        ret = false;
	    }
	    return ret;
	 })
	.groupBy(b => b.series)
	.sort(b => b.series);

for(let group of groups) {
    let rows = group.rows.sort(b => b.seriesnumber, 'asc')
        .map(b => `<img src="${b.cover}" style="height: 160px; margin-right: 6px; margin-bottom: 6px; border-radius: 4px;" />`)
        .join("");
    let grouplength = group.rows.length;
	group.average = group.rows.array().reduce((acc, b) => { // Calculate average rating for books which have been rated
	    if(b.rating) {
			acc += b.rating;
		} else {
			grouplength--;
		}
		return acc;
	}, 0) / grouplength;
	group.average = Math.round(group.average*100) / 100
	dv.header(3, `${group.key} (${group.average})`)
    dv.el('div', rows);
}
```
%%