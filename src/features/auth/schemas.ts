import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().trim().min(1, "Password is required"),
});

export const registerSchema = z.object({
  fullName: z.string().trim().min(3, "Minimum 3 characters"),
  email: z.string().email(),
  password: z.string().min(8, "Minimum 8 characters"),
});
