import * as InputField from '@/components/UI/input'
import { LegendFieldset } from '@/components/legend-fieldset'
import { useFormContext } from 'react-hook-form'
import { DataFromSallesForm } from './@form/data-form-schema'

export const AddressFieldset = () => {
  const {
    formState: { errors },
  } = useFormContext<DataFromSallesForm>()
  const errorMessage = errors.input?.pedidoVenda

  return (
    <fieldset className="grid grid-cols-3 gap-4">
      <LegendFieldset>ENDEREÇO</LegendFieldset>

      <div className="col-span-3 grid grid-cols-3 gap-4">
        <InputField.Root label="CEP">
          <InputField.Text<DataFromSallesForm>
            fieldName="input.pedidoVenda.endereco.create.cep"
            min={8}
            max={8}
            placeHolder="Digite aqui seu CEP..."
            className="col-span-full"
          >
            <InputField.SearchButton />
          </InputField.Text>
          <InputField.Error>
            {errorMessage?.endereco?.create?.cep?.message as string}
          </InputField.Error>
        </InputField.Root>

        <div className="col-span-3 grid grid-cols-3 gap-4">
          <InputField.Root label="Endereço" optional>
            <InputField.Text<DataFromSallesForm>
              fieldName="input.pedidoVenda.endereco.create.rua"
              max={255}
              placeHolder="Digite aqui seu endereço..."
            />
          </InputField.Root>

          <InputField.Root label="Número">
            <InputField.Text<DataFromSallesForm>
              fieldName="input.pedidoVenda.endereco.create.numero"
              max={20}
              placeHolder="Digite aqui seu número..."
            />
            <InputField.Error>
              {errorMessage?.endereco?.create?.numero?.message as string}
            </InputField.Error>
          </InputField.Root>

          <InputField.Root label="Complemento" optional>
            <InputField.Text<DataFromSallesForm>
              fieldName="input.pedidoVenda.endereco.create.complemento"
              max={255}
              placeHolder="Digite aqui seu complemento..."
            />
          </InputField.Root>
        </div>
      </div>

      <div className="col-span-3 grid grid-cols-3 gap-4">
        <InputField.Root label="Bairro" optional>
          <InputField.Text<DataFromSallesForm>
            fieldName="input.pedidoVenda.endereco.create.bairro"
            max={30}
            placeHolder="Digite aqui seu bairro..."
          />
        </InputField.Root>

        <InputField.Root label="Cidade" optional>
          <InputField.Text<DataFromSallesForm>
            fieldName="input.pedidoVenda.endereco.create.cidade"
            max={30}
            placeHolder="Digite aqui sua cidade..."
          />
        </InputField.Root>

        <InputField.Root label="UF" optional>
          <InputField.Text<DataFromSallesForm>
            fieldName="input.pedidoVenda.endereco.create.estado"
            min={2}
            max={2}
            placeHolder="Digite aqui o UF..."
          />
        </InputField.Root>
      </div>
    </fieldset>
  )
}
