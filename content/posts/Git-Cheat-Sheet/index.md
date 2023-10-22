---
title: Git 速查手册
date: 2023-08-14T21:00:00+08:00
lastmod: 2023-08-14T21:00:00+08:00
category: [Blog]
tags: [Git, Config]
draft: false
summary: 
---
![git-cheat-sheet](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/git-cheat-sheet.png)

### 全局 Git 忽略

`.DS_Store` 文件是 macOS 文件系统所特有的，并在每个目录中自动创建。这些文件用于存储目录的自定义属性，例如窗口位置、图标位置或背景颜色。对于大多数开发项目，通常不想将这些文件包含在版本控制中。

**解决方案**

1. 在的主目录（通常是 `/Users/你的用户名`）中创建一个名为 `.gitignore_global` 的文件

   ```bash
   touch ~/.gitignore_global
   ```

2. **编辑 `.gitignore_global` 文件**：

   打开刚才创建的 `.gitignore_global` 文件，并添加你想全局忽略的文件和文件夹模式。例如，要忽略所有 `.DS_Store` 文件，你可以添加以下内容：

   ```bash
   .DS_Store
   ```

3. 将刚才创建的 `.gitignore_global` 文件作为全局忽略文件

   ```bash
   git config --global core.excludesfile ~/.gitignore_global
   ```

4. 验证配置

   ```bash
   git config --get core.excludesfile
   ```

5. 如果返回你刚才设置的文件路径,则配置成功.

### 命令行打开远程仓库

#### Git 命令

使用 Git op（或者其他自定义别名）

```bash
git config --global alias.op '!sh -c "open $(git remote get-url origin)"'
```

OP 可以更换为你所想要的其他任何别名

#### 直接输入 op 打开

1. **打开shell配置文件**  
   
   - 对于 **bash**，是 `~/.bashrc` 或 `~/.bash_profile` （macOS）
   - 对于 **zsh**，是 `~/.zshrc`
   - 对于 **fish**，是 `~/.config/fish/config.fish`
   
2. **添加别名**
   在配置文件的底部添加以下内容（以bash或zsh为例）：

   ```bash
   alias op="open $(git remote get-url origin)"
   ```

   如果你使用的是Linux，并且安装了`xdg-open`，你可以这样设置：

   ```bash
   alias op="xdg-open $(git remote get-url origin)"
   ```

   对于Windows的Git Bash或其他shell：

   ```bash
   alias op="start \"\" $(git remote get-url origin)"
   ```

3. **保存并关闭配置文件**

4. **使更改生效**
   要使新的别名生效，你需要重新加载配置文件或重启你的shell。对于bash或zsh，你可以运行：

   ```bash
   source ~/.bashrc  # 或 source ~/.zshrc 或 source ~/.bash_profile
   ```

### 创建 Git 历史视图

```bash
git config --global alias.lg "log --oneline --all --graph --decorate"

git lg
```

### 自动设置上游分支

```bash
git config --global push.default current
```

