import type { TArticle } from "./content/config.ts"

export type TArticleEntry = {
  id: string
  slug: string
  body: string
  collection: string
  data: TArticle
}
