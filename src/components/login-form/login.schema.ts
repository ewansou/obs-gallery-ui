import { z } from "zod";

export const PasswordSchema = z.object({
  password: z.string({ required_error: "Password is required" }).trim().min(1, {
    message: "Password is required",
  }),
});
