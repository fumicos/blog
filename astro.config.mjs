import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import robotsTxt from 'astro-robots-txt';
import webmanifest from 'astro-webmanifest';
import vue from "@astrojs/vue";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://fumicoswork.netlify.app",
  experimental: {
    integrations: true
  },
  integrations: [vue(), mdx(), sitemap(), tailwind(), compress({
    css: true,
    html: false,
    js: true,
    img: false,
    svg: false
  }), robotsTxt({
    sitemapBaseFileName: 'sitemap-index',
    policy: [{
      userAgent: 'Googlebot',
      allow: '/',
      crawlDelay: 2
    }]
  }), webmanifest({
    name: 'fumicos',
    icon: './public/favicon.svg',
    lang: 'en-US',
    short_name: 'fumicos',
    description: "This is fumicos.",
    theme_color: '#ef4444',
    background_color: '#ef4444',
    display: 'standalone'
  }), vue()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  output: "server",
  adapter: node({
    mode: 'standalone'
  })
});