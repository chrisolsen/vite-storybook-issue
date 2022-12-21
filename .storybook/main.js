module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials'],
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
  // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
  ,

  core: {
    builder: '@storybook/builder-webpack5'
  },
  docs: {
    docsPage: 'automatic'
  }
};