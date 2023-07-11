---
title: 周刊#12：
date: 2023-07-08T03:36:00+08:00
categories: [weekly]
tags: [weekly]
draft: false
summary: |
 主题：<br>
 时间：20230625 - 20230701
---

## 动态

## 文章

### 修改 Mac 上所有代码文件的默认打开方式为 VS Code

Mac 上很多代码文件的打开方式是XCode。Xcode 很重很不方便，修改为常用的代码编辑器 VS Code 能更为合适。当然你也可以修改的下面的代码将它改为你想要打开文件的应用程序。

[batch-modify.sh](https://gist.github.com/rxliuli/00fd29e1c01b9a11c841dead5c3b2e98)

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

```bash
failed to set com.microsoft.VSCode as handler for public.html (error -54)
Failed to set default program for .html
```

可以手动更改 .html 文件的打开方式。具体为：

1. 右键 .html 文件
2. 点击 get info
3. Open with 修改为 VS Code
4. Change All



### SVG 路径动画详解

[Not a Number](https://www.nan.fyi/svg-paths)



## 资源

[decap-cms](https://decapcms.org)

A Git-based CMS for Static Site Generators

适用于 Hugo，Hexo 等等

