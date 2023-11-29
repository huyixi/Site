---
title: "vscode settings"
subtitle: "My Personal vscode settings"
date: 2023-11-29T14:59:28+08:00
lastmod: 2023-11-29T14:59:28+08:00
draft: false
tags: []
category: [Blog]
summary: 
---

### 打开配置文件

Mac OS `Command + shift + p` 搜索 `settings`

![image-20231129150628165](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/image-20231129150628165.png)

- **Preferences: Open User Settings (JSON)**:

  这个命令打开的是全局用户设置文件（`settings.json`），这些设置适用于所有项目。

- **Preferences: Open Default Settings (JSON)**:

  这些是 Visual Studio Code 安装后的初始设置，通常你不会直接编辑这个文件。相反，你会在用户设置或工作区设置中覆盖这些默认值。

- **Preferences: Open Workspace Settings (JSON)**:

  这个命令打开的是当前工作区的设置文件，仅适用于当前打开的项目或文件夹。

  这些设置存储在项目目录中的 `.vscode/settings.json` 文件内。

  工作区设置会覆盖用户设置。这意味着，如果同一个设置在用户设置和工作区设置中都被定义了，工作区设置会优先应用。

## Reference

### [monaspace](https://github.com/githubnext/monaspace)

An innovative superfamily of fonts for code.

GitHub 推出的新字体

