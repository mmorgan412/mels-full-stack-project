curl --include --request PATCH "http://localhost:4741/trails/${ID}" \
  --header "Content-Type: application/json" \
  --data '{
    "trail": {
      "mountain_name": "'"${MOUNTAIN_NAME}"'",
      "trail_name": "'"${TRAIL_NAME}"'",
      "difficulty": "'"${DIFFICULTY}"'",
      "rating": "'"${RATING}"'"
    }
  }'

  echo
