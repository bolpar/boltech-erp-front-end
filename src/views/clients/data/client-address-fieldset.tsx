import { LegendFieldset } from '@/components/legend-fieldset'
import * as InputText from '@/components/UI/input'

export const ClientAddressFieldset = () => {
  return (
    <>
      <LegendFieldset>ENDEREÇO DO CLIENTE</LegendFieldset>

      {/* <InputText.Root label="CEP">
        <InputText.Text
          disabled
          value="99.999.999.99"
          placeHolder="Digite seu CEP..."
        />
      </InputText.Root> */}

      <InputText.Root label="Endereço">
        <InputText.Text
          disabled
          value="Rua Carlos de Laet, 1221"
          placeHolder="Digite seu endereço..."
        />
      </InputText.Root>
      <InputText.Root label="Complemento">
        <InputText.Text
          disabled
          value="Próximo a cervejaria Bode Brown"
          placeHolder="Digite o completo de sua residência..."
        />
      </InputText.Root>
      <InputText.Root label="Campo Bairro">
        <InputText.Text
          disabled
          value="Hauer"
          placeHolder="Digite seu campo bairro..."
        />
      </InputText.Root>
      <InputText.Root label="Campo Cidade">
        <InputText.Text
          disabled
          value="Curitiba"
          placeHolder="Digite seu campo cidade..."
        />
      </InputText.Root>
      <InputText.Root label="UF">
        <InputText.Text disabled value="PR" placeHolder="Digite o UF..." />
      </InputText.Root>
    </>
  )
}
