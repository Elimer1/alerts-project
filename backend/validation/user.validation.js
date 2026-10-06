import * as z from "zod";

export const ZUSer = z.object({
  username: z.string(),
  password: z.string(),
  email: z.email(),
  role: z.string(),
  assignedArena: z.string(),
});

export const ZUSerLogin = z.object({
  email: z.email(),
  password: z.string(),
});
