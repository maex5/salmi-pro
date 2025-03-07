#!/bin/bash

# Create public directory if it doesn't exist
mkdir -p public

# List of images to download
images=(
  "tori.png"
  "mb.png"
  "audi.jpg"
  "agoedu.png"
  "laurea.jpg"
  "norsen.png"
  "ultrahack.png"
  "slush.png"
  "hyvinvointi.png"
  "max.jpg"
)

# Download each image
for img in "${images[@]}"; do
  echo "Downloading $img..."
  curl -o "public/$img" "https://salmi.pro/$img"
done

echo "Done downloading images!" 