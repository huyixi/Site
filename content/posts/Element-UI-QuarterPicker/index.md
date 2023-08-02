---
title: 季度选择器组件（ElementUI）
date: 2023-08-01T21:21:00+08:00
categories: [blog]
tags: [element]
draft: false
summary: |
 主题：季度选择器组件（ElementUI）<br>
 时间：20230729 - 20230804
---

# 季度选择器组件

**项目地址：**

在公司的项目中，需要多次使用年份季度选择器组件。但是 Element UI 本身并不提供季度选择器组件，所以自行搭建了一个，以便后续复用。

## 使用

1. 安装 Element-plus

   ```bash
   # NPM
   $ npm install element-plus --save
   
   # Yarn
   $ yarn add element-plus
   ```

2. 导入

   ```bash
   // main.ts
   import { createApp } from 'vue'
   import ElementPlus from 'element-plus'
   import 'element-plus/dist/index.css'
   import App from './App.vue'
   
   const app = createApp(App)
   
   app.use(ElementPlus)
   app.mount('#app')
   ```

## 代码

## 分析

Element-Plus 的样式库地址：node_modules/element-plus/theme-chalk
