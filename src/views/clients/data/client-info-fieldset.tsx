import { LegendFieldset } from '@/components/legend-fieldset'
import * as InputText from '@/components/UI/input'

export const ClientInfoFieldset = () => {
  return (
    <>
      <LegendFieldset>INFORMAÇÕES DO CLIENTE</LegendFieldset>

      <InputText.Root label="Nome">
        <InputText.Text
          disabled
          value="Gabriel Pedroso"
          placeHolder="Digite seu nome..."
        />
      </InputText.Root>
      <InputText.Root label="Fantasia">
        <InputText.Text
          disabled
          value="Pedroso"
          placeHolder="Digite seu nome fantasia..."
        />
      </InputText.Root>
      <InputText.Root label="CPF/CPNJ">
        <InputText.Text
          disabled
          value="099.099099-99"
          placeHolder="Digite seu CPF/CNPJ..."
        />
      </InputText.Root>
      <InputText.Root label="Data de Nascimento">
        <InputText.Text
          disabled
          value="11/11/24"
          placeHolder="Digite sua data de nascimento..."
        />
      </InputText.Root>
    </>
  )
}
