import { z } from 'zod'

export const basicInfoFormSchema = z.object({
  name: z.string(),
  age: z.number(),
})

export type BasicInfoForm = z.infer<typeof basicInfoFormSchema>
