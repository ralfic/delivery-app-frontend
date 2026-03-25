import z from 'zod';

export const orderFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  address: z
    .string()
    .min(10, { message: 'Please enter a full delivery address' }),
  promoCode: z.string().optional(),
});

export type OrderData = z.infer<typeof orderFormSchema>;
