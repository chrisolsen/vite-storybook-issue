const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  settings: {
    'svelte3/compiler-options': {
      generate: false,
      customElement: true
    },
  },
  compilerOptions: {
    customElement: true
  },
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(),
};
