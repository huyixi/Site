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



{{< article title="测试2" tags="hugo Rime" author="作者名1" link="https://www.baidu.com" rate="2" >}}
笔记测试
{{< /article >}}


## 文章

##### [自由输入法 RIME 简明配置指南](https://sspai.com/post/84373)

##### [ChatGPT 打字机显示效果的背后：Server-sent Events 介绍](https://einverne.github.io/post/2023/04/behind-chatgpt-server-sent-events.html)

##### [ISUX 设计效率工具趋势 ｜ 综述篇](https://isux.tencent.com/articles/design-tool.html)

##### [Apple 配色](https://developer.apple.com/design/human-interface-guidelines/color#Resources)

##### [TDesign 配色](https://tdesign.tencent.com/design/color)

## 资源

##### [gpt-crawler](https://github.com/BuilderIO/gpt-crawler)

Crawl a site to generate knowledge files to create your own custom GPT from a URL  

##### [devv_](https://devv.ai/)

最懂程序员的新一代 AI 搜索引擎

##### [Verne 博客](https://einverne.github.io/)

里面有很多工具以及实用的技巧的教程

- [Gitbook 使用教程](https://einverne.github.io/gitbook-tutorial/)
- [Markdown 书写风格指南](http://einverne.github.io/markdown-style-guide/zh.html)
- [IntelliJ IDEA Tutorial](https://einverne.gitbook.io/intellij-idea-tutorial/)
- [《How to Invest》 读书笔记](https://einverne.github.io/post/2023/04/how-to-invest-masters-on-the-craft.html)

##### 云谦

- 🍑 公众号：「云谦和他的朋友们」
- 🌍 知识星球：「[云谦的前端日更星球](https://zsxq.sorrycc.com/)」



##### Panda｜ 全而美的设计订阅平台

Panda帮助设计师不错过每天的设计灵感和资讯，包括新的设计方法理念、流行潮流、也有一些新产品推出。我们可以把Panda替换Chrome主页，每次打开浏览器页面都可以随时看到最新的设计资讯。一些英文的订阅也可以用chrome浏览器的翻译功能可以粗略查看。

地址：https://app.usepanda.com/# 

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







