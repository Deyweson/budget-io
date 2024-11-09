import { z } from 'zod'

const company = z.object({
  name: z.string(),
  email: z.string().email(),
  address: z.string(),
  id: z.string(),
  fone: z.string()
})
const client = z.object({
  name: z.string(),
  email: z.string().email(),
  address: z.string(),
  id: z.string(),
  fone: z.string()
})
const products = z.array(z.object({
  code: z.string(),
  description: z.string(),
  quant: z.number().nonnegative(),
  price: z.number().nonnegative(),
  totalPrice: z.number().nonnegative()
}))

export const budgetSchema = z.object({
  company,
  client,
  products
})

export type Products = z.infer<typeof products>
export type Company = z.infer<typeof company>
export type Client = z.infer<typeof client>
export type Budget = z.infer<typeof budgetSchema>