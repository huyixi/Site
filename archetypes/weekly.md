{{/* Define nextFriday function */}}
{{- define "nextFriday" -}}
  {{- $now := now -}}
  {{- $dayOfWeek := $now.Weekday -}}
  {{- $daysUntilFriday := sub 5 $dayOfWeek -}}
  {{- $nextFriday := $now.AddDate 0 0 (int $daysUntilFriday) -}}
  {{- dateFormat "2006-01-02T08:00:00Z08:00" $nextFriday -}}
{{- end -}}

---
title: {{ replace .Name "-" " " | title }}
date: {{- " " -}}{{- template "nextFriday" .Date -}}{{- "\n" -}}
categories: [weekly]
tags: [weekly]
draft: false
---
> 系统的知识来源于对碎片的整理和思考。为了更好地输出系统知识，我在这里记录本周的发现和思考，为构建系统知识做准备。
## 文章
## 工具
## 资源
## 言论
