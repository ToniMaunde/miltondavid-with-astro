import { defineConfig, passthroughImageService } from 'astro/config';
import mdx from "@astrojs/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

// https://astro.build/config
export default defineConfig({
  output: "static",
  image: {
    service: passthroughImageService()
  },
  integrations: [mdx({
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
  }), ],
  redirects: {
    "/blog/[slug]": "/articles/[slug]"
  },
  site: "https://miltondavid.com",
});
