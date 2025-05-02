import { defineCollection, z } from "astro:content";

const ZArticleSchema = z.object({
  title: z.string(),
  summary: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  topics: z.string().array(),
  isDraft: z.boolean(),
});

export type TArticle = z.infer<typeof ZArticleSchema>;

const articleCollection = defineCollection({
  schema: ZArticleSchema,
  type: "content",
});

export const collections = {
  articles: articleCollection,
};
