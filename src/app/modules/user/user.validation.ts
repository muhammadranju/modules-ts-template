import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    user: z.object({
      name: z.string({ message: 'Name is required' }),
      contact: z.string({ message: 'Contact is required' }),
      email: z.string({ message: 'Email is required' }),
      password: z.string({ message: 'Password is required' }),
      location: z.string({ message: 'Location is required' }),
    }),
  }),
});

const updateUserZodSchema = z.object({
  name: z.string().optional(),
  contact: z.string().optional(),
  email: z.string().optional(),
  password: z.string().optional(),
  location: z.string().optional(),
  image: z.string().optional(),
});

export const UserValidation = {
  createUserZodSchema,
  updateUserZodSchema,
};
