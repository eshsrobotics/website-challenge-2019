#!/usr/bin/env bash
# Build release and place (generates in dist folder)
# npm run build

currentBranch="$(git rev-parse --abbrev-ref HEAD)"
# Stop if on master
if [[ "$currentBranch" != "gh-pages" ]]; then
	echo "Build complete; access website in ./dist/index.html"
else
	# Remove directories
	find . -mindepth 1 -maxdepth 1 -type d -not -ipath "./dist" -and -not  -ipath "./.git" -exec rm -vrf {} ";"

	# Remove files
	find . -maxdepth 1 -type f -and -not -ipath "*build.sh" -exec rm -vf {} ";"

	# Move contnts of dist to parent folder
	mv -v ./dist/* ./
	rmdir -v ./dist
fi
