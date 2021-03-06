#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# deploy the latest build

# first to surge.sh
surge --domain torius.surge.sh

# secondly to github pages
git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:MatthijsJWH/torius-soundboard-app master:gh-pages
# return to main folder
cd -