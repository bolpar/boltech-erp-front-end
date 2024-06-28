'use client'

import { Actions } from '@/components/actions'
import { Separator } from '@/components/separator'
import { createBasicInfo } from '@/graphql/mutations/create-basic-info'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { AddressFieldset } from '../address-fieldset'
import { BasicInfoFieldset } from '../basic-info-fieldset'
import { EquipmentFieldset } from '../equipment-fieldset'
import { FieldsetHeader } from '../fieldset-header'
import { FinalValue } from '../final-value'
import { PaymentFieldset } from '../payment-fieldset'
import { PlansFieldset } from '../plans-fieldset'
import { DataFromSallesForm, dataFormSchema } from './data-form-schema'

export const DataForm = () => {
  const dataForm = useForm<DataFromSallesForm>({
    resolver: zodResolver(dataFormSchema),
    defaultValues: {
      input: {
        pedidoVenda: {
          contatos: {
            create: [
              {
                tipo: 'Email',
                padrao: true,
              },
              {
                tipo: 'Telefone',
                padrao: true,
              },
              {
                tipo: 'Celular',
                padrao: true,
              },
            ],
          },
        },
      },
    },
  })

  const { handleSubmit } = dataForm

  async function onSubmitData(data: DataFromSallesForm) {
    console.log(`Formulário: ${JSON.stringify(data)}`)

    try {
      const response = await createBasicInfo({ input: data.input })
      console.log(`Resposta: ${JSON.stringify(response)}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <FormProvider {...dataForm}>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <FieldsetHeader />
        <BasicInfoFieldset />
        <AddressFieldset />
        <PlansFieldset />
        <EquipmentFieldset />
        <PaymentFieldset />
        <Separator />
        <div className="flex items-center justify-center gap-8">
          <FinalValue label="Valor Unitário" value={422} />
          <FinalValue label="Valor Final" value={1688} />
        </div>
        <Separator />
        <Actions />
      </form>
    </FormProvider>
  )
}
