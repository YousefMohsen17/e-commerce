import * as z from "zod";
export const LoginSchema = z.object({
  email: z.email("Invalid Email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
export type LoginSchemaType = z.infer<typeof LoginSchema>;
