import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx({
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  }), tailwind()],
  redirects: {
    "/blog/[...slug]": "/articles/[...slug]"
  }
});