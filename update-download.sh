#!/bin/sh

OUTPUT_JSON="src/data/download/releases.json"
VERSION_JSON="static/version.json"

wget --output-document "${OUTPUT_JSON}" https://api.github.com/repos/crownengine/crown/releases/latest

VERSION=$(sed -n 's/.*"tag_name"[[:space:]]*:[[:space:]]*"v\([^"]*\)".*/\1/p' "${OUTPUT_JSON}" | head -n 1)

if [ -z "${VERSION}" ]; then
    echo "error: could not extract tag_name from ${OUTPUT_JSON}" >&2
    exit 1
fi

mkdir -p "$(dirname "${VERSION_JSON}")"
printf '{"stable":{"crown":"%s"}}\n' "${VERSION}" > "${VERSION_JSON}"

git add "${OUTPUT_JSON}" "${VERSION_JSON}"
git commit -m "download: update releases.json"
