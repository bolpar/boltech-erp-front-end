import * as InputText from '@/components/UI/input-text'
import { LegendFieldset } from '@/components/legend-fieldset'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { DataFromSallesForm } from '../@form/data-form-schema'

interface BasicInfoFieldsetProps {
  register: UseFormRegister<DataFromSallesForm>
  errors: FieldErrors<DataFromSallesForm>
}

export const BasicInfoFieldset = ({
  register,
  errors,
}: BasicInfoFieldsetProps) => {
  return (
    <fieldset className="grid grid-cols-3 gap-4">
      <LegendFieldset>INFORMAÇÕES BÁSICAS</LegendFieldset>

      <InputText.Root label="Nome">
        <InputText.Input
          placeHolder="Digite aqui seu nome..."
          register={register('input.pedidoVenda.lead.upsert.nome')}
        />
        <InputText.Error>
          {errors.input?.pedidoVenda?.lead?.upsert?.nome?.message as string}
        </InputText.Error>
      </InputText.Root>

      <InputText.Root label="CPF/CNPJ" optional>
        <InputText.Input
          placeHolder="Digite aqui seu CPF/CNPJ..."
          register={register('input.pedidoVenda.lead.upsert.documento')}
        />
      </InputText.Root>
      <InputText.Root label="Data de Nascimento" optional>
        <InputText.Input
          placeHolder="Digite aqui a sua data de nascimento..."
          register={register('input.pedidoVenda.lead.upsert.data_nascimento')}
        />
      </InputText.Root>
      <InputText.Root label="E-mail" optional>
        <InputText.Input
          placeHolder="Digite aqui seu endereço de e-mail..."
          register={register('input.pedidoVenda.contatos.create.0.valor')}
        />
      </InputText.Root>
      <InputText.Root label="Celular">
        <InputText.Input
          placeHolder="Digite aqui seu número de celular..."
          register={register('input.pedidoVenda.contatos.create.1.valor')}
        />
        <InputText.Error>
          {errors?.input?.pedidoVenda?.contatos?.message as string}
        </InputText.Error>
      </InputText.Root>
      <InputText.Root label="Telefone" optional>
        <InputText.Input
          placeHolder="Digite aqui seu número de telefone..."
          register={register('input.pedidoVenda.contatos.create.2.valor')}
        />
      </InputText.Root>
    </fieldset>
  )
}
