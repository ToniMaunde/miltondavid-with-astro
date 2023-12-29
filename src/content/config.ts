import { defineCollection, z } from "astro:content";

const ZArticleSchema = z.object({
  title: z.string(),
  description: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  topics: z.string().array(),
});

export type TArticle = z.infer<typeof ZArticleSchema>;

const articleCollection = defineCollection({
  schema: ZArticleSchema,
  type: "content"
});

export const collections = {
  "articles": articleCollection,
}