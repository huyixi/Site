---
title: My-New-Website
date: 2023-01-02T00:00:00+08:00
category: [Blog]
tags: []
draft: false
---

后端使用 Strapi ，前端使用 Next.js, tailwindcss 编写界面

### Strapi 遇到的一些问题

- 内容发布后需要先授予权限才能使用 api 访问

- 访问文章的媒体资源时或更深层次需要添加后缀 ?population=*

- 如果使用组件管理内容资源，无法通过一级 api 获取数据

- 无法通过 Github 在不同电脑上同步数据库

  通过数据库同步工具进行同步

  例如： [Symmetric](https://www.symmetricds.org/doc/3.14/html/tutorials.html#_installation)