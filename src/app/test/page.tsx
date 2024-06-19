'use client'

import * as InputText from '@/components/UI/input-text/index'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { AgeInput } from './age-input'
import { EmailInput } from './email-input'
// import { AgeInput } from './age-input'
// import { EmailInput } from './email-input'

const testSchema = z.object({
  name: z.string().min(1),
  age: z.string().min(1),
  email: z.string().min(1),
})

export type TestData = z.infer<typeof testSchema>

export default function Test() {
  const { register, handleSubmit, formState } = useForm<TestData>({
    resolver: zodResolver(testSchema),
  })

  async function onSubmitTest(data: TestData) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmitTest)} className="mt-16">
      <pre>{formState.errors.age?.message}</pre>
      <pre>{formState.errors.name?.message}</pre>
      <pre>{formState.errors.email?.message}</pre>

      <InputText.Root label="Nome">
        <InputText.Input
          placeHolder="Digite o nome"
          register={register('name')}
        />
      </InputText.Root>

      <AgeInput register={register} />

      <EmailInput register={register} />

      <button type="submit">Enviar</button>
    </form>
  )
}
