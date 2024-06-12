import * as InputText from '@/components/UI/input-text'
import { LegendFieldset } from '@/components/legend-fieldset'

export const BasicInfoFieldset = () => {
  return (
    <fieldset className="grid grid-cols-3 gap-4">
      <LegendFieldset>INFORMAÇÕES BÁSICAS</LegendFieldset>

      <InputText.Root label="Nome">
        <InputText.Input placeHolder="Digite aqui seu nome..." />
      </InputText.Root>
      <InputText.Root label="CPF/CNPJ" optional>
        <InputText.Input placeHolder="Digite aqui seu CPF/CNPJ..." />
      </InputText.Root>
      <InputText.Root label="Data de Nascimento" optional>
        <InputText.Input placeHolder="Digite aqui a sua data de nascimento..." />
      </InputText.Root>
      <InputText.Root label="E-mail">
        <InputText.Input placeHolder="Digite aqui seu endereço de e-mail..." />
      </InputText.Root>
      <InputText.Root label="Celular">
        <InputText.Input placeHolder="Digite aqui seu número de celular..." />
      </InputText.Root>
      <InputText.Root label="Telefone" optional>
        <InputText.Input placeHolder="Digite aqui seu número de telefone..." />
      </InputText.Root>
    </fieldset>
  )
}
