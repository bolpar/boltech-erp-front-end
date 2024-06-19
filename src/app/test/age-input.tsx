import * as InputText from '@/components/UI/input-text/index'
import { UseFormRegister } from 'react-hook-form'
import { TestData } from './page'

interface AgeInputProps {
  register: UseFormRegister<TestData>
}

export const AgeInput = ({ register }: AgeInputProps) => {
  return (
    <InputText.Root label="Idade">
      <InputText.Input
        placeHolder="Digite a idade"
        register={register('age')}
      />
    </InputText.Root>
  )
}
