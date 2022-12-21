nx-build:
	npx nx run-many --target=build

test:
	npx vitest 'packages/web-components'

storybook:
	npx nx storybook docs
