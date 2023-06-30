---
title: Mac 使用指南
date: 2023-06-01T02:53:00+08:00
categories: [Mac]
tags: [inbox]
draft: false
---

# Mac 使用指南

#### 如何删除系统自带的输入法？

通过系统的输入法设置面板删除输入法最终还会剩下一个 ABC 的英文输入法。因为我使用的是 Rime 输入法，系统配置了额外的一个输入法会导致切换不方便，所以需要删除该输入法。

##### 操作指南

1. 关闭 Mac 系统的 `SIP(System Integrity Protection)` 

   1. 关机

   2. intel 芯片的 Mac 按住 `Command + R` 进入恢复模式

      Apple 芯片的 Mac 按住电源键 进入恢复模式

   3. 进入恢复模式后，打开顶部菜单栏  `实用工具`  菜单栏下的  `终端`

   4. 输入以下命令关闭 `SIP` 模式

      >```bash
      >csrutil disable
      >```

      执行后输出以下内容说明执行成功

      >```bash
      >Successfully disabled System Integrity Protection. Please restart the machine for the changes to take effect.
      >```

   5. 重启系统即可

2. 重启系统后，打开终端，输入以下命令，打开文件

   >```bash
   >sudo open ~/Library/Preferences/com.apple.HIToolbox.plist
   >```

   根据提示输入密码

   进入系统后会提示有风险之类的消息，先不管，直接关掉

3. 在该文件夹中，依次点开 `Root` - `AppleEnabledInputSources` ，会看到一列 `item` ，找到其中 `KeyboardLayout Name` 为 `ABC` 的那一列，将整列 `item` 删掉，然后 `command + S` 保存。

4. 接着重启电脑，打开输入法设置，就可以看到 `ABC输入法` 被删掉了

5. 重新打开系统的 `SIP`

   重新进入恢复模式，打开终端

   >csrutil enable

6. 重新进入系统，此时的风险提示就消失了



### Mac 软件下载

[麦克搜](www.imacso.com)

