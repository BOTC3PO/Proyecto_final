import { z } from "zod";

export const BookSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  book: z.record(z.string(), z.unknown()),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime()
});

export type BookRecord = z.infer<typeof BookSchema>;
