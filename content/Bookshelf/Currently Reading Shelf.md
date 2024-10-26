```dataview  
LIST  
"![cover|80](" + cover + ")" AS "Cover",  
link(file.link, title) AS "Title",  
author AS "Author", series AS "Series"  
FROM #book  
WHERE shelf="reading"  
SORT started ASC  
```