---
title: "Weekly 30"
subtitle: ""
date: 2023-11-21T15:55:50+08:00
lastmod: 2023-11-22
draft: false
tags: []
category: [Weekly]
---



{{< article title="测试" tags="hugo Rime" author="作者名" link="https://www.baidu.com" rate="4" >}}
笔记测试
{{< /article >}}



## 文章

##### [自由输入法 RIME 简明配置指南](https://sspai.com/post/84373)

## 资源

##### [gpt-crawler](https://github.com/BuilderIO/gpt-crawler)

Crawl a site to generate knowledge files to create your own custom GPT from a URL

## 言论

<img src="https://raw.githubusercontent.com/huyixi/Pics/main/uPic/image-20231121224104444.png" alt="image-20231121224104444" style="zoom:25%;" />

## 技巧

##### hugo server 前杀死占用的进程

新建文件  `hugo-server.sh`

```bash
lsof -ti:1313 | xargs kill
hugo server
```

`chmod +x hugo-server.sh`



配置 zshrc , 添加

`alias hugo-server="~/文件路径/hugo-start.sh"`







