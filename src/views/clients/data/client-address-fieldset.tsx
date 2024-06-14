import { LegendFieldset } from '@/components/legend-fieldset'
import * as InputText from '@/components/UI/input-text'

export const ClientAddressFieldset = () => {
  return (
    <>
      <LegendFieldset>ENDEREÇO DO CLIENTE</LegendFieldset>

      <InputText.Root label="CEP">
        <InputText.Input
          disabled
          value="99.999.999.99"
          placeHolder="Digite seu CEP..."
        />
      </InputText.Root>

      <InputText.Root label="Endereço">
        <InputText.Input
          disabled
          value="Rua Carlos de Laet, 1221"
          placeHolder="Digite seu endereço..."
        />
      </InputText.Root>
      <InputText.Root label="Complemento">
        <InputText.Input
          disabled
          value="Próximo a cervejaria Bode Brown"
          placeHolder="Digite o completo de sua residência..."
        />
      </InputText.Root>
      <InputText.Root label="Campo Bairro">
        <InputText.Input
          disabled
          value="Hauer"
          placeHolder="Digite seu campo bairro..."
        />
      </InputText.Root>
      <InputText.Root label="Campo Cidade">
        <InputText.Input
          disabled
          value="Curitiba"
          placeHolder="Digite seu campo cidade..."
        />
      </InputText.Root>
      <InputText.Root label="UF">
        <InputText.Input disabled value="PR" placeHolder="Digite o UF..." />
      </InputText.Root>
    </>
  )
}
