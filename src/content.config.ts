import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/case-studies" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    subtitle: z.string().optional(),
    client: z.string().optional(),
    industry: z.string().optional(),
    service: z.string().optional(),
    stack: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    slug: z.string().optional(),
    cover: z.string().optional(),
  }),
});

export const collections = { blog };
