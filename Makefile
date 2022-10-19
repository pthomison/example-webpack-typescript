init:
	npm install

serve:
	npx webpack serve

build:
	npx webpack

serve-build:
	cd web && python3 -m http.server 8080