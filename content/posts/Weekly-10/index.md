---
title: 周刊#10：
date: 2023-06-20T15:53:00+08:00
categories: [weekly]
tags: [weekly]
draft: false
summary: |
 主题：git commit,<br>
 时间：20230625 - 20230701
---

## 如何写一个好的 git commit ?

### 相关命令

 - 设置提交消息模板

   在主目录中创建一个名为 `.gitmessage` 的文件，并添加以下内容：
   
   ```
   [summary]
   
   [details]
   ```
   
   运行以下命令告诉 Git 使用此文件作为提交消息的模板：
   
   ```bash
   git config --global commit.template ~/.gitmessage
   ```
   
   

- 只打印主题行

  ```bash
  git log --oneline
  ```

- 按用户提交进行分组

  ```bash
  git shortlog
  ```

  

#### 相关文章：

[Writing Better Commit Messages  - Apurva Jain](https://medium.com/swlh/writing-better-commit-messages-9b0b6ff60c67)

[How to Write Good Commit Messages: A Practical Git Guide - Bolaji Ayodeji](https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/)


[How to Write a Good Git Commit Message](https://blog.ossph.org/how-to-write-a-good-git-commit-message/)

#### 相关工具：

[commitizen](https://github.com/commitizen/cz-cli)

[git-cz](https://github.com/streamich/git-cz)

文件 git add 后，使用 git-cz 提交

## 文章

### 1.

### 2.[ChatGPT将非英语语言排除在AI革命之外](https://clip.owenyoung.com/2023/06/04/chat-gpt-is-cutting-non-english-languages-out-of-the-ai-revolution/#chatgpt将非英语语言排除在ai革命之外--wired)



