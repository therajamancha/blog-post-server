import { z } from "zod";

export const blogPostValidation = z.object({
  title: z.string().min(1, {
    message: "Title is required.",
  }),
  content: z.string().min(1, {
    message: "Content is required.",
  }),
});

export type BlogPostType = z.infer<typeof blogPostValidation>;
