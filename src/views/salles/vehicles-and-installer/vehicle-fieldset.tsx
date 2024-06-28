import * as InputText from '@/components/UI/input'
import { LegendFieldset } from '@/components/legend-fieldset'
import { useFormContext } from 'react-hook-form'
import { VehiclesAndInstallerFormData } from './@form/vehicles-and-installer-schema'

export const VehicleFieldset = () => {
  const {
    formState: { errors },
  } = useFormContext<VehiclesAndInstallerFormData>()
  const errorMessage = errors.input?.veiculo?.upsert

  return (
    <fieldset className="grid grid-cols-3 gap-4">
      <LegendFieldset>VEÍCULO</LegendFieldset>

      <div className="col-span-full grid grid-cols-3 gap-4">
        <InputText.Root label="Placa" optional>
          <InputText.Text<VehiclesAndInstallerFormData>
            fieldName="input.veiculo.upsert.placa"
            max={7}
            placeHolder="Digite a sua placa..."
          >
            <InputText.SearchButton />
          </InputText.Text>
          <InputText.Error>{errorMessage?.placa?.message}</InputText.Error>
        </InputText.Root>

        <InputText.Root label="Ano">
          <InputText.Text<VehiclesAndInstallerFormData>
            fieldName="input.veiculo.upsert.ano"
            placeHolder="Digite o ano..."
          />
          <InputText.Error>{errorMessage?.ano?.message}</InputText.Error>
        </InputText.Root>
      </div>

      <InputText.Root label="Modelo">
        <InputText.Text<VehiclesAndInstallerFormData>
          fieldName="input.veiculo.upsert.modelo"
          placeHolder="Digite o modelo..."
        />
        <InputText.Error>{errorMessage?.modelo?.message}</InputText.Error>
      </InputText.Root>

      <InputText.Root label="Marca">
        <InputText.Text<VehiclesAndInstallerFormData>
          fieldName="input.veiculo.upsert.marca"
          placeHolder="Digite a marca..."
        />
        <InputText.Error>{errorMessage?.marca?.message}</InputText.Error>
      </InputText.Root>

      <InputText.Root label="Tipo do Veículo" optional>
        <InputText.Text<VehiclesAndInstallerFormData>
          fieldName="input.veiculo.upsert.tipoVeiculo.connect.id"
          placeHolder="Digite o tipo do veículo..."
        />
        <InputText.Error>
          {errorMessage?.tipoVeiculo?.connect?.id?.message}
        </InputText.Error>
      </InputText.Root>
    </fieldset>
  )
}
