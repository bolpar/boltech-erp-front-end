import * as InputText from '@/components/UI/input-text'
import { LegendFieldset } from '@/components/legend-fieldset'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { DataFromSallesForm } from '../@form/data-form-schema'

interface AddressFieldsetProps {
  register: UseFormRegister<DataFromSallesForm>
  errors: FieldErrors<DataFromSallesForm>
}

export const AddressFieldset = ({ register, errors }: AddressFieldsetProps) => {
  return (
    <fieldset className="grid grid-cols-3 gap-4">
      <LegendFieldset>ENDEREÇO</LegendFieldset>

      <div className="col-span-3 grid grid-cols-3 gap-4">
        <InputText.Root label="CEP">
          <InputText.Input
            placeHolder="Digite aqui seu CEP..."
            register={register('input.pedidoVenda.endereco.create.cep')}
          >
            <InputText.SearchButton />
          </InputText.Input>
          <InputText.Error>
            {
              errors?.input?.pedidoVenda?.endereco?.create?.cep
                ?.message as string
            }
          </InputText.Error>
        </InputText.Root>
        <InputText.Root label="Endereço" >
          <InputText.Input
            placeHolder="Digite aqui seu endereço..."
            register={register('input.pedidoVenda.endereco.create.rua')}
          />
        </InputText.Root>

        <div className="col-span-1 flex items-center gap-4">
          <InputText.Root label="Número">
            <InputText.Input
              placeHolder="Digite aqui seu número..."
              register={register('input.pedidoVenda.endereco.create.numero')}
            />
            <InputText.Error>
              {
                errors.input?.pedidoVenda?.endereco?.create?.numero
                  ?.message as string
              }
            </InputText.Error>
          </InputText.Root>
          {/* <InputText.Root label="Complemento" >
            <InputText.Input
              placeHolder="Digite aqui seu complemento..."
              register={register(
                'input.pedidoVenda.endereco.create.complemento',
              )}
            />
          </InputText.Root> */}
        </div>
      </div>

      <div className="col-span-3 grid grid-cols-3 gap-4">
        <InputText.Root label="Bairro" >
          <InputText.Input
            placeHolder="Digite aqui seu bairro..."
            register={register('input.pedidoVenda.endereco.create.bairro')}
          />
        </InputText.Root>
        <InputText.Root label="Cidade" >
          <InputText.Input
            placeHolder="Digite aqui sua cidade..."
            register={register('input.pedidoVenda.endereco.create.cidade')}
          />
        </InputText.Root>
        <InputText.Root label="UF">
          <InputText.Input
            min={2}
            max={2}
            type='text'
            placeHolder="Digite aqui o UF..."
            register={register('input.pedidoVenda.endereco.create.estado')}
          />
        </InputText.Root>
      </div>
    </fieldset>
  )
}
