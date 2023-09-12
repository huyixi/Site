---
title: "Element UI Cheat Sheet"
subtitle: ""
date: 2023-09-12T22:15:03+08:00
draft: false
tags: []
category: [Blog]
summary: 
---

记录工作中常常需要修改的一些 element-ui 原生样式

### el-select 的下拉框样式

使用 popper-class 自定义下拉框类名

```css
/* Base styles for Custom Dropdown */
.custom-dropdown .el-select-dropdown{
  background-color: #fff;
  border-color: #dddfe5;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .4);
}

/* Dropdown Arrow */
.custom-dropdown .arrow {
  border-bottom-color: #fff !important;
}

/* Dropdown Border */
.custom-dropdown .dropdown {
  border-color: #dddfe5;
}

/* Dropdown Items */
.custom-dropdown .dropdown-item {
  color: #000;
  background-color: #fff;
}

/* Dropdown Item Hover & Selected State */
.custom-dropdown .dropdown-item:hover,
.custom-dropdown .dropdown-item.selected,
.custom-dropdown .dropdown-item.hover {
  color: #fff;
  background-color: #64b6f8;
}

/* Scrollbar Bottom Track */
.custom-dropdown ::-webkit-scrollbar-track-piece {
  background-color: #fff;
}
```

