import * as InputText from '@/components/UI/input-text'
import { LegendFieldset } from '@/components/legend-fieldset'
import { UseFormRegister } from 'react-hook-form'
import { DataFromSallesForm } from '../@form/data-form-schema'

interface BasicInfoFieldsetProps {
  register: UseFormRegister<DataFromSallesForm>
}

export const BasicInfoFieldset = ({ register }: BasicInfoFieldsetProps) => {
  return (
    <fieldset className="grid grid-cols-3 gap-4">
      <LegendFieldset>INFORMAÇÕES BÁSICAS</LegendFieldset>

      <InputText.Root label="Nome">
        <InputText.Input
          placeHolder="Digite aqui seu nome..."
          {...register('input.pedidoVenda.lead.upsert.nome')}
        />
      </InputText.Root>
      <InputText.Root label="CPF/CNPJ" optional>
        <InputText.Input
          placeHolder="Digite aqui seu CPF/CNPJ..."
          {...register('input.pedidoVenda.lead.upsert.nome')}
        />
      </InputText.Root>
      <InputText.Root label="Data de Nascimento" optional>
        <InputText.Input
          placeHolder="Digite aqui a sua data de nascimento..."
          {...register('input.pedidoVenda.lead.upsert.data_nascimento')}
        />
      </InputText.Root>
      <InputText.Root label="E-mail">
        <InputText.Input
          placeHolder="Digite aqui seu endereço de e-mail..."
          {...register('input.pedidoVenda.contatos.create.valor')}
        />
      </InputText.Root>
      <InputText.Root label="Celular">
        <InputText.Input
          placeHolder="Digite aqui seu número de celular..."
          {...register('input.pedidoVenda.contatos.create.valor')}
        />
      </InputText.Root>
      <InputText.Root label="Telefone" optional>
        <InputText.Input
          placeHolder="Digite aqui seu número de telefone..."
          {...register('input.pedidoVenda.contatos.create.valor')}
        />
      </InputText.Root>
    </fieldset>
  )
}
