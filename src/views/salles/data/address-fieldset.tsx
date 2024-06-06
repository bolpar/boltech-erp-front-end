import * as InputText from '@/components/UI/input-text'
import { LegendFieldset } from '@/components/legend-fieldset'

export const AddressFieldset = () => {
  return (
    <fieldset className="grid grid-cols-3 gap-4">
      <LegendFieldset>ENDEREÇO</LegendFieldset>

      <div className="col-span-3 grid grid-cols-3 gap-4">
        <InputText.Root label="CEP">
          <InputText.Input placeHolder="Digite aqui seu CEP..." />
          <InputText.SearchButton />
        </InputText.Root>
        <InputText.Root label="Endereço">
          <InputText.Input placeHolder="Digite aqui seu endereço..." />
        </InputText.Root>

        <div className="col-span-1 flex items-center gap-4">
          <InputText.Root label="Número">
            <InputText.Input placeHolder="Digite aqui seu número..." />
          </InputText.Root>
          <InputText.Root label="Complemento">
            <InputText.Input placeHolder="Digite aqui seu complemento..." />
          </InputText.Root>
        </div>
      </div>

      <div className="col-span-3 grid grid-cols-3 gap-4">
        <InputText.Root label="Bairro">
          <InputText.Input placeHolder="Digite aqui seu bairro..." />
        </InputText.Root>
        <InputText.Root label="Cidade">
          <InputText.Input placeHolder="Digite aqui sua cidade..." />
        </InputText.Root>
        <InputText.Root label="UF">
          <InputText.Input placeHolder="Digite aqui o UF..." />
        </InputText.Root>
      </div>
    </fieldset>
  )
}
