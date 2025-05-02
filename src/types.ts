import type { TArticle } from "./content/config.ts";

export type TTwitterMeta = {
  name:
    | "twitter:card"
    | "twitter:site"
    | "twitter:creator"
    | "twitter:title"
    | "twitter:description";
  content: string;
};

export type TArticleEntry = {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: TArticle;
};
