import { z } from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z
        .string({ required_error: "Password in required" })
        .min(3, { message: "Password must be longer than 3 characters" })
        .max(20)
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;