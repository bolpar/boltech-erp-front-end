import * as InputText from '@/components/UI/input-text'
import { LegendFieldset } from '@/components/legend-fieldset'
import { UseFormRegister } from 'react-hook-form'
import { DataFromSallesForm } from '../@form/data-form-schema'

interface AddressFieldsetProps {
  register: UseFormRegister<DataFromSallesForm>
}

export const AddressFieldset = ({ register }: AddressFieldsetProps) => {
  return (
    <fieldset className="grid grid-cols-3 gap-4">
      <LegendFieldset>ENDEREÇO</LegendFieldset>

      <div className="col-span-3 grid grid-cols-3 gap-4">
        <InputText.Root label="CEP">
          <InputText.Input
            placeHolder="Digite aqui seu CEP..."
            {...register('input.pedidoVenda.endereco.create.cep')}
          />
          <InputText.SearchButton />
        </InputText.Root>
        <InputText.Root label="Endereço">
          <InputText.Input
            placeHolder="Digite aqui seu endereço..."
            {...register('input.pedidoVenda.endereco.create.rua')}
          />
        </InputText.Root>

        <div className="col-span-1 flex items-center gap-4">
          <InputText.Root label="Número">
            <InputText.Input
              placeHolder="Digite aqui seu número..."
              {...register('input.pedidoVenda.endereco.create.numero')}
            />
          </InputText.Root>
          <InputText.Root label="Complemento">
            <InputText.Input
              placeHolder="Digite aqui seu complemento..."
              {...register('input.pedidoVenda.endereco.create.complemento')}
            />
          </InputText.Root>
        </div>
      </div>

      <div className="col-span-3 grid grid-cols-3 gap-4">
        <InputText.Root label="Bairro">
          <InputText.Input
            placeHolder="Digite aqui seu bairro..."
            {...register('input.pedidoVenda.endereco.create.bairro')}
          />
        </InputText.Root>
        <InputText.Root label="Cidade">
          <InputText.Input
            placeHolder="Digite aqui sua cidade..."
            {...register('input.pedidoVenda.endereco.create.cidade')}
          />
        </InputText.Root>
        <InputText.Root label="UF">
          <InputText.Input
            placeHolder="Digite aqui o UF..."
            {...register('input.pedidoVenda.endereco.create.estado')}
          />
        </InputText.Root>
      </div>
    </fieldset>
  )
}
