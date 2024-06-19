import * as InputText from '@/components/UI/input-text'
import { LegendFieldset } from '@/components/legend-fieldset'

export const VehicleFieldset = () => {
  return (
    <fieldset className="grid grid-cols-3 gap-4">
      <LegendFieldset>VEÍCULO</LegendFieldset>

      <div className="col-span-full grid grid-cols-3 gap-4">
        <InputText.Root label="Placa">
          <InputText.Input placeHolder="Digite a sua placa...">
            <InputText.SearchButton />
          </InputText.Input>
        </InputText.Root>
        <InputText.Root label="Ano">
          <InputText.Input placeHolder="Digite o ano..." />
        </InputText.Root>
      </div>

      <InputText.Root label="Modelo">
        <InputText.Input placeHolder="Digite o modelo..." />
      </InputText.Root>
      <InputText.Root label="Marca">
        <InputText.Input placeHolder="Digite a marca..." />
      </InputText.Root>
      <InputText.Root label="Tipo do Veículo">
        <InputText.Input placeHolder="Digite o tipo do veículo..." />
      </InputText.Root>
    </fieldset>
  )
}
