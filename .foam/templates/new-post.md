---
foam_template:
  name: New Post
  description: Creates a new blog post using Jekyll's filename format
  filepath: '_posts\\$FOAM_DATE_YEAR-$FOAM_DATE_MONTH-$FOAM_DATE_DATE-$FOAM_SLUG.md'
---

---
date: $FOAM_DATE_YEAR-$FOAM_DATE_MONTH-$FOAM_DATE_DATE
category: ${1|devotionals,poetry,rants,history,reviews|}
tags: 
---
# $FOAM_TITLE
