nx-build:
	npx nx run-many --target=build

test:
	npx vitest 'packages/web-components'

test-watch:
	npx vitest 'packages/(react-components|web-components)' --watch