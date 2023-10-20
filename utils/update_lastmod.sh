CHANGED_FILES=$(git diff --cached --name-only --diff-filter=AM content/ | grep '\.md$')

CURRENT_DATE=$(date +"%Y-%m-%d")

for FILE in $CHANGED_FILES; do
    if git diff --cached "$FILE" | grep -q "^+lastmod:"; then
        echo "Skipping $FILE as lastmod has been manually modified."
        continue
    fi
    
    if grep -q "^lastmod:" $FILE; then
        sed -i '' -e "/^lastmod:/c\\
lastmod: $CURRENT_DATE" $FILE
    else
        sed -i '' -e "/^---/a\\
lastmod: $CURRENT_DATE" $FILE
    fi
done
