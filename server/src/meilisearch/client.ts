import { MeiliSearch } from "meilisearch";

const client = new MeiliSearch({
  host: process.env.MEILISEARCH_HOST ?? "",
  apiKey: process.env.MEILISEARCH_KEY ?? "",
});

export { client as meilisearchClient };
