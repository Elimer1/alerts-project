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
