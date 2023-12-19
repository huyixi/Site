---
title: "网站更新日志"
subtitle: "网站更新日志"
date: 2023-11-28T00:53:10+08:00
lastmod: 2023-12-05
draft: false
tags: []
category: [Blog]
summary:
---

## Todo

设置在首页显示的文章

<img src="https://raw.githubusercontent.com/huyixi/Pics/main/uPic/image-20231129142457869.png" alt="image-20231129142457869" style="zoom:25%;" /> 淡化 ScrollToTop 图标

删除更换 top nav

删除

![SCR-20231129-uhoy](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/SCR-20231129-uhoy.png)

![topnavchange](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/sitetopnav.gif)

### 减少小屏幕无关元素干扰

Tue Dec 5 21:05, 2023

首先应保证文字阅读体验,减少无关元素的干扰.

在小屏的时候其实只要显示下方的目录按钮即可,右侧的回到顶部按钮也不需要.并且应当尽量弱化按钮的存在,只在必要的时候 hover 展示.

顶部的 nav 应当只在回滚到上方的时候出现,这样在小品的时候只有下方一个目录按钮,阅读体验应当会更好.

After:

![image-20231205211024164](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/image-20231205211024164.png)


#### 使用 GitHub Actions 自动生成周刊

Sun Dec 10 15:16, 2023

```bash
name: Generate Weekly Post

on:
  schedule:
    - cron: '0 0 * * 6'

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout
      uses: actions/checkout@v2

    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.x'

    - name: Generate Weekly Post
      run: |
          START_DATE="2023-12-10"
          TODAY=$(date +'%Y-%m-%d')
          # 计算周刊的期数
          WEEKLY_NUMBER=$((($(date -d $TODAY +%s) - $(date -d $START_DATE +%s)) / 604800 + 1 +32))

          # 创建新的文件夹
          FOLDER_NAME="Weekly-${WEEKLY_NUMBER}"
          mkdir -p "./content/posts/${FOLDER_NAME}"

          # 创建 index.md 并写入内容
          {
            echo "---"
            echo "title: Weekly ${WEEKLY_NUMBER}: "
            echo "start_date: ${TODAY}"
            END_DATE=$(date -d "${TODAY} + 6 days" +'%Y-%m-%d')
            echo "end_date: ${END_DATE}"
            echo "category: [Weekly]"
            echo "tags: []"
            echo "draft: true"
            echo "---"
            echo "这是自动生成的第 ${WEEKLY_NUMBER} 期周刊内容。"
          } > "./content/posts/${FOLDER_NAME}/index.md"


    - name: Commit and Push
      run: |
        git config --global user.name '${{ secrets.GIT_USER_NAME }}'
        git config --global user.email '${{ secrets.GIT_USER_EMAIL }}'
        git add ./content/posts/${FOLDER_NAME}
        git commit -m "Add Weekly post"
        git push
```

#### 更好的 shadow 样式

![image-20231220003044147](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/image-20231220003044147.png)

参考以上的样式风格，之前的 hover 样式太过浮夸了。 

#### Apple 风更浓了

Wed Dec 20 00:29, 2023

去掉了博客链接的边框，更简洁更耐看了，也更像 Apple 了。

之前的：

![image-20231220003305388](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/image-20231220003305388.png)

现在的：

![image-20231220003416968](/Users/huyixi/Library/Application%20Support/typora-user-images/image-20231220003416968.png)

![image-20231220003251282](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/image-20231220003251282.png)
