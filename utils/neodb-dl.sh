#! /bin/bash

download_category() {
  category=$1
  base_url="https://neodb.social/api/me/shelf/complete?category=$category&page="
  accept_header='accept: application/json'
  auth_header='Authorization: Bearer ${{ secrets.NEODB_TOKEN }}'

  curl -X 'GET' "${base_url}1" \
      -H "$accept_header" \
      -H "$auth_header" > "${category}1.json"

  pages=$(jq '.pages' "${category}1.json")

  for ((i=2; i<=$pages; i++)); do
    url="${base_url}$i"
    filename="${category}$i.json"

    curl -X 'GET' "$url" \
      -H "$accept_header" \
      -H "$auth_header" > "$filename"
  done
}

categories=("book" "movie" "music" "podcast")

for category in "${categories[@]}"; do
  download_category $category
done

# Combine all JSON files into one
jq -s 'reduce .[] as $item ({}; .data += $item.data | .pages += $item.pages | .count += $item.count)' *.json > neodb.json

# Delete the original JSON files
for category in "${categories[@]}"; do
  rm ${category}*.json
done
