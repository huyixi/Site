---
title: "Rime"
subtitle: ""
date: 2023-11-22T12:02:26+08:00
lastmod: 2023-11-26
draft: false
tags: []
category: [Blog]
summary: 关于 Rime 输入法的配置
---

##### 使用小鹤双拼

官方配置库：https://github.com/rime/rime-double-pinyin。其中收录了自然码双拼、智能ABC双拼、小鹤双拼、MSPY双拼、拼音加加双拼。
小鹤双拼配置：将官方配置库中的 double_pinyin_flypy.schema.yaml 下载到用户文件夹。设置好后，右键点击任务栏小狼毫图标，选「输入法设定」，只勾选一个「小鹤双拼」。默认方案为繁体，可使用按键F5(部分版本是F4)，将配置默认为简体。



[雾淞拼音](https://dvel.me/posts/rime-ice/#%e5%9f%ba%e6%9c%ac%e5%a5%97%e8%b7%af)

### 常用设置

#### 同步用户资料

[官方指南](https://github.com/rime/home/wiki/UserGuide#%E5%90%8C%E6%AD%A5%E7%94%A8%E6%88%B6%E8%B3%87%E6%96%99)

#### 删除自造词

先把選字光標（用上、下鍵）移到要刪除的用戶詞組上，再按下 Shift+Delete 或 Control+Delete（蘋果鍵盤用 Shift+Fn+Delete）。

#### 修改皮肤

打开或新建 squirrel.custom.yaml（鼠须管）或 weasel.custom.yaml（小狼毫）

style/color_scheme: 你想使用的皮肤名

#### 修改候选字为横排显示

squirrel.custom.yaml（鼠须管）或 weasel.custom.yaml（小狼毫）

```
patch：
  style/horizontal： true
```

### 资源

[仿 Mac 皮肤](https://github.com/NavisLab/rime-pifu)

#### 教程

- [Rime 输入法安装和使用指北](https://blog.mikelyou.com/2020/07/31/rime-input/#:~:text=2.1%20%E5%80%99%E9%80%89%E8%AF%8D%E6%95%B0%E9%87%8F,%E6%95%B0%E5%AD%971~9%E5%92%8C0%E3%80%82)
