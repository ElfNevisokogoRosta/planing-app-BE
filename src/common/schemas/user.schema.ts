import { z } from 'zod';

const userSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

const createUser = userSchema.required();
const updateUser = userSchema.partial();

export type CreateUserDto = z.infer<typeof createUser>;
export type UpdateUserDto = z.infer<typeof updateUser>;
