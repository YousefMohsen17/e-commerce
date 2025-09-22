import * as z from "zod";
export const RegisterSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.email("Invalid Email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    rePassword: z.string().min(6),
    phone: z.string().regex(/^01[0125][0-9]{8}$/, "Invalid phone number"),
  })
  .refine((data) => data.password === data.rePassword, {
    error: "Passwords do not match",
    path: ["rePassword"],
  });
export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
