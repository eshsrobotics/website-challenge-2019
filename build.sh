#!/usr/bin/env bash

# We assume we're on the gh-pages release branch

## 1 ##
# Build release and place (generates in dist folder)
npm run build

local currentBranch="$(git rev-parse --abrev-ref HEAD)"
# Stop if on master
if [[ "$currentBranch" != "gh-pages" ]]; then
	echo "Build complete; access website in ./dist/index.html"

else
	# Erase dir contents
	# folders
	find . -mindepth 1 -maxdepth 1 -type d -not -ipath "./dist" -and -not  -ipath "./.git" -exec echo rm -vf {} ";"

	# erase files
	find . -maxdepth 1 -type f -and -not -ipath "*build.sh" -exec echo rm - vf {} ";"

	echo mv -vf ./dist/* ./
	echo rmdir -vf ./dist
fi
