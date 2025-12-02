import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://FernandoUAGRM.githob.io',
  output: "static",   // IMPORTANTE para GitHub Pages
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false
    })
  ]
});
