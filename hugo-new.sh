# Ask user for content type
echo "Enter content type (e.g., post, project, music, book):"
read content_type

# Ask user for the title or filename
echo "Enter the title or filename:"
read title

# Determine content path and archetype based on user input

case $content_type in
    weekly)
	content_path="posts/$title/index.md"
	archetype_path="archetypes/weekly.md"
	;;
    music)
        content_path="like/$title/index.md"
        archetype_path="archetypes/music.md"
        ;;
    book)
        content_path="like/$title/index.md"
        archetype_path="archetypes/book.md"
        ;;
    project)
        content_path="project/$title/index.md"
        archetype_path="archetypes/$content_type.md" # Assuming there's an archetypes/project.md
        ;;
    post)
        content_path="post/$title/index.md"
        archetype_path="archetypes/post.md" # Changed $post.md to post.md
        ;;
    *)
        content_path="$content_type/$title/index.md"
        archetype_path="archetypes/$content_type.md"
        ;;
esac

# Print out the paths for debugging
echo "Using archetype: $archetype_path"
echo "Creating content at: $content_path"

# Create content using Hugo and the specified archetype
hugo new $content_path

echo "Content created successfully!"
