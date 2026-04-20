import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const isDev = process.env.NODE_ENV === 'development';

// https://astro.build/config
export default defineConfig({
  site: 'https://darkness.me.seapianosnow.com',
  base: '/',
  trailingSlash: isDev ? 'ignore' : 'always',
  integrations: [mdx(), sitemap()],
});
