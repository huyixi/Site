---
title: "Weekly 27:"
subtitle: "学习的同时应该伴随认知效率的提高"
date: 2023-10-28T00:35:59+08:00
lastmod: 2023-10-31
draft: false
tags: []
category: [Weekly]
---

#### Sat Oct 28 00:36, 2023

与月车哥的再一次交流。

- 学习应该同时伴随认知效率的提高。我是最近几天才开始意识到这个问题，今晚跟月车哥再次强调了一下，后面更该去注意。
- 在一条路上的积累并非不能迁移。
- 追求更大量级的事情。
- 所有人都在动，但总有人前进的更快。
- 持续迭代，得到更快找路的能力。

拱哥说的：

- 做事就要：谋其上、舍我其谁。

教主说的：

- 我们要把自己能控制的变量做到最大。

**我后续要注意的：**

- 精力管理（注意力）
- 提高认知效率，持续迭代认知方法
- 谋其上、舍我其谁的自信

#### Sun Oct 29 23:03, 2023

“长时间工作根本没有生产力，如果你工作 8 小时，那就试着工作 5 小时，或者只工作 4 小时。如果你只有这些时间工作，你就没有时间在工作的同时刷推了”


![F9mrgGWasAA4yZk](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/F9mrgGWasAA4yZk.jpeg)



## 文章

### 圆肩驼背体态纠正

#### 头前伸像乌龟一样怎么纠正！？

[视频链接](https://www.bilibili.com/video/BV1AC4y1L7Gf/?spm_id_from=333.1007.top_right_bar_window_history.content.click&vd_source=e7b677bc31fcf107b6c6689167aae9d9)

评论区有个方法：

- 提升显示器位置

  通过将显示器架子提升至稍微仰头的位置，能够促使使用者保持直立的背部，从而有助于改善驼背和减轻脖子的压力。

- 使用增高鞋垫

  长期佩戴增高鞋垫可以改善头身比，引导身体在走路时自然后倾，有助于改善体态和减轻驼背。

- 调整椅子位置

  找到适合自己的椅子位置并结合人体工程学椅或腰靠的使用，可以减轻腰部的压力并促使保持正确坐姿。
#### 【纠正体态】3步教你快速告别圆肩驼背! - [帅soserious](https://space.bilibili.com/66391032)

  [视频链接](https://www.bilibili.com/video/BV1p4411F77D/?spm_id_from=333.1007.top_right_bar_window_history.content.click&vd_source=e7b677bc31fcf107b6c6689167aae9d9)

**总结**

![SCR-20231029-kfdx](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/SCR-20231029-kfdx.jpeg)

**晨起训练**

![SCR-20231029-kdxm](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/SCR-20231029-kdrc.jpeg)





![SCR-20231029-kcxj](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/SCR-20231029-kcxj.jpeg)

![SCR-20231029-keav](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/SCR-20231029-keav.jpeg)

**"ITY"训练**

![SCR-20231029-kfow](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/SCR-20231029-kfow.jpeg)

![SCR-20231029-kfrm](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/SCR-20231029-kfrm.jpeg)

![SCR-20231029-kfvp](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/SCR-20231029-kfvp.jpeg)

#### 【改善体态】5分钟全身体态纠正训练 (起床必备) - [帅soserious](https://space.bilibili.com/66391032)

### [PARA中「项目」的魔力：用输出对抗信息焦虑](https://sspai.com/post/83271)

在 Google 最神秘的部门Google X，有一个项目叫「登月工厂」，他们有个「Monkey First」的口头禅。意思是，**如果你想让一只猴子在基座上背诵莎士比亚的名言，你应该先去训练猴子，而不是先去建造基座**。

> 想象一下，你正试图教一只猴子在基座上背诵莎士比亚。 在训练猴子和建造基座之间，你应该如何分配时间和金钱?正确的答案，当然是不花ß时间去想怎样建造基座，而是去思考怎样训练猴子说话，那才是真正重要的事。

![0b792035f6e62fd60b63503f2d947a19-2](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/0b792035f6e62fd60b63503f2d947a19-2.png)

但很多人会花大量时间建造一个华丽的基座，并显得很忙碌。因为这样一方面可以逃避真正的「项目」，也可以安慰自己没有浪费青春。

### HeoAwards2023：我喜欢的年度博主

[链接](https://blog.zhheo.com/p/a38d711c.html)

发现了很多有意思的博客

- [三钻](https://tridiamond.tech/)：关于前端的博客

### 日记

#### Mon Oct 30 09:34, 2023

输出当前路径下所有文本文件的内容：

**Windows:**

⚠️ 在第二行代码定义要处理的文件扩展名中添加自己需要获取的文件后缀

```bash
# 获取脚本所在的当前路径
$folderPath = $PSScriptRoot

# 定义要处理的文件扩展名
$fileExtensions = @("*.txt", "*.js", "*.vue", "*.html")

# 获取指定目录下的所有指定类型的文件
$txtFiles = Get-ChildItem -Path $folderPath -Include $fileExtensions -Recurse

foreach ($file in $txtFiles) {
    # 输出文件路径和文件名
    Write-Host "$($file.FullName)"

    
    # 指定文件编码为 UTF-8
    $content = "$(Get-Content -Path $file.FullName -Raw -Encoding UTF8)"
    Write-Host $content

    # 添加一个空行作为文件之间的分隔
    Write-Host
}
```

