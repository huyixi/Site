---
title: "Anaconda Cheat Sheet"
subtitle: "Anaconda 速查手册"
date: 2023-09-09T10:39:52+08:00
lastmod: 2023-09-09T10:39:52+08:00
draft: false
tags: []
category: [Blog]
summary: 
---

![image-20230909104618623](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/image-20230909104618623.png)

## Using environment

### Save env to a yaml file

- Export the environment to a 'yml' file

  ```bash
  conda env export > env.yml
  ```

- Transfer the file to another machine

- Create the Environment on the New Machine

  ```bash
  conda create -f env.yml --name envname
  ```

  
