---
title: Tips for Hugo
description: 
date: 2024-10-18T16:54:59
lastmod: 2024-10-20T23:43:32
banner: 
categories: 
tags: 
share: false
---
## Content Management  
  
### Sections  
  
Sections are top-level directories and directories with an `_index.md` file. These apply the `list.html` layout, which only outputs the frontmatter the `_index.md` file itself but not the contents.  
  
## Shortcodes  
  
[Shortcodes | Hugo](https://gohugo.io/content-management/shortcodes/#embedded-shortcodes)  
  
`{{< figure src="elephant.jpg" title="An elephant at sunset" >}}`  
  
`{{< instagram POST_ID >}}`  
  
`{{< twitter user="USER_ID" id="TWEET_ID" >}}`  
  
`{{< vimeo VIDEO_ID >}}`  
  
`{{< youtube VIDEO_ID >}}`  
  
### Specific for Stack Theme  
  
`{{< video VIDEO_URL >}}`  
  
`{{< video src="VIDEO_URL" autoplay="true" poster="./video-poster.png" >}}`  
  
```  
{{< quote author="A famous person" source="The book they wrote" url="https://en.wikipedia.org/wiki/Book">}}  
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  
{{< /quote >}}  
```  
