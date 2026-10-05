import * as z from "zod";

export const ZALert = z.object({
  displayName: z.string(),
  description: z.string(),
  priority: z.string(),
  arena: z.string(),
  status: z.string(),
  lon: z.number(),
  lat: z.number(),
});

export const ZALertUpdate = z.object({
  displayName: z.string().optional(),
  description: z.string().optional(),
  priority: z.string().optional(),
  arena: z.string().optional(),
  status: z.string().optional(),
  lon: z.number().optional(),
  lat: z.number().optional(),
});
