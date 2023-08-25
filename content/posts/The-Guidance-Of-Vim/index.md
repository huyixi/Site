---
title: The Guidance Of Vim
date: 2023-04-01T02:49:00+08:00
category: [Weekly]
tags: [weekly]
draft: false
---

PS：文中的向后指的是靠近文末，与 Vim 指南相反 

## Vim 键位图

![](https://raw.githubusercontent.com/huyixi/blog_imgs/master/vim-cheat-sheet-en.gif)

![](https://raw.githubusercontent.com/huyixi/blog_imgs/master/vim-cheat-sheet-cn.gif)

## Vim 的模式

- Normal Mode commnad 正常模式
- Insert Mode Command 插入模式
- Visual Mode Command 可视模式
- Command-line Command 命令行模式

查看当前所在的模式：`:set showmode`

## Vim 的语法

```
action + object
```

## 光标移动

### 左右移动

| 基本命令 | 动作             | 组合命令 | 动作                 |
| -------- | ---------------- | -------- | -------------------- |
| h        | 左               |          |                      |
| l        | 右               |          |                      |
| 0        | 行首             |          |                      |
| ^        | 行首个非空白字符 |          |                      |
| $        | 行尾             | g0       | 屏幕行首个字符       |
|          |                  | g^       | 屏幕行首个非空白字符 |
|          |                  | g$       | 至屏幕行末个字符     |
|          |                  | gm       | 至屏幕行中点         |
|          |                  | gM       | 至本行中点           |

### 上下移动

| 基本命令 | 动作 | 组合命令 | 动作                      |
| -------- | ---- | -------- | ------------------------- |
| k        | 上移 | N k      | 上移 N 行                 |
| j        | 下移 | N j      | 下移 N 行                 |
| gg       | 首行 | N gg     | 至第 N 行首个非空白字符处 |
| G        | 末行 | N G      | 至第 N 行首个非空白字符处 |
|          |      | N %      | 至全文件行数 N% 处        |
|          |      | N gk     | 上移 N 屏幕行             |
|          |      | N gj     | 下移 N 屏幕行             |

### 文本对象移动

| 键盘         | 动作                              | 组合命令 | 动作                             |
| ------------ | --------------------------------- | -------- | -------------------------------- |
| w - word     | 向后一个单词                      | N w      | 向右 N 个单词                    |
| W            |                                   | N W      | 向左至第 N 个空白隔开的字串 词尾 |
| e - End      | 向后一个单词词尾                  | N e      | 向右 N 个单词词尾                |
|              |                                   | N ge     | 向左 N 个单词词尾                |
| E            |                                   | N E      | 向前至第 N 个空白隔开的字串词尾  |
| b - Backword | 向前 N 个单词                     |          |                                  |
| B            | 向后至第 N 个空白隔开的字串的词尾 |          |                                  |
| )            | 向后一个句子                      | N )      | 向后 N 个句子                    |
| (            | 向前一个句子                      | N (      | 向前 N 个句子                    |
| }            | 向后一个段落                      |          |                                  |
| {            | 向前一个段落                      |          |                                  |

### 模式查找

| 基本命令 | 动作                     | 组合命令 | 动作 |
| -------- | ------------------------ | -------- | ---- |
| /        | 向后查找                 |          |      |
| ?        | 向前查找                 |          |      |
| n        | 重复上一次的查找         |          |      |
| N        | 相反方向重复上一次的查找 |          |      |

## 屏幕操作

### 屏幕滚动

| 键盘命令                                                     | 动作               | 组合命令   | 动作              |
| ------------------------------------------------------------ | ------------------ | ---------- | ----------------- |
| Ctrl + D                                                     | 窗口下滚 1/2 行    | N Ctrl + D | 窗口下滚 N 行     |
| Ctrl + U                                                     | 窗口上滚 1/2 行    | N Ctrl + U | 窗口上滚 N 行     |
| Ctrl + F                                                     | 窗口下滚 1 页      | N Ctrl + F | 窗口下滚 N 页     |
| Ctrl + E                                                     | 窗口下滚 1 行      | N Ctrl + E | 窗口下滚 N 行     |
| Ctrl + B                                                     | 窗口上滚 1 页      | N Ctrl + B | 窗口上滚 N 页     |
| Ctrl + Y                                                     | 窗口上滚 1 行      | N Ctrl + Y | 窗口上滚 N 行     |
| z /zt                                                        | 当前行置于窗口顶端 |            |                   |
| z. / zz                                                      | 当前行置于窗口正中 |            |                   |
| z- / zb                                                      | 当前行置于窗口底端 |            |                   |
| 以下仅当 ['wrap'](https://yianwillis.github.io/vimcdoc/doc/options.html#'wrap') 选项关闭时生效: |                    |            |                   |
| zh                                                           | 屏幕右滚 1 个字符  | N zh       | 屏幕右滚 N 个字符 |
| zl                                                           | 屏幕左滚 1 个字符  | N zl       | 屏幕左滚 N 个字符 |
| zH                                                           | 屏幕右滚 1 个字符  | N zH       | 屏幕右滚半个屏宽  |
| zL                                                           | 屏幕左滚 1 个字符  | N zL       | 屏幕左滚半个屏宽  |

### 窗口命令

| 基本命令                  | 动作                       | 拓展命令      | 动作                       |
| ------------------------- | -------------------------- | ------------- | -------------------------- |
| :split / Ctrl + W - S     | 将窗口分割为两部分         | :split {file} | 分割窗口并在 {file} 中编辑 |
| :vsplit                   | 垂直分割窗口               |               |                            |
| Ctrl + W - J              | 跳转到下方窗口             | Ctrl + W - b  | 跳转到低端窗口             |
| Ctrl + W - W              | 跳转到上方窗口             | Ctrl + W - t  | 跳转到顶端窗口             |
| Ctrl + W - p              | 跳转到上一次激活的窗口     |               |                            |
| Ctrl + W - x              | 将当前窗口和后一个窗口对调 |               |                            |
| Ctrl + W - =              | 使所有窗口等宽等高         |               |                            |
| Ctrl + W - - / <          | 减少当前窗口高度           |               |                            |
| Ctrl + W - + / >          | 增加当前窗口高度           |               |                            |
| :vertical {cmd}           | 使命令 {cmd} 垂直分割      |               |                            |
| :terminal                 | 打开终端窗口               |               |                            |
| :new / Ctrl + W - N       | 创建新的空白窗口           |               |                            |
| :q                        | 退出编辑并关闭窗口         |               |                            |
| :on (only) / Ctrl + W - o | 使当前窗口成为唯一窗口     |               |                            |

## 文本操作

### 插入

| 基本命令                             | 动作                           | 组合命令     | 动作                           |
| ------------------------------------ | ------------------------------ | ------------ | ------------------------------ |
| a - Append text after the cursor     | 在光标后插入文本               |              |                                |
| A                                    | 在行末添加文本                 | 在可视模式下 | 在所有选中行之后插入相同的文本 |
| i - Enter insert mode                | 在光标前插入文本               |              |                                |
| I                                    | 在行首插入文本                 | 在可视模式下 | 在所有选中行之前插入相同的文本 |
| o - Open a new line after the cursor | 在当前行下方打开新行，添加文本 |              |                                |
| Ｏ                                   | 在当前行上方打开新行，添加文本 |              |                                |

### 删除

| 基本命令   | 动作                     | 扩展命令 | 动作                        |
| ---------- | ------------------------ | -------- | --------------------------- |
| x          | 删除当前光标的字符       | N x      | 删除当前光标之后的 N 个字符 |
| X          | 删除光标前的字符         | N X      | 删除光标前的 N 个字符       |
| d {motion} | 删除 {motion} 跨越的文本 | dd       | 删除当前行                  |
|            |                          | N dd     | 删除 N 行                   |

### 替换

| 基本命令        | 动作                 | 拓展命令 | 动作 |
| --------------- | -------------------- | -------- | ---- |
| r               | 替换字符             |          |      |
| R               | 替换模式             |          |      |
| :s/{pat}/{repl} | 以 {repl} 替换 {pat} |          |      |

### 撤销

| 基本命令 | 动作               | 组合命令 | 动作 |
| -------- | ------------------ | -------- | ---- |
| u        | 撤销上一次的操作   |          |      |
| U        | 撤销在当前行的操作 |          |      |
| Ctrl + R | 取消上一次的撤销   |          |      |

### 其他

| 命令  | 动作             |
| ----- | ---------------- |
| > / < | 将选中的文本缩进 |
| .(点) | 重复上一次的命令 |
|       |                  |



## 位置标记

| 键盘命令  | 动作                           | 组合命令 | 动作 |
| --------- | ------------------------------ | -------- | ---- |
| m{a-zA-Z} | 用标记 `{a-zA-Z}` 记录当前位置 |          |      |
| {a-z}     | 至当前文件中的标记 `{a-z}` |      ||
| {A-Z}     | 至任何文件中的标记 `{A-Z}` |      ||
| ``        | 至上次跳转前的位置             |          |      |
| `[        | 至上次操作文本的开始           |          |      |
| `]        | 至上次操作文本的末尾           |          |      |
| :marks    | 列出活动的标记                 |          |      |
| :ju       | 列出跳转表                     |          |      |

## 标签标记

| 键盘命令  | 动作                                        | 组合命令 | 动作                              |
| --------- | ------------------------------------------- | -------- | --------------------------------- |
| :ta {tag} | 跳转到标签 {tag}                            | :N ta    | 跳转到标签列表里第 N 个较新的标签 |
|           |                                             | Ctrl + T | 标签退栈，返回前一个跳转点        |
|           |                                             | Ctrl + 0 | 跳转到前一个位置                  |
| Ctrl + ]  | 跳转到光标下的标签                          |          |                                   |
| :ts [tag] | 列出匹配的标签并选择其中一个跳转            |          |                                   |
| :tj [tag] | 跳转到标签 [tag] 当有多个匹配时从列表中选择 |          |                                   |
| :lt [tag] | 跳转到标签 [tag] 并把匹配的标签加到位置列表 |          |                                   |
| :tags     | 显示标签列表                                |          |                                   |
| :pt {tag} | 打开预览窗口来显示 {tag} 标签               |          |                                   |

## 文件操作

### 写入与退出

| 基本命令 | 动作                        | 组合命令   | 动作                                 |
| -------- | --------------------------- | ---------- | ------------------------------------ |
| ZZ       | 保存文件并退出/退出当前窗口 |            |                                      |
| :w       | 将改动写入当前文件          | :w {file}  | 写入至文件 {file},若已存在则无法写入 |
|          |                             | :w! {file} | 写入至已存在的文件 {file}            |
| :q!      | 放弃该文件的修改并退出      |            |                                      |

## 帮助

| 基础命令 | 动作               | 组合命令                | 动作                                                         |
| -------- | ------------------ | ----------------------- | ------------------------------------------------------------ |
| :help    | 显示总览的帮助窗口 | :help {object}          | 查看 {object} 的帮助                                         |
|          |                    | :help index             | 查看所有命令的帮助索引                                       |
|          |                    | :help {shortcut}        | 获得快捷键在普通模式下的帮助                                 |
|          |                    | :help {mode}_{shortcut} | 指定模式下快捷键的帮助。例：:help i_CTRL-H -> 查看在插入模式下 CTRL - H 的帮助 |
|          |                    | :help -t                | 查看 -t 这个命令行参数的作用                                 |



## Vimium --- 在 Chrome 浏览器上使用 Vim

### 浏览当前页面：

    ?       打开帮助教程/列出所有Vimium命令
    h       向左滑动
    j       向下滑动
    k       向上滑动
    l       向右滑动
    gg      快速到达页面顶部
    G       快速到达页面底部
    d       向下翻动半页
    u       向上翻动半页
    f       在当前页面打开一个链接
    F       在新标签页打开一个链接
    r       重新载入页面
    gs      查看当前页面的源代码
    i       进入插入模式 - 按esc退出模式
    yy      复制当前页面链接至剪贴板
    yf      从页面中复制一个链接至剪贴板
    gf      跳转到下一框架 - 无用
    gF      聚焦视觉于该框架 - 无用


### 打开新的页面
    o       搜索网址，书签，或历史记录，在当前页面打开
    O       搜索网址，书签，或历史记录，在新的页面打开
    b       搜索书签，在当前页面打开
    B       搜索书签，在新的页面打开

### 查找
    /       进入查找模式，输入关键字查找，ESC退出
    n       切换到下一个匹配
    N       切换到上一个匹配

**具体操作参考：https://github.com/philc/vimium/wiki/Find-Mode**

### 浏览历史
    H       后退
    L       前进

### 切换tab
    J, gT   切换到左边tab
    K, gt   切换到右边tab
    g0      切换到第一个tab
    g$      切换到最后一个tab
    ^       切换到刚才的tab
    t       创建一个新的页面
    yt      复制当前页面
    x       关闭当前页面
    X       恢复刚才关闭的页面
    T       在当前所有的tab页面中搜索
    <a-p>   对当前页面进行标记或者取消标记

### 标记
    ma      当页标记，只能在当前tab页面跳转，m + 一个小写字母
    mA      全局标记，可以再切换到其他tab的跳转过来，m + 一个大写字母
    `a      跳转到当页标记
    `A      跳转到全局标记
    ``      跳回之前的位置

### 进阶命令
    ]], [[  点击下一页或者Next等快速跳转按钮
    <a-f>   打开多链接在新的窗口中
    gi      跳转到当前文本框/搜索框
    gu      跳转到当前网址的上一级网址
    gU      跳转到当前网址的跟网址
    ge      编辑当前的网址，在当前页面打开
    gE      编辑当前网址，在新的页面打开
    zH      滚动到最左边
    zL      滚动到最右边
    v       进入行观察模式，快速粘贴并且回车，用y进行快拉
    V       进入行观察模式

**Vimium支持重复命令模式，即使用`5t`可以打开5个新标签页，输入错误可以用esc或者c键入取消**

### 自定义映射
    你可以在自定义按键设置中取消或者重新设定默认快捷键，每一行输入以下设定命令:
* `map key command`:将命令映射到vimium中，并且覆盖Chrome的默认设置
* `unmap key`: 取消一个命令，并且重新载入Chrome的默认设置
* `unmapAll`: 取消所有命令绑定，当你尝试删除vimium的所有命令并且开始自己的设定

**eg.**

    `<map <c-d> scrollPageDown>` 设置`<c-d>`为 ctrl+d 的按键，并且覆盖chrome设定
    
    `map r reload` 设置 `r` 为reload 的快捷键
    
    `unmap <c-d>` 取消 c-d 的设置


### Vimium快速使用搜索引擎
**命令：**

    按 `o` 进入搜索模式，然后输入`缩写+搜索内容`.

**eg:**

    `o`+`g vimium github readme`  //即用google搜索关键词：vimium github readme
    `o`+ `y edsheeran perfect`    //即在youtube中搜索：edsheeran perfect

**提示:**

    当你输入上述语句时，搜索模式会给出对应的补全提示

**具体设置：**   

打开Vimium的设置选项中，在自定义搜索引擎的搜索格式，具体格式可以自行搜索，以下给出常见的搜索
引擎格式：

    //谷歌
    # g: http://www.google.com.hk/search?q=%us 
    //油管视频
    # y: https://www.youtube.com/results?search_query=%s 
    //谷歌地图
    # gm: https://www.google.com/maps?q=%s
    //必应 
    # b: https://www.bing.com/search?q=%s 
    //百度
    # bd: http://www.baidu.com/s?wd=%s
    //B站
    # bl: http://www.bilibili.tv/search?keyword=%s 
    //维基
    # w: https://www.wikipedia.org/w/index.php?title=Special:Search&search=%s 
    //知乎
    # zh:https://www.zhihu.com/search?type=content&q=%s
    //爱词霸
    # icb: http://www.iciba.com/%s
    //有道
    # yd: http://dict.youdao.com/search?q=%us
    //谷歌学术：
    # gs: http://scholar.google.com.hk/scholar?q=%us&hl=zh-CN
    //github:
    # gt: https://github.com/search?q=%s

注：#号表示注释，使用时去掉#

## Vimari --- 在 Safari 上使用 Vim

### 页内导航

```
f       Toggle links
F       Toggle links (open link in new tab)
k       Scroll up
j       Scroll down
h       Scroll left
l       Scroll right
u       Scroll up half page
d       Scroll down half page
g g     Go to top of page
G       Go to bottom of page
g i     Go to first input
```

### 页面/标签导航

```
H       History back
L       History forward
r       Reload
w       Next tab
q       Previous tab
x       Close current tab
t       Open new tab
Vimari v2.1+
```

### Vimari 模式

```
i       Enter insert mode
ESC     Enter normal mode
CTRL+[  Enter normal mode
```

## 参考链接

- [Vim 官方网站主页](https:www.vim.org/)
- [Vim 中文帮助](https://yianwillis.github.io/vimcdoc/doc/quickref.html)
- [炸鸡人博客：Vim 的语法](https://zhajiman.github.io/post/vim_grammar/)
- [酷壳CoolShell：简明Vim 练级指南](https://coolshell.cn/articles/5426.html)
- [Vimium](https://github.com/televator-apps/vimari)
- [Vimari](https://github.com/televator-apps/vimari)
- [MIT 的 计算机学生缺失的课程](missing-semester-cn.github.io/2020/editors)
- [史上最全Vim快捷键键位图（入门到进阶）](https://www.runoob.com/w3cnote/all-vim-cheatsheat.html)
