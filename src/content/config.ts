import { defineCollection, z } from "astro:content";

const articleCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    topics: z.string().array(),
  }),
  type: "content"
});

export const collections = {
  "articles": articleCollection,
}