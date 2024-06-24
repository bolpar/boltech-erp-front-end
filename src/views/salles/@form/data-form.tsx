'use client'

import { Actions } from '@/components/actions'
import { Separator } from '@/components/separator'
import { createBasicInfo } from '@/services/mutations/create-basic-info'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { AddressFieldset } from '../data/address-fieldset'
import { BasicInfoFieldset } from '../data/basic-info-fieldset'
import { EquipmentFieldset } from '../data/equipment-fieldset'
import { FieldsetHeader } from '../data/fieldset-header'
import { PaymentFieldset } from '../data/payment-fieldset'
import { PlansFieldset } from '../data/plans-fieldset'
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

  const {
    handleSubmit,
    formState: { errors },
  } = dataForm

  async function onSubmitData(data: DataFromSallesForm) {
    console.log(`Formulário: ${JSON.stringify(data)}`)

    try {
      const response = await createBasicInfo({ input: data.input })
      console.log(`Resposta: ${JSON.stringify(response)}`)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log(errors)
  }, [errors])

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
        <Actions />
      </form>
    </FormProvider>
  )
}
