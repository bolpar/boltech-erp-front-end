import * as InputText from '@/components/UI/input'
import { LegendFieldset } from '@/components/legend-fieldset'
import { useFormContext } from 'react-hook-form'
import { VehiclesAndInstallerFormData } from './@form/vehicles-and-installer-schema'

export const VehicleFieldset = () => {
  const { register } = useFormContext<VehiclesAndInstallerFormData>()

  return (
    <fieldset className="grid grid-cols-3 gap-4">
      <LegendFieldset>VEÍCULO</LegendFieldset>

      <div className="col-span-full grid grid-cols-3 gap-4">
        <InputText.Root label="Placa">
          <InputText.Text<VehiclesAndInstallerFormData>
            fieldName="input.veiculo.upsert.placa"
            placeHolder="Digite a sua placa..."
          >
            <InputText.SearchButton />
          </InputText.Text>
        </InputText.Root>
        <InputText.Root label="Ano">
          <InputText.Text<VehiclesAndInstallerFormData> placeHolder="Digite o ano..." />
        </InputText.Root>
      </div>

      <InputText.Root label="Modelo">
        <InputText.Text<VehiclesAndInstallerFormData> placeHolder="Digite o modelo..." />
      </InputText.Root>
      <InputText.Root label="Marca">
        <InputText.Text<VehiclesAndInstallerFormData> placeHolder="Digite a marca..." />
      </InputText.Root>
      <InputText.Root label="Tipo do Veículo">
        <InputText.Text<VehiclesAndInstallerFormData> placeHolder="Digite o tipo do veículo..." />
      </InputText.Root>
    </fieldset>
  )
}
