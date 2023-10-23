---
title: "Element UI Cheat Sheet"
subtitle: ""
date: 2023-09-12T22:15:03+08:00
lastmod: 2023-09-12T22:15:03+08:00
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

### el-cascader 绑定多数据

Cascader 只能绑定一个 value，但是工作中常常遇到几个值绑定在一起，需要同时获取到这几个值的数据。比如一个地区的多重嵌套数据，要获取到地区名，地区编码，地区级别。目前的解决方案是再写一个查询的函数。

多层嵌套数据 Options 的提取：

```javascript
function convertToCascaderOptions(data) {
  return data.map(item => {
    const option = {
      value: item.id,
      label: item.name
    };
    if (item.children && item.children.length > 0) {
      option.children = convertToCascaderOptions(item.children);
    }
    return option;
  });
}
```



查询函数：

```javascript
function getObjByValue(targetKey,targetValue,children,nestedArray){
  for(let item of nestedArray){
    if(item[targetKey] === targetValue){
      return item
    }
    if(item[children]){
      const result = getObjByValue(targetKey,targetValue,children,item[children])
      if(result){
      return result
      }
    }
  }
  return null;
}
```

