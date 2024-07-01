import * as InputField from '@/components/UI/input'
import { LegendFieldset } from '@/components/legend-fieldset'
import { useFormContext } from 'react-hook-form'
import { DataFromSallesForm } from './@form/data-form-schema'

export const BasicInfoFieldset = () => {
  const {
    formState: { errors },
    register,
  } = useFormContext<DataFromSallesForm>()
  const errorMessage = errors.input?.pedidoVenda

  return (
    <fieldset className="grid grid-cols-3 gap-4">
      <LegendFieldset>INFORMAÇÕES BÁSICAS</LegendFieldset>

      <InputField.Root label="Nome">
        <InputField.Text<DataFromSallesForm>
          fieldName="input.pedidoVenda.lead.upsert.nome"
          placeHolder="Digite aqui seu nome..."
        />
        <InputField.Error>
          {errorMessage?.lead?.upsert?.nome?.message as string}
        </InputField.Error>
      </InputField.Root>

      <InputField.Root label="CPF/CNPJ" optional>
        <InputField.Text<DataFromSallesForm>
          min={11}
          max={14}
          fieldName="input.pedidoVenda.lead.upsert.documento"
          placeHolder="Digite aqui seu CPF/CNPJ..."
        />
        <InputField.Error>
          {errorMessage?.lead?.upsert?.documento?.message as string}
        </InputField.Error>
      </InputField.Root>

      <InputField.Root label="Data de Nascimento" optional>
        <InputField.Text<DataFromSallesForm>
          fieldName="input.pedidoVenda.lead.upsert.data_nascimento"
          placeHolder="Digite aqui a sua data de nascimento..."
        />
        <InputField.Error>
          {errorMessage?.lead?.upsert?.data_nascimento?.message as string}
        </InputField.Error>
      </InputField.Root>

      <InputField.Root label="E-mail">
        <InputField.Text<DataFromSallesForm>
          fieldName="input.pedidoVenda.contatos.create.0.valor"
          placeHolder="Digite aqui seu endereço de e-mail..."
        />
        <InputField.Error>
          {errorMessage?.contatos?.create &&
            (errorMessage.contatos.create[0]?.valor?.message as string)}
        </InputField.Error>
      </InputField.Root>

      <InputField.Root label="Celular">
        <InputField.Text<DataFromSallesForm>
          fieldName="input.pedidoVenda.contatos.create.1.valor"
          placeHolder="Digite aqui seu número de celular..."
        />
        <InputField.Error>
          {errorMessage?.contatos?.create &&
            (errorMessage.contatos.create[1]?.valor?.message as string)}
        </InputField.Error>
      </InputField.Root>

      <InputField.Root label="Telefone">
        <InputField.Text<DataFromSallesForm>
          fieldName="input.pedidoVenda.contatos.create.2.valor"
          placeHolder="Digite aqui seu número de telefone..."
        />
        <InputField.Error>
          {errorMessage?.contatos?.create &&
            (errorMessage.contatos.create[2]?.valor?.message as string)}
        </InputField.Error>
      </InputField.Root>
    </fieldset>
  )
}
