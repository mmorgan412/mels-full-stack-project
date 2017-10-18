curl --include --request PATCH "http://localhost:4741/appointments/${ID}" \
  --header "Content-Type: application/json" \
  --data '{
    "trail": {
      "TRAIL_NAME": "'"${TRAIL_NAME}"'"
    }
  }'
