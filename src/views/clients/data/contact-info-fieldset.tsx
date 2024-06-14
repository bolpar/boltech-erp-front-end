import { LegendFieldset } from '@/components/legend-fieldset'
import * as InputText from '@/components/UI/input-text'

export const ContactInfoFieldset = () => {
  return (
    <>
      <LegendFieldset>INFORMAÇÕES DE CONTATO</LegendFieldset>

      <InputText.Root label="Celular">
        <InputText.Input
          disabled
          value="(41) 9 9999-9999"
          placeHolder="Digite seu número de celular..."
        />
      </InputText.Root>
      <InputText.Root label="Telefone">
        <InputText.Input
          disabled
          value="(41) 3333-3333"
          placeHolder="Digite seu número de telefone..."
        />
      </InputText.Root>
      <InputText.Root label="E-mail">
        <InputText.Input
          disabled
          value="gabriellucaspd@gmail.com"
          placeHolder="Digite seu endereço de e-mail..."
        />
      </InputText.Root>
    </>
  )
}
