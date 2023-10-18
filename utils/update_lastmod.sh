#!/bin/bash

# 获取所有更改的 Markdown 文件
CHANGED_FILES=$(git diff --cached --name-only --diff-filter=AM | grep '\.md$')

CURRENT_DATE=$(date +"%Y-%m-%d")

# 遍历所有更改的 Markdown 文件
for FILE in $CHANGED_FILES; do
    # 检查文件中是否存在 lastmod 参数
    if grep -q "^lastmod:" $FILE; then
        # 更新 lastmod 日期
        sed -i '' -e "/^lastmod:/c\\
lastmod: $CURRENT_DATE" $FILE
    else
        # 否则，在文件的前置参数部分添加 lastmod 参数
        sed -i '' -e "/^---/a\\
lastmod: $CURRENT_DATE" $FILE
    fi
done
