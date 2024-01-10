for dir in weekly-*/; do
    # 提取文件夹名字（去掉最后的 '/'）
    dir_name=${dir%/}

    # 复制 'index.md' 到当前目录，并将其重命名为 '文件夹名字.md'
    cp "$dir/index.md" "$dir_name.md"
done
