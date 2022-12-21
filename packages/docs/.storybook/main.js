const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,
  core: { builder: '@storybook/builder-vite' },
  stories: [
    ...rootMain.stories,
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons],
};

