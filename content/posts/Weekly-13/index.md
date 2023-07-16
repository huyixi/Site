---
title: 周刊#13：未
date: 2023-07-08T03:36:00+08:00
categories: [weekly]
tags: [weekly]
draft: false
summary: |
 主题：<br>
 时间：20230716 - 20230723
---

## 动态

### 2023.07.16

今天重新整理了一下我的RSS订阅。原本我使用了三个 Feedly 账号来组织我的订阅，但发现这样有些麻烦，于是我想把它们整合到一起，以更好地进行管理。

在编辑这份 opml 文件的时候，我发现 Hacker News 里面推荐了一些技术博客，于是我把它加入到了文件中， 但是我之后发现这封文件中的订阅播客实在是太多了，我想删除它。我发现 Reeder 的没有办法批量删除 Feed。

如果我删除这个账号，之前的订阅仍然存在，也无法进行删除。

于是我想到了在安卓上使用自动点击器的软件，在 Mac 上是否有类似的软件。我找到了系统上自带的一个名为"Automator"的软件，并使用 Cliclick 自动执行这些重复的步骤。

![Automator](https://raw.githubusercontent.com/huyixi/Pics/main/Automator.png)

我的代码：

```AppleScript
on run {input, parameters}
  set dx1 to 30
  set dy1 to 80
  set dy2 to 20
  set counter to 0
  repeat 3 times
    repeat 5 times
      set x to 80
      set y to 280 + dy2 * counter
      do shell script "/opt/homebrew/bin/cliclick m:" & x & "," & y & " w:10 c:. w:10 kd:ctrl w:10 c:. w:10 ku:ctrl w:10"
      set x to x + dx1
      set y to y + dy1
      do shell script "/opt/homebrew/bin/cliclick m:" & x & "," & y & " c:. w:300"
      do shell script "/opt/homebrew/bin/cliclick m:590,430 c:."
      do shell script "/opt/homebrew/bin/cliclick k:return"
      set counter to counter + 1
    end repeat
    set counter to 0
  end repeat
  return input
end run
```

执行效果：

![](https://raw.githubusercontent.com/huyixi/Pics/main/CleanShot%202023-07-16%20at%2015.50.33.gif)

[Cliclick](https://github.com/BlueM/cliclick) - macOS CLI tool for emulating mouse and keyboard events

| **命令**     | **格式**    | **描述**                                                     |
| ------------ | ----------- | ------------------------------------------------------------ |
| 鼠标移动     | **m:x,y**   | 将鼠标移动到屏幕的 **(x, y)** 位置                           |
| 鼠标左键点击 | **c:x,y**   | 在屏幕的 **(x, y)** 位置进行左键点击                         |
| 鼠标右键点击 | **rc:x,y**  | 在屏幕的 **(x, y)** 位置进行右键点击                         |
| 鼠标双击     | **dc:x,y**  | 在屏幕的 **(x, y)** 位置进行双击                             |
| 开始拖动     | **dd:x,y**  | 在屏幕的 **(x, y)** 位置开始拖动                             |
| 继续拖动     | **dm:x,y**  | 将鼠标拖动到屏幕的 **(x, y)** 位置                           |
| 结束拖动     | **du:x,y**  | 在屏幕的 **(x, y)** 位置结束拖动                             |
| 按下修饰键   | **kd:keys** | 按下指定的修饰键，修饰键包括 **ctrl**、**alt**、**cmd**、**fn**、**shift** |
| 弹起修饰键   | **ku:keys** | 弹起指定的修饰键，修饰键包括 **ctrl**、**alt**、**cmd**、**fn**、**shift** |
| 模拟按键     | **kp:key**  | 模拟按下指定的键，如：**arrow-down**、**arrow-left**、**arrow-right**、**arrow-up**、**return** 等 |
| 键盘输入     | **t:text**  | 输入指定的文本                                               |
| 等待         | **w:ms**    | 等待指定的毫秒数                                             |
| 打印颜色     | **cp:str**  | 打印指定屏幕位置的颜色值                                     |

[Automator User Guide](https://support.apple.com/guide/automator/welcome/2.10/mac)

## 阅读

让 GPT 输出他的思考过程的 Prompt 

step-by-step approach in your response, cite sources and give reasoning before sharing final answer