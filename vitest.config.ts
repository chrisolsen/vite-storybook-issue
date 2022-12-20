import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

export default defineConfig({
  // plugins: [

    
  // ],

  plugins: [
    svelte({ 
      preprocess: [
        sveltePreprocess({ typescript: true })
      ],
      hot: !process.env.VITEST,
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
  },
});
