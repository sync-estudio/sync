import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/case-studies" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      lang: z.enum(["es", "en"]).default("es"),
      subtitle: z.string().optional(),
      client: z.string().optional(),
      industry: z.string().optional(),
      service: z.string().optional(),
      stack: z.array(z.string()).optional(),
      featured: z.boolean().optional(),
      urlSlug: z.string().optional(),
      cover: image().optional(),
    }),
});

export const collections = { blog };
