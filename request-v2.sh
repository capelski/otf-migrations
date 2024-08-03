curl \
  --header "Content-Type: application/json" \
  --request POST \
  --data "{\"title\": \"Enough excuses\", \"description\": \"Write that medium article I've been postponing\", \"schema\": 1}" \
  http://localhost:3000/notes
