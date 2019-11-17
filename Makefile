.PHONY: download dev build deploy gh-pages clean all

all: download build

download:
	node process/download-doc.js

build:
	rm -rf dist/*
	npm run build
	# npm run encrypt

# upload-assets:
# 	aws s3 rm s3://spectator-static-assets/eoaa/ --recursive --exclude "*" --include "*.mp4" --include "*.png" --include "*.css" --include "*.js" --profile=spec
# 	aws s3 cp dist/ s3://spectator-static-assets/eoaa/ --recursive --exclude "*" --include "*.mp4" --include "*.png" --include "*.css" --include "*.js" --acl=public-read --profile=spec

# deploy:
# 	cd dist && git add . && git commit -m 'Deploy to gh-pages' && git push origin gh-pages

# gh-pages: download build upload-assets deploy

clean:
	rm -rf dist
	git worktree prune
	mkdir dist
	git worktree add dist gh-pages

