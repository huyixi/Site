---
title: "First CTF"
subtitle: "记录我的第一次 CTF"
date: 2023-12-25T15:59:29+08:00
lastmod: 2023-12-25T15:59:29+08:00
draft: true
tags: []
category: [Article]
summary: 
---
## 记录第一次 CTF

### 第一个 flag

Mon Dec 25 12:37, 2023
起因是刷 Twitter 的时候看到这样一条推文：
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/hwAFKy.jpg)
因为我其实并不了解 CTF，所以刚看到也是很无感的，但是最近关注了一些安全方面的推友，说比较简单，而且挺有意思，于是便收藏起来等后续有空来做（不过我很多收藏的东西就是因为这么想，然后吃灰的）。周一刚好吃完饭比较空闲，就打开来玩一玩。
首先是使用 Docker 安装，这个很简单，跳过。
之后进入到服务器，我就一脸懵：
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/aiBZ3E.jpg)
只有命令行？什么提示也没有？要怎么开始？之后尝试输入 `ls`，看看目录中有什么
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/5pI7CJ.jpg)
还好还好，这边有几个文件，于是尝试打开第一个：
`vim 01-flag`
进去就看到了：![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/V0RcpV.jpg)
然后将这个代码输入网址中：![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/0n8DkG.jpg)
原来夺旗赛是这么玩的：只要找到每个 flag 对应的代码就可以。

### 第二题：查看隐藏文件

![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/pa15Ol.jpg)
很简单，使用 dotfile 来隐藏。正好最近在研究 zshrc 和各种 dotfile 的配置备份等，很容易就拿到了第二个旗。

### 第三题：找东西

![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/TyZ561.jpg)
第一次看到这一题，我是去问了 ChatGPT，但是它根本不知道要干什么。还以为是小学题目要找规律了。看了半天愣是没发现有什么不一样的数字，遂放弃。之后发现每个文件夹中还嵌套了一个文件夹，而这个子文件夹中也有 0 - 99，共 100 个文件夹。于是想起：可能要我们要出 flag 文件在哪里。于是输入命令 `find . --name "flag.txt"`。
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/kCtaLG.jpg)

#### 常用的 find 命令

- 按名字搜索当前文件夹下 `abc.txt` 文件： `find . -name "abc.txt"`
- 按名字搜索并忽略大小写：`find . -iname "abc.txt"`
- 按类型搜索 -type：`find . -type f` 查找文件，`find . -type d` 查找目录。 
- 按文件大小搜索 -size：`find . -size +50M`

### 第四题：解压
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/tMZ1RO.jpg)

### 第五题：访问权限
这一题是关于获取访问权限的。我先尝试了 `sudo -i`，但是无法获取。之后尝试直接修改文件的访问： `chmod 666 flag.txt`，成功获取到 flag。
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/xyu6k9.jpg)

### 第六题：Python
这题简单。直接运行这个 Python 文件就好了。

### 第七题：nginx
第七题是关于 nginx 的。打开 flag.txt 后直接就有端口号 80 了。
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/6foHJV.jpg)然后再获取 ip 地址：`ip addr`，之后 `curl 172.17.0.2` 这个 ip 地址就拿到这个 flag 了。
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/0uZiYV.jpg)
不过因为 80 端口是 HTTP 端口，只要访问这个 ip 地址就可以了。

至此所有的 flag 就都拿到了。也拿到了作者的红包，感谢。
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/OAgnqG.jpg)
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/aZk3ca.jpg)
