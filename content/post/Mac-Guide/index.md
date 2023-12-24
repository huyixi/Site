---
title: Mac 使用指南
date: 2023-06-01T02:53:00+08:00
lastmod: 2023-12-03
category: [Article]
tags: [Mac]
draft: false
---

# Mac 使用指南

## 软件

### Mackup

备份 Mac 上的应用设置

- [仓库地址](https://github.com/lra/mackup)

- [文档](https://github.com/lra/mackup/blob/master/doc/README.md)

#### issue:

备份 iTerm2 错误

```bash
brew install the_silver_searcher
ag -U -g iterm2.cfg $(brew --prefix)
```

```
[application]
name = iTerm2
[configuration_files]
Library/Preferences/com.googlecode.iterm2.plist

[xdg_configuration_files]
$XDG_CONFIG_HOME/iterm2/AppSupport/DynamicProfiles
```

## ISSUE

### 中文输入法卡死(fixed: macos 14.2)

#### 解决方案:

- 换成第三方输入法,如 Rime

- ```bash
  pkill -9 SCIM_Extension
  ```

#### 应用程序提示`"XXX" is damaged and can't be opened. You should move it to the Trash`

命令行输入

```bash
sudo xattr -r -d com.apple.quarantine /YOUR_PATH/XXX.app
```

一般路径是：

```bash
sudo xattr -r -d com.apple.quarantine /Applications/XXX.app
```



### 修改 Mac 上所有代码文件的默认打开方式为 VS Code

Mac 上很多代码文件的打开方式是XCode。Xcode 很重很不方便，修改为常用的代码编辑器 VS Code 能更为合适。当然你也可以修改的下面的代码将它改为你想要打开文件的应用程序。

```bash
# https://github.com/moretension/duti
brew install duti
# from https://github.com/vscode-icons/vscode-icons/blob/74220b6f8389ad5c5d9f68b2029d91460de2b374/src/iconsManifest/languages.ts#L319
filetypes=(.as .ada .prw .affect .al .ansible .g4 .any .htaccess .cls .apib .apl .applescript .adoc .asp .asm .ats .ahk .au3 .avcs .azcli .azure-pipelines.yml .bal .bat .bats .bzl .bf .bicep .bib .biml .blade.php .blitzbasic .bolt .bsq .buf.yaml .c .cal .cabal .Caddyfile .casc .cddl .ceylon .cfc .cfm .clojure .clojurescript .yml .cmake .CMakeCache.txt .cbl .ql .coffee .cfml .confluence .ckbk .cpp .h .cr .cs .css .feature .cu .pyx .dal .dart .dhall .html .diff .d .dockerfile .dtx .env .dot .dox .drl .dust .dylan .earthfile .edge .eex .es .ex .elm .erb .erl .yaml .falcon .fql .f .ftl .fs .fthtml .gspec .gml .gcode .gen .git .glsl .glyphs .gp .go .api .gd .gr .gql .gv .groovy .haml .hbs .prg .hs .haxe .hcl .helm.tpl .hjson .hlsl .hosts .http .aff .hy .hypr .icl .imba .4gl .ini .ink .iss .io .janet .java .js .jsx .jekyll .jenkins .jinja .json .jsonc .jsonnet .json5 .jl .id .k .kv .ks .kt ..kusto .tex .lat .less .flex .ly .lisp .lhs .log .lol .lsl .lua .mk .marko .mat .ms .mdx .mediawiki .mel .mmd .meson.build .mjml .pq .ep .mongo .mson .ne .nim .nimble .nix .nsi .nunjucks .m .mm .ml .o3 .w .things .pas .pddl .plan .happenings .pl .pl6 .pgsql .php .pine .requirements.txt .txt .dbgasm .ddl .polymer .pony .pcss .ps1 .prisma .pde .pro .rules .properties .proto .pug .pp .purs .arr .py .pyowo .qvs .qml .qs .r .rkt .cshtml .raml .re .red .res .rst .rex .tag .rmd .robot .rb .rs .san .sas .sbt .scad .scala .sce .scss .sdl .shader .sh .slang .ice .slim .ss .sn .eskip .tpl .snort .sol .rq .sqf .sql .nut .stan .bazel .do .stencil .html.stencil .st.css .styled .styl .svelte .swagger .swift .swig .link .sv .tt .teal .tt3 .tera .tf .sty .textile .JSON-tmLanguage .YAML-tmLanguage .Tiltfile .toit .toml .ttcn3 .tuc .twig .ts .tsx .typoscript .u .vb .wsf .vm .v .vhdl .vim .volt .vue .wai .wasm .wy .wgsl .wt .wl .wurst .wxml .xmake.lua .xml .xquery .xsl .bison .yang .zig)

for filetype in "${filetypes[@]}"
do
   duti -s com.microsoft.VSCode $filetype all
   if [ $? -ne 0 ]; then
      echo "Failed to set default program for $filetype"
   fi
done
```



上述代码删除了 .md 的打开方式

如果遇到

```
failed to set com.microsoft.VSCode as handler for public.html (error -54)
Failed to set default program for .html
```

可以手动更改 .html 文件的打开方式。具体为：

1. 右键 .html 文件
2. 点击 get info
3. Open with 修改为 VS Code
4. Change All

相关文档说明：

- [Launch Service API failure with specific UTI ](https://developer.apple.com/forums/thread/50029)
- https://stackoverflow.com/questions/26241689/lssetdefaultrolehandlerforcontenttype-in-yosemite

#### 删除系统自带输入法

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

2. 重启系统后，打开终端，输入以下命令，打开文件(需要使用 `XCode` 或者 `PlistEdit Pro` 打开)

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

### 全局移除 .DS_Store 的 git 跟踪

1. **Create a global `.gitignore` file** (if it doesn't already exist):

   ```bash
   touch ~/.gitignore_global
   ```
   
2. **Edit this file** and add `.DS_Store`:

   ```bash
   echo ".DS_Store" >> ~/.gitignore_global
   ```
   
3. **Configure Git to use this file as the global `.gitignore`**:

   ```bash
   git config --global core.excludesfile ~/.gitignore_global
   ```

对于已经提交跟踪的仓库:

```bash
git rm --cached .DS_Store
git commit -m "Removed .DS_Store from repository
```

#### **显示隐藏文件**

在 Finder 中，按下 `Command`（⌘）+ `Shift`（⇧）+ `.`（点）。这个快捷键会切换隐藏文件的显示状态。按一次这个快捷键，隐藏文件将会显示；再按一次，隐藏文件将会再次被隐藏。

### 下载站点

- [麦克搜](https://www.imacso.com)

- [FileCR](https://www.filecr.com)
