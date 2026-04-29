#!/bin/bash

set -eu

NOCONFIRM=0
PUSH=0

while [ $# -gt 0 ]; do
	case "$1" in
	-h|--help)
		echo "Usage: $0 [options]"
		echo ""
		echo "Options:"
		echo "  --noconfirm  Skip any user confirmations."
		echo "  --push       Push changes to remote."
		echo ""
		exit 0
		;;
	--noconfirm)
		NOCONFIRM=1
		shift
		;;
	--push)
		PUSH=1
		shift
		;;
	-*)
		echo "Unknown option $1"
		exit 1
		;;
	*)
		echo "Unknown argument $1"
		exit 1
		;;
	esac
done

if [ ! -f package.json ]; then
	echo "Run this script from the website source branch."
	exit 1
fi

if ! git diff --quiet || ! git diff --cached --quiet; then
	echo "Working tree has tracked changes."
	exit 1
fi

UNTRACKED=$(git ls-files --others --exclude-standard -- ':!public')
if [ -n "${UNTRACKED}" ]; then
	echo "Working tree has untracked files."
	exit 1
fi

if [ "${NOCONFIRM}" -eq 0 ]; then
	echo "Website will be released"
	echo "Continue? [y/N]"
	read -r answer
	if [ "${answer}" != "y" ] && [ "${answer}" != "Y" ]; then
		echo "Bye."
		exit 0
	fi
fi

SOURCE_COMMIT=$(git rev-parse --short HEAD)

npm run clean
npm run build
echo 'www.crownengine.org' > ./public/CNAME

git fetch origin gh-pages:gh-pages >/dev/null 2>&1 || true
git checkout gh-pages || git checkout --orphan gh-pages
git rm -rf . >/dev/null 2>&1 || true

cp -a public/. .
rm -rf public

git add --all
git commit -m "Deploy ${SOURCE_COMMIT}" || exit 0

if [ "${PUSH}" -eq 1 ]; then
	git push origin gh-pages
fi
