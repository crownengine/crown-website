#!/bin/sh

OUTPUT_JSON="src/data/download/releases.json"
wget --output-document "${OUTPUT_JSON}" https://api.github.com/repos/crownengine/crown/releases

git add "${OUTPUT_JSON}"
git commit -m "download: update releases.json"
