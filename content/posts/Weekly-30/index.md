---
title: "Weekly 30"
subtitle: ""
date: 2023-11-21T15:55:50+08:00
lastmod: 2023-11-22
draft: false
tags: []
category: [Weekly]
---



{{< article title="腾讯实战！如何构建科学有效的色彩系统（应用篇）" tags="Design" author="ISUX" link="https://isux.tencent.com/articles/tencentdocs-colors-2.html" rate="4" >}}
<img src="https://image.uisdc.com/wp-content/uploads/2021/10/uisdc-tx-20211026-8.jpg" alt="腾讯实战！如何构建科学有效的色彩系统（应用篇）" style="zoom: 25%;" />

*腾讯文档调色板命名图表  

腾讯文档的界面中，灰色系列占主导地位，起着至关重要的作用，为产品界面创造结构、表达边界、建立信息层次。在调色板中，我们选择了两种灰色：中性灰色和蓝灰色，来支撑系统的设计。蓝色系列是腾讯文档产品和体验的主要动作颜色。

![Color System Tencent](/Users/huyixi/Desktop/Color%20System%20Tencent.png)

使用了其他颜色以满足一些冲突性任务（警示等）的颜色使用，这些颜色需要谨慎、有目的地使用。  

![Color System Tencent](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/Color%20System%20Tencent%20(1)..png)

生成了一个面向内部、外部的颜色变量表，进行颜色变量的说明和信息的同步，沉淀落到实处的资料文档。

![Color System Tencent (2).](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/Color%20System%20Tencent%20(2)..png)





{{< /article >}}



{{< article title="测试2" tags="hugo Rime" author="作者名1" link="https://www.baidu.com" rate="2" >}}
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

##### [腾讯文档-构建科学有效的色彩系统](https://isux.tencent.com/articles/tencentdocs-colors.html)

##### [腾讯实战！如何构建科学有效的色彩系统（应用篇）](https://www.uisdc.com/tencentdocs-colors-2)

<img src="https://image.uisdc.com/wp-content/uploads/2021/10/uisdc-tx-20211026-8.jpg" alt="腾讯实战！如何构建科学有效的色彩系统（应用篇）" style="zoom:50%;" />



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







