import * as InputText from '@/components/UI/input-text/index'
import { UseFormRegister } from 'react-hook-form'
import { TestData } from './page'

interface EmailInputProps {
  register: UseFormRegister<TestData>
}

export const EmailInput = ({ register }: EmailInputProps) => {
  return (
    <InputText.Root label="E-mail">
      <InputText.Input
        placeHolder="Digite aqui o seu e-mail..."
        register={register('email')}
      />
    </InputText.Root>
  )
}
