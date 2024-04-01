import { z } from 'zod';
// change 3 to 8 min char
export const AuthCredentialsValidator = z.object({
  email: z.string().email(),
  password: z.string().min(3, { message: 'Password must be at least 8 characters long.' }),
});

export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>;
