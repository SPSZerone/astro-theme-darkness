import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

const isDev = process.env.NODE_ENV === 'development';

// https://astro.build/config
export default defineConfig({
  site: 'https://darkness.me.seapianosnow.com',
  base: '/',
  trailingSlash: isDev ? 'ignore' : 'always',
  devToolbar: {
    enabled: false
  },
  integrations: [mdx(), sitemap(), icon()],
  vite: {
    resolve: {
      preserveSymlinks: true,
    },
  },
});