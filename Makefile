.PHONY: dev download build deploy clean

download:
	node process/download-doc.js

dev:
	rm -rf dist/*
	npm run dev

build:
	rm -rf dist/*
	npm run build
	npm run encrypt

deploy: build
	cd dist && git add . && git commit -m 'Deploy to gh-pages' && git push origin gh-pages

clean:
	rm -rf dist
	git worktree prune
	mkdir dist
	git worktree add dist gh-pages

