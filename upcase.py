import os

# Path to your content directory
content_path = "content/"

for subdir, dirs, files in os.walk(content_path):
    for file in files:
        if file.endswith('.md'):
            filepath = os.path.join(subdir, file)
            
            with open(filepath, 'r') as f:
                content = f.read()

                # Task 1: Replace 'categories' with 'category'
                content = content.replace('categories:', 'category:')

                # Task 2: Convert the value of 'category' to start with an uppercase letter
                lines = content.split("\n")
                for i, line in enumerate(lines):
                    if line.strip().startswith("category:"):
                        category_value = line.split("[")[1].split("]")[0]
                        category_value = category_value.strip('"').capitalize()
                        lines[i] = f'category: [{category_value}]'
                content = "\n".join(lines)

            with open(filepath, 'w') as f:
                f.write(content)

print("Files updated successfully!")
